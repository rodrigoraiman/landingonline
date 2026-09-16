export const CONTACT_LIMITS = { name: 120, email: 254, phone: 40, message: 5000 } as const;

export type ContactData = {
  name: string;
  email: string;
  phone: string | null;
  message: string;
};

type ValidationResult = { ok: true; data: ContactData } | { ok: false; error: string };

export function validateContact(input: unknown): ValidationResult {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return { ok: false, error: 'Le formulaire doit contenir un nom, un e-mail et un message.' };
  }
  const value = input as Record<string, unknown>;
  if (typeof value.name !== 'string' || !value.name.trim() || value.name.trim().length > CONTACT_LIMITS.name || /[\r\n\u0000]/.test(value.name)) {
    return { ok: false, error: 'Indiquez votre nom (120 caractères maximum).' };
  }
  if (typeof value.email !== 'string' || value.email.includes('\u0000') || value.email.trim().length > CONTACT_LIMITS.email || !/^[^\s@<>"\\]+@[^\s@<>"\\]+\.[^\s@<>"\\]+$/.test(value.email.trim())) {
    return { ok: false, error: 'Indiquez une adresse e-mail valide (254 caractères maximum).' };
  }
  if (value.phone !== undefined && value.phone !== null && (typeof value.phone !== 'string' || value.phone.trim().length > CONTACT_LIMITS.phone || /[\r\n\u0000]/.test(value.phone))) {
    return { ok: false, error: 'Le téléphone doit être un texte de 40 caractères maximum.' };
  }
  if (typeof value.message !== 'string' || !value.message.trim() || value.message.trim().length > CONTACT_LIMITS.message || value.message.includes('\u0000')) {
    return { ok: false, error: 'Écrivez votre message (5 000 caractères maximum).' };
  }
  return {
    ok: true,
    data: {
      name: value.name.trim(), email: value.email.trim(),
      phone: typeof value.phone === 'string' ? value.phone.trim() || null : null,
      message: value.message.trim(),
    },
  };
}
