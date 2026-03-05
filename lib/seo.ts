export const siteMetadata = {
  title: 'Terre Paysage - Entretien de Jardins Professionnel | Saint-Ismier, Grenoble',
  description: 'Entretien complet de jardins à Saint-Ismier, Biviers, Montbonnot et environs. Tonte, taille de haies, désherbage, nettoyage terrasses. Devis gratuit sous 24h. Interventions rapides et déchets verts inclus.',
  keywords: 'entretien jardin Saint-Ismier, jardinier Grenoble, tonte pelouse Biviers, taille haies Montbonnot, paysagiste Isère, nettoyage terrasse, désherbage professionnel, entretien espace vert',
  ogImage: 'https://terrepaysage.com/og-image.jpg',
  url: 'https://terrepaysage.com',
};

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://terrepaysage.com/#organization',
    name: 'Terre Paysage',
    description: 'Service professionnel d\'entretien de jardins à Saint-Ismier et environs de Grenoble. Tonte, taille, désherbage, nettoyage terrasses.',
    url: 'https://terrepaysage.com',
    telephone: '+33 6 65 19 27 66',
    email: 'contact@terrepaysage.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Saint-Ismier',
      addressLocality: 'Saint-Ismier',
      postalCode: '38330',
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.2492,
      longitude: 5.8294,
    },
    areaServed: [
      { '@type': 'City', name: 'Saint-Ismier' },
      { '@type': 'City', name: 'Biviers' },
      { '@type': 'City', name: 'Montbonnot-Saint-Martin' },
      { '@type': 'City', name: 'Bernin' },
      { '@type': 'City', name: 'Meylan' },
      { '@type': 'City', name: 'Grenoble' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '12:00',
      },
    ],
    image: 'https://terrepaysage.com/og-image.jpg',
    priceRange: '€€',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'EUR',
    sameAs: [
      'https://www.facebook.com/terrepaysage',
      'https://www.instagram.com/terrepaysage',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services d\'entretien de jardins',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tonte de pelouse',
            description: 'Tonte régulière de gazon avec évacuation des déchets verts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Taille de haies',
            description: 'Taille et entretien de haies, arbustes et buissons',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Désherbage',
            description: 'Désherbage manuel et écologique de vos espaces verts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nettoyage terrasse',
            description: 'Nettoyage haute pression de terrasses et allées',
          },
        },
      ],
    },
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Intervenez-vous toute l\'année ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous intervenons toute l\'année selon les besoins saisonniers. L\'entretien varie d\'une saison à l\'autre (tonte plus fréquente en printemps/été, nettoyage en automne, etc.). Nous ajustons nos services en fonction du calendrier botanique.',
        },
      },
      {
        '@type': 'Question',
        name: 'Que faites-vous des déchets verts ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tous les déchets verts (tontes, branches, feuilles) sont évacués directement lors de chaque intervention. Nous respectons les réglementations locales de compostage ou d\'évacuation. Aucun déchet ne reste sur votre propriété.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment fonctionne le devis ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le devis est gratuit et sans engagement. Nous visitons votre jardin, évaluons la superficie, l\'accès, et le type de travaux nécessaires. Nous vous proposons ensuite une estimation précise et personnalisée avant d\'intervenir.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des contrats d\'entretien régulier ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous proposons des contrats flexibles (mensuel, saisonnier, ou ponctuel). Ces contrats incluent un suivi régulier et des ajustements selon vos attentes et les conditions climatiques.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels sont vos délais d\'intervention ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous répondons aux devis dans les 24 heures. Pour les interventions ponctuelles, nous pouvons généralement vous proposer des dates dans la semaine. Pour les contrats, nous établissons un calendrier régulier convenant aux deux parties.',
        },
      },
      {
        '@type': 'Question',
        name: 'Avez-vous une assurance ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bien sûr ! Nous sommes pleinement assurés pour tous types d\'interventions. Notre assurance responsabilité couvre les dommages éventuels à votre propriété. Vous pouvez demander les justificatifs lors du devis.',
        },
      },
    ],
  };
}
