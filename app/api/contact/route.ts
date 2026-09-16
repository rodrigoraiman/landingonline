import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { validateContact } from '@/lib/contact-validation';
import { sendContactNotification } from '@/lib/contact-notification';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  let input: unknown;
  try {
    input = await req.json();
  } catch {
    return NextResponse.json({ ok: false, saved: false, error: 'Le formulaire envoyé est illisible.' }, { status: 400 });
  }
  const validated = validateContact(input);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, saved: false, error: validated.error }, { status: 400 });
  }

  let contact;
  try {
    contact = await prisma.contact.create({ data: validated.data });
  } catch {
    console.error('Échec de l’enregistrement du contact.');
    return NextResponse.json({ ok: false, saved: false, error: 'L’enregistrement a échoué. Veuillez réessayer dans quelques instants.' }, { status: 500 });
  }

  // Le contact reste enregistré, même si le fournisseur de courrier échoue.
  const notification = await sendContactNotification(contact);
  if (notification.status === 'failed') {
    console.error('Contact enregistré ; notification Resend non confirmée.', { contactId: contact.id, ...notification });
  }
  return NextResponse.json({ ok: true, saved: true, contact, notification: notification.status }, { status: 201 });
}
