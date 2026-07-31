import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const BASE_URL = 'https://terrepaysage.com';

type LocalPageData = {
  city: string;
  h1: string;
  primaryService: string;
  targetQuery: string;
};

const LOCAL_PAGES: Record<string, LocalPageData> = {
  'jardinier-saint-ismier': {
    city: 'Saint-Ismier',
    h1: 'Jardinier à Saint-Ismier',
    primaryService: 'Entretien de jardin',
    targetQuery: 'jardinier Saint-Ismier',
  },
  'entretien-jardin-meylan': {
    city: 'Meylan',
    h1: 'Jardinier à Meylan',
    primaryService: 'Entretien de jardin',
    targetQuery: 'entretien jardin Meylan',
  },
  'jardinier-montbonnot-saint-martin': {
    city: 'Montbonnot-Saint-Martin',
    h1: 'Jardinier à Montbonnot-Saint-Martin',
    primaryService: 'Entretien de jardin',
    targetQuery: 'entreprise entretien jardin Montbonnot-Saint-Martin',
  },
  'taille-haie-crolles': {
    city: 'Crolles',
    h1: 'Jardinier à Crolles',
    primaryService: 'Taille de haies',
    targetQuery: 'taille de haie Crolles',
  },
  'debroussaillage-bernin': {
    city: 'Bernin',
    h1: 'Jardinier à Bernin',
    primaryService: 'Débroussaillage',
    targetQuery: 'débroussaillage Bernin',
  },
  'jardinier-biviers': {
    city: 'Biviers',
    h1: 'Jardinier à Biviers',
    primaryService: 'Entretien de jardin',
    targetQuery: 'jardinier Biviers',
  },
  'entretien-jardin-grenoble': {
    city: 'Grenoble',
    h1: 'Jardinier à Grenoble',
    primaryService: 'Entretien de jardin',
    targetQuery: 'entretien jardin Grenoble',
  },
  'jardinier-corenc': {
    city: 'Corenc',
    h1: 'Jardinier à Corenc',
    primaryService: 'Entretien de jardin',
    targetQuery: 'jardinier Corenc',
  },
} as const;

type LocalSlug = keyof typeof LOCAL_PAGES;
export const LOCAL_PAGE_SLUGS = Object.keys(LOCAL_PAGES) as LocalSlug[];

const buildSeoMeta = (page: LocalPageData, slug: string) => {
  const title = `${page.primaryService} à ${page.city} | Terre Paysage`;
  const description = `${page.targetQuery} : ${page.primaryService.toLowerCase()} par une entreprise locale. Tonte, taille, débroussaillage, élagage et évacuation des déchets verts. Devis gratuit et intervention rapide.`;
  const canonical = `${BASE_URL}/${slug}`;
  return { title, description, canonical };
};

const normalizeLocalSlug = (value: string) =>
  decodeURIComponent(value).trim().toLowerCase().replace(/\/+$/, '');

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

export function generateStaticParams() {
  return Object.keys(LOCAL_PAGES).map((localPage) => ({ localPage }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ localPage: string }>;
}): Promise<Metadata> {
  const { localPage } = await params;
  const slug = normalizeLocalSlug(localPage);
  const page = LOCAL_PAGES[slug as LocalSlug];
  if (!page) return { title: 'Page locale' };

  const seo = buildSeoMeta(page, slug);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: 'Terre Paysage',
      type: 'website',
      locale: 'fr_FR',
    },
  };
}

export default async function LocalPage({
  params,
}: {
  params: Promise<{ localPage: string }>;
}) {
  const { localPage } = await params;
  const slug = normalizeLocalSlug(localPage);
  const page = LOCAL_PAGES[slug as LocalSlug];
  if (!page) notFound();

  const intro = `Terre Paysage intervient régulièrement à ${page.city} pour ${page.primaryService.toLowerCase()} des jardins privés, avec une approche adaptée à chaque terrain et à chaque saison. Nous travaillons aussi bien sur des petits jardins urbains que sur des espaces extérieurs plus étendus, en tenant compte du type de végétation, de la fréquence d’entretien souhaitée et de vos priorités esthétiques. Nos prestations couvrent la tonte, la taille de haies, le débroussaillage, l’élagage de petits arbres, le nettoyage d’allées et l’évacuation complète des déchets verts. Vous bénéficiez d’un interlocuteur local, d’une intervention rapide et d’un travail soigné, avec des finitions nettes et un jardin plus facile à entretenir dans la durée. Que vous recherchiez une intervention ponctuelle ou un entretien annuel, nous proposons un devis gratuit et transparent. Notre objectif est simple: vous garantir un extérieur propre, équilibré et agréable toute l’année, sans contrainte de gestion pour vous.`;

  const faq = [
    {
      q: `Quel est le tarif d'un jardinier à ${page.city} ?`,
      a: "Le tarif dépend de la surface, de la fréquence et des prestations demandées. Nous proposons un devis gratuit pour un prix précis et transparent.",
    },
    {
      q: "Faites-vous l'entretien annuel ?",
      a: "Oui, nous proposons des formules d’entretien annuel avec passages réguliers selon les saisons et les besoins du jardin.",
    },
    {
      q: "Intervenez-vous chez les particuliers ?",
      a: "Oui, nous intervenons principalement chez les particuliers pour l’entretien et l’embellissement des espaces verts.",
    },
  ];

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Terre Paysage',
    areaServed: page.city,
    url: `${BASE_URL}/${slug}`,
    serviceType: [
      page.primaryService,
      'Tonte',
      'Taille de haies',
      'Débroussaillage',
      'Élagage de petits arbres',
      "Nettoyage d'allées",
      'Évacuation des déchets verts',
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <main className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">{page.h1}</h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">{intro}</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Tonte</li>
            <li>Taille de haies</li>
            <li>Débroussaillage</li>
            <li>Élagage de petits arbres</li>
            <li>Nettoyage d&apos;allées</li>
            <li>Évacuation des déchets verts</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pourquoi choisir Terre Paysage ?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Entreprise locale</li>
            <li>Devis gratuit</li>
            <li>Intervention rapide</li>
            <li>Travail soigné</li>
            <li>Évacuation comprise</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {faq.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-12"
        >
          Demander un devis
        </Link>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos secteurs d&apos;intervention</h2>
          <div className="flex flex-wrap gap-3">
            {sectors.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
