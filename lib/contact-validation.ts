export const CONTACT_LIMITS = { name: 120, email: 254, phone: 40, message: 5000, commune: 120 } as const;

export const CONTACT_SERVICES = {
  taille_de_haies: 'Taille de haies', debroussaillage: 'Débroussaillage',
  tonte: 'Tonte', remise_en_etat: 'Remise en état',
  entretien_regulier: 'Entretien régulier', autre: 'Autre',
} as const;
export type ContactService = keyof typeof CONTACT_SERVICES;

export type ContactData = {
  name: string;
  email: string;
  phone: string | null;
  message: string;
  service: ContactService;
  commune: string;
  contactPreference: 'email' | 'telephone';
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
  if (typeof value.service !== 'string' || !Object.prototype.hasOwnProperty.call(CONTACT_SERVICES, value.service)) {
    return { ok: false, error: 'Choisissez le service qui vous intéresse.' };
  }
  if (typeof value.commune !== 'string' || !value.commune.trim() || value.commune.trim().length > CONTACT_LIMITS.commune || /[\r\n\u0000]/.test(value.commune)) {
    return { ok: false, error: 'Indiquez la commune du jardin (120 caractères maximum).' };
  }
  if (value.contactPreference !== 'email' && value.contactPreference !== 'telephone') {
    return { ok: false, error: 'Choisissez comment vous souhaitez être recontacté.' };
  }
  if (value.contactPreference === 'telephone' && (typeof value.phone !== 'string' || !/^[+()\d .-]+$/.test(value.phone.trim()) || value.phone.replace(/\D/g, '').length < 6)) {
    return { ok: false, error: 'Indiquez un numéro de téléphone pour être rappelé.' };
  }
  return {
    ok: true,
    data: {
      name: value.name.trim(), email: value.email.trim(),
      phone: value.contactPreference === 'telephone' && typeof value.phone === 'string' ? value.phone.trim() : null,
      message: value.message.trim(),
      service: value.service as ContactService, commune: value.commune.trim(),
      contactPreference: value.contactPreference,
    },
  };
}
