// Registre des seules routes locales existantes, utilisable aussi côté client.
export const LOCAL_ROUTES = {
  'jardinier-saint-ismier': { city: 'Saint-Ismier', primaryService: 'Entretien de jardin' },
  'entretien-jardin-meylan': { city: 'Meylan', primaryService: 'Entretien de jardin' },
  'jardinier-biviers': { city: 'Biviers', primaryService: 'Entretien de jardin' },
  'jardinier-montbonnot-saint-martin': { city: 'Montbonnot-Saint-Martin', primaryService: 'Entretien de jardin' },
  'taille-haie-crolles': { city: 'Crolles', primaryService: 'Taille de haies' },
  'debroussaillage-bernin': { city: 'Bernin', primaryService: 'Débroussaillage' },
  'entretien-jardin-grenoble': { city: 'Grenoble', primaryService: 'Entretien de jardin' },
  'jardinier-corenc': { city: 'Corenc', primaryService: 'Entretien de jardin' },
} as const;

export type LocalSlug = keyof typeof LOCAL_ROUTES;
export const LOCAL_PAGE_SLUGS = Object.keys(LOCAL_ROUTES) as LocalSlug[];
export function isLocalSlug(value: string): value is LocalSlug {
  return Object.prototype.hasOwnProperty.call(LOCAL_ROUTES, value);
}
