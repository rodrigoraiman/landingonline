import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

// Execute the real TypeScript modules with isolated Prisma, env and HTTP boundaries.
// No database writes or emails are performed by this suite.
function loadModule(path, imports = {}, globals = {}) {
  const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  vm.runInNewContext(outputText, {
    exports, AbortSignal,
    require: name => {
      if (!(name in imports)) throw new Error(`Unexpected import: ${name}`);
      return imports[name];
    },
    ...globals,
  });
  return exports;
}

const validation = loadModule('lib/contact-validation.ts');
const input = { service: 'taille_de_haies', commune: ' Meylan ', contactPreference: 'telephone', name: ' Camille ', email: ' camille@example.com ', phone: ' +33 6 00 00 00 00 ', message: ' Entretenir mes haies. ' };

function fixture({ dbFailure = false, emailStatus = 200, emailFailure = false, configured = true } = {}) {
  const calls = [], saved = [], emails = [], logs = [];
  const console = { error: (...args) => logs.push(args) };
  const process = { env: configured ? { RESEND_API_KEY: 'test-placeholder', RESEND_FROM_EMAIL: 'Test <sender@example.com>' } : {} };
  const notification = loadModule('lib/contact-notification.ts', { './contact-validation': validation }, {
    process,
    fetch: async (url, options) => {
      calls.push('email'); emails.push({ url, options, body: JSON.parse(options.body) });
      if (emailFailure) throw new Error('Simulated network timeout');
      return { ok: emailStatus < 300, status: emailStatus };
    },
  });
  class PrismaClient {
    contact = { create: async ({ data }) => {
      calls.push('save');
      if (dbFailure) throw new Error('Simulated database failure');
      const record = { ...data, id: 42, createdAt: '2026-09-16T00:00:00.000Z' };
      saved.push(record);return record;
    } };
  }
  const route = loadModule('app/api/contact/route.ts', {
    'next/server': { NextResponse: { json: (data, init) => new Response(JSON.stringify(data), { ...init, headers: { 'Content-Type': 'application/json' } }) } },
    '@prisma/client': { PrismaClient },
    '@/lib/contact-validation': validation,
    '@/lib/contact-notification': notification,
  }, { process, console });
  const post = body => route.POST(new Request('http://localhost/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body),
  }));
  return { post, calls, saved, emails, logs };
}

test('invalid JSON and invalid fields never reach Prisma or Resend', async () => {
  const f = fixture();
  const invalid = ['{', null, [], {}, { ...input, name: 42 }, { ...input, name: ' ' },
    { ...input, name: 'a'.repeat(121) }, { ...input, email: 'invalid' },
    { ...input, email: 'one@example.com\r\nBcc:other@example.com' },
    { ...input, email: 'a\u0000@example.com' }, { ...input, phone: {} },
    { ...input, phone: '1'.repeat(41) }, { ...input, message: ' ' },
    { ...input, message: 'a'.repeat(5001) }];
  for (const payload of invalid) {
    const response = await f.post(payload);
    assert.equal(response.status, 400);
    assert.equal((await response.json()).saved, false);
  }
  assert.deepEqual(f.calls, []);
});

test('save precedes notification, preserves Prisma fields and sets reply_to', async () => {
  const f = fixture();
  const response = await f.post(input);
  const result = await response.json();
  assert.equal(response.status, 201);assert.equal(result.ok, true);assert.equal(result.saved, true);assert.equal(result.notification, 'sent');
  assert.deepEqual(f.calls, ['save', 'email']);
  assert.equal(result.contact, undefined);
  assert.deepEqual(f.saved[0], { service: 'taille_de_haies', commune: 'Meylan', contactPreference: 'telephone', id: 42, createdAt: '2026-09-16T00:00:00.000Z', name: 'Camille', email: 'camille@example.com', phone: '+33 6 00 00 00 00', message: 'Entretenir mes haies.' });
  assert.equal(f.emails[0].url, 'https://api.resend.com/emails');
  assert.deepEqual(f.emails[0].body.to, ['contact@terrepaysage.com']);
  assert.equal(f.emails[0].body.reply_to, 'camille@example.com');
  assert.equal(f.emails[0].body.from, 'Test <sender@example.com>');
  assert.equal(f.emails[0].options.headers['Idempotency-Key'], 'contact-notification-42');
  assert.ok(f.emails[0].options.signal instanceof AbortSignal);
});

test('optional phone is stored as null when absent, blank or null', async () => {
  for (const phone of [undefined, '', '   ', null]) {
    const f = fixture();
    const result = await (await f.post({ ...input, contactPreference: 'email', phone })).json();
    assert.equal(result.saved, true);
    assert.equal(f.saved[0].phone, null);
    assert.ok(f.emails[0].body.text.includes('Téléphone : Non renseigné'));
  }
});

test('all client-provided HTML is escaped and plaintext retains the message', async () => {
  const f = fixture();
  const message = '<img src=x onerror="alert(1)">\nTom & Zoé\n\'bonjour\'';
  await f.post({ ...input, commune: '<b>Meylan & alentours</b>', name: '<b>A & B</b>', email: "o'connor@example.com", phone: '+33 6 00 00 00 00', message });
  const { html, text, reply_to } = f.emails[0].body;
  assert.ok(!html.includes('<img'));assert.ok(!html.includes('<b>'));assert.ok(!html.includes('<i>'));
  assert.ok(html.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt;'));
  assert.ok(html.includes('Tom &amp; Zoé'));assert.ok(html.includes('&#39;bonjour&#39;'));
  assert.ok(html.includes('o&#39;connor@example.com'));assert.ok(html.includes('&lt;b&gt;Meylan &amp; alentours&lt;/b&gt;'));
  assert.ok(text.includes(message));assert.equal(reply_to, "o'connor@example.com");
});

test('database failure never sends an email and returns a retryable error', async () => {
  const f = fixture({ dbFailure: true });
  const response = await f.post(input);
  assert.equal(response.status, 500);assert.equal((await response.json()).saved, false);
  assert.deepEqual(f.calls, ['save']);assert.equal(f.saved.length, 0);
});

for (const [label, options] of [
  ['Resend rejects the request', { emailStatus: 422 }],
  ['Resend is unavailable', { emailStatus: 503 }],
  ['connection times out', { emailFailure: true }],
  ['server configuration is missing', { configured: false }],
]) {
  test(`${label}: contact stays saved and response is explicitly partial success`, async () => {
    const f = fixture(options);
    const response = await f.post(input);
    const result = await response.json();
    assert.equal(response.status, 201);assert.equal(result.ok, true);assert.equal(result.saved, true);assert.equal(result.notification, 'failed');
    assert.equal(f.saved.length, 1);assert.equal(f.saved[0].id, 42);
    assert.equal(result.contact, undefined);
    assert.ok(f.emails.length <= 1);assert.equal(f.logs.length, 1);
    assert.ok(!JSON.stringify(f.logs).includes('test-placeholder'));
    assert.ok(!JSON.stringify(f.logs).includes('camille@example.com'));
  });
}


test('qualification fields validated; arbitrary communes allowed; internal fields never accepted', async () => {
  const f = fixture();
  for (const override of [{ service: 'inconnu' }, { service: '__proto__' }, { commune: '' }, { commune: 'x'.repeat(121) }, { commune: 123 }, { contactPreference: 'sms' }, { phone: '' }, { phone: 'abc' }]) {
    assert.equal((await f.post({ ...input, ...override })).status, 400);
  }
  assert.equal(f.saved.length, 0);
  await f.post({ ...input, commune: 'Autre commune', status: 'accepte', internalNote: 'injected', nextFollowUpAt: '2030-01-01' });
  assert.equal(f.saved[0].commune, 'Autre commune');
  for (const field of ['status', 'internalNote', 'nextFollowUpAt']) assert.equal(f.saved[0][field], undefined);
  const { text, html } = f.emails[0].body;
  for (const value of ['Taille de haies', 'Autre commune', 'Contact souhaité : Téléphone']) assert.ok(text.includes(value));
  assert.ok(html.includes('Taille de haies'));
});

test('analytics requires explicit consent and sends only static parameters; errors are isolated', () => {
  const calls = [];
  const window = { gtag: (...args) => calls.push(args) };
  const analytics = loadModule('lib/contact-analytics.ts', {}, { window });
  analytics.trackContactLead();
  window.terreVivaAnalyticsConsent = false;
  analytics.trackContactLead();
  assert.equal(calls.length, 0);
  window.terreVivaAnalyticsConsent = true;
  analytics.trackContactLead();
  assert.equal(JSON.stringify(calls), JSON.stringify([['event', 'generate_lead', { form_id: 'contact' }]]));
  window.gtag = () => { throw new Error('blocked'); };
  assert.doesNotThrow(() => analytics.trackContactLead());
});
