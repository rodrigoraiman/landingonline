export const siteMetadata = {
  title: 'Jardin Clair - Entretien de Jardins Professionnel',
  description: 'Entretien complet de jardins, tonte, taille de haies, désherbage, nettoyage terrasses. Devis gratuit et interventions rapides.',
  keywords: 'entretien jardin, tonte, taille haies, nettoyage terrasse, désherbant, service paysage',
  ogImage: 'https://jardin-clair.fr/og-image.jpg',
  url: 'https://jardin-clair.fr',
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jardin Clair',
    description: 'Service professionnel d\'entretien de jardins',
    url: 'https://jardin-clair.fr',
    telephone: '+33 4 XX XX XX XX',
    email: 'contact@jardinclair.fr',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Rhône-Alpes',
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'City',
      name: 'Région Rhône-Alpes',
    },
    image: 'https://jardin-clair.fr/og-image.jpg',
    priceRange: '€€',
    sameAs: [
      'https://www.facebook.com/jardinclair',
    ],
  };
}
