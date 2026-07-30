import Link from 'next/link';

const sectors = [
  { href: '/jardinier-saint-ismier', label: 'Saint-Ismier' },
  { href: '/entretien-jardin-meylan', label: 'Meylan' },
  { href: '/jardinier-montbonnot-saint-martin', label: 'Montbonnot-Saint-Martin' },
  { href: '/jardinier-biviers', label: 'Biviers' },
  { href: '/debroussaillage-bernin', label: 'Bernin' },
  { href: '/taille-haie-crolles', label: 'Crolles' },
  { href: '/entretien-jardin-grenoble', label: 'Grenoble' },
  { href: '/jardinier-corenc', label: 'Corenc' },
];

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Nos secteurs d&apos;intervention
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector) => (
            <Link
              key={sector.href}
              href={sector.href}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
            >
              {sector.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
