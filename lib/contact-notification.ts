// Module utilisé uniquement par la route serveur /api/contact.
import type { ContactData } from './contact-validation';

type SavedContact = ContactData & { id: number };
type NotificationResult =
  | { status: 'sent' }
  | { status: 'failed'; reason: 'missing_configuration' | 'provider_rejected' | 'network_error'; httpStatus?: number };

export function escapeEmailHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

export async function sendContactNotification(contact: SavedContact): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  if (!apiKey || !from) return { status: 'failed', reason: 'missing_configuration' };

  const fields = [
    ['Nom', contact.name], ['E-mail', contact.email],
    ['Téléphone', contact.phone || 'Non renseigné'], ['Message', contact.message],
  ];
  const html = `<h1>Nouvelle demande de contact</h1><dl>${fields.map(([label, value]) =>
    `<dt><strong>${label}</strong></dt><dd style="white-space:pre-wrap">${escapeEmailHtml(value)}</dd>`
  ).join('')}</dl>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `contact-notification-${contact.id}`,
      },
      body: JSON.stringify({
        from,
        to: ['contact@terrepaysage.com'],
        reply_to: contact.email,
        subject: 'Nouvelle demande de contact — Terre Viva Paysage',
        html,
        text: fields.map(([label, value]) => `${label} : ${value}`).join('\n\n'),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    // Un succès indique l’acceptation par Resend, pas la livraison dans la boîte.
    return response.ok ? { status: 'sent' } : { status: 'failed', reason: 'provider_rejected', httpStatus: response.status };
  } catch {
    // Après un timeout, l’acceptation du message par Resend peut être incertaine.
    return { status: 'failed', reason: 'network_error' };
  }
}
