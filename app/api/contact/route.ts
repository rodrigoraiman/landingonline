import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const data = await req.json();
  // Guardar en la base de datos
  try {
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
      },
    });
    return NextResponse.json({ ok: true, contact });
  } catch (error) {
    console.error('Error al guardar contacto:', error);
    return NextResponse.json({ ok: false, error: 'Error al guardar contacto' }, { status: 500 });
  }
}
