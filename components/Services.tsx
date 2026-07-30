import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-600 p-10 lg:p-12 transition-shadow group">
      <div className="mb-6 w-fit">
        <Image
          src={service.image}
          alt={service.title}
          width={96}
          height={96}
          sizes="96px"
          quality={60}
          priority={priority}
          className="w-24 h-24 rounded-full object-cover"
          onError={() => {
            console.error(`No se pudo cargar imagen: ${service.image}`);
          }}
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Tonte & bordures',
      description: 'Tonte régulière et finition impeccable des bordures pour un jardin toujours bien entretenu.',
      image: '/images/services/tonte-bordures.jpg',
    },
    {
      id: 2,
      title: 'Taille de haies & arbustes',
      description: 'Mise en forme expertise de vos haies et arbustes pour une esthétique impeccable.',
      image: '/images/services/taille-haies.jpg',
    },
    {
      id: 3,
      title: 'Élagage petits arbres',
      description: 'Élagage soigné des petits arbres pour favoriser leur croissance et maintenir une forme harmonieuse.',
      image: '/images/services/elagage-arbres.jpg',
    },
    {
      id: 4,
      title: 'Débroussaillage',
      description: 'Nettoyage en profondeur des zones sauvages et élimination des broussailles envahissantes.',
      image: '/images/services/debroussaillage.jpg',
    },
    {
      id: 5,
      title: 'Nettoyage terrasse/allées',
      description: 'Nettoyage haute pression et traitement des surfaces extérieures pour une propreté parfaite.',
      image: '/images/services/nettoyage-terrasse.jpg',
    },
    {
      id: 6,
      title: 'Évacuation déchets verts',
      description: 'Enlèvement et évacuation complète de tous les déchets verts de votre propriété.',
      image: '/images/services/dechets-verts.jpg',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Une gamme complète de solutions pour l&rsquo;entretien et l&rsquo;embellissement de votre jardin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} priority={index < 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
