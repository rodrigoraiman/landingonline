export const siteMetadata = {
  title: 'Terre Paysage - Entretien de Jardins Professionnel',
  description: 'Entretien complet de jardins, tonte, taille de haies, désherbage, nettoyage terrasses. Devis gratuit et interventions rapides.',
  keywords: 'entretien jardin, tonte, taille haies, nettoyage terrasse, désherbant, service paysage',
  ogImage: 'https://terrepaysage.com/og-image.jpg',
  url: 'https://terrepaysage.com',
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Terre Paysage',
    description: 'Service professionnel d\'entretien de jardins',
    url: 'https://terrepaysage.com',
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
    image: 'https://terrepaysage.com/og-image.jpg',
    priceRange: '€€',
    sameAs: [
      'https://www.facebook.com/terrepaysage',
    ],
  };
}
