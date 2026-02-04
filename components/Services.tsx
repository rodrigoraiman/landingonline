interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-600 p-8 transition-shadow group">
      <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg w-fit group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Tonte & bordures',
      description: 'Tonte régulière et finition impeccable des bordures pour un jardin toujours bien entretenu.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Taille de haies & arbustes',
      description: 'Mise en forme expertise de vos haies et arbustes pour une esthétique impeccable.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l-5.5 9h11z M6.5 11c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm11 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Désherbage & entretien',
      description: 'Élimination complète des mauvaises herbes et entretien des massifs fleuris.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Débroussaillage',
      description: 'Nettoyage en profondeur des zones sauvages et élimination des broussailles envahissantes.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Nettoyage terrasse/allées',
      description: 'Nettoyage haute pression et traitement des surfaces extérieures pour une propreté parfaite.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-9c.83 0 1.5.67 1.5 1.5S7.33 14 6.5 14 5 13.33 5 12.5 5.67 11 6.5 11zm11 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM12 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Évacuation déchets verts',
      description: 'Enlèvement et évacuation complète de tous les déchets verts de votre propriété.',
      icon: (
        <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une gamme complète de solutions pour l&rsquo;entretien et l&rsquo;embellissement de votre jardin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
