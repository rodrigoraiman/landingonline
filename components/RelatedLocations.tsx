import Link from 'next/link';

type LocalPageRef = {
  city: string;
  primaryService: string;
};

type Props = {
  relatedSlugs: string[];
  currentSlug: string;
  localPages: Record<string, LocalPageRef>;
};

export default function RelatedLocations({ relatedSlugs, currentSlug, localPages }: Props) {
  const validSlugs = relatedSlugs
    .filter((slug) => slug !== currentSlug && Boolean(localPages[slug]))
    .slice(0, 5);

  if (!validSlugs.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Nos interventions à proximité
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Nous intervenons également dans les communes voisines :
      </p>
      <div className="flex flex-wrap gap-3">
        {validSlugs.map((slug) => {
          const page = localPages[slug];
          return (
            <Link
              key={slug}
              href={`/${slug}`}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
            >
              {`${page.primaryService} à ${page.city}`}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
