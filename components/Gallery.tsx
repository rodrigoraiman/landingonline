'use client';

interface GalleryItemType {
  id: number;
  title: string;
  gradientColor: string;
  image?: string;
}

export default function Gallery() {
  const galleryItems: GalleryItemType[] = [
    { 
      id: 1, 
      title: 'Jardin avant entretien', 
      gradientColor: '#05df72',
      image: '/images/DSC02402.webp'
    },
    { 
      id: 2, 
      title: 'Jardin après transformation', 
      gradientColor: '#00d294', 
      image: '/images/IMG_6247.webp' 
    },
    { 
      id: 3,
      title: 'Taille de haies précise', 
      gradientColor: '#00d3bd',
      image: '/images/IMG_6387.webp'
    },
    { 
      id: 4,
      title: 'Terrasse nettoyée', 
      gradientColor: '#54a2ff',
      image: '/images/IMG_6407.webp'
    },
    { 
      id: 5,
      title: 'Massifs fleuris entretenus', 
      gradientColor: '#00d2ef',
      image: '/images/IMG_6673.webp'
    },
    { 
      id: 6,
      title: 'Allées impeccables', 
      gradientColor: '#00bcfe',
      image: '/images/IMG_9783-3.webp'
    },
  ];

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Galerie de projets
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Découvrez nos réalisations et les transformations que nous avons accomplies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              style={{
                backgroundColor: item.image ? '#ffffff' : item.gradientColor,
              }}
            >
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br" style={{backgroundImage: `linear-gradient(135deg, ${item.gradientColor}, ${item.gradientColor}dd)`}}>
                  <div className="text-center">
                    <svg className="w-16 h-16 text-white opacity-20 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    <p className="text-white text-sm font-semibold opacity-40">{item.title}</p>
                  </div>
                </div>
              )}

              {/* Overlay on hover */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
