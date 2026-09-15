import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalLandingPage from '@/components/LocalLandingPage';
import { LOCAL_PAGES } from '@/lib/local-pages';
import { isLocalSlug, LOCAL_PAGE_SLUGS, LOCAL_ROUTES } from '@/lib/local-routes';

const BASE_URL = 'https://terrepaysage.com';
type Props = { params: Promise<{ localPage: string }> };

// Seuls les huit slugs historiques sont publiés.
export const dynamicParams = false;
export function generateStaticParams() {
  return LOCAL_PAGE_SLUGS.map(localPage => ({ localPage }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { localPage: slug } = await params;
  if (!isLocalSlug(slug)) notFound();
  const { seo, hero } = LOCAL_PAGES[slug];
  const url = `${BASE_URL}/${slug}`;
  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: null,
    alternates: { canonical: url },
    openGraph: {
      ...seo, url, siteName: 'Terre Viva Paysage', type: 'website', locale: 'fr_FR',
      images: [{ url: hero.src, width: hero.width, height: hero.height, alt: hero.alt }],
    },
    twitter: { card: 'summary_large_image', ...seo, images: [hero.src] },
  };
}

export default async function LocalPage({ params }: Props) {
  const { localPage: slug } = await params;
  if (!isLocalSlug(slug)) notFound();
  const page = LOCAL_PAGES[slug];
  const { city, primaryService } = LOCAL_ROUTES[slug];
  const url = `${BASE_URL}/${slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service', '@id': `${url}#service`,
        name: `${primaryService} à ${city}`,
        serviceType: ['Entretien de jardin', 'Taille de haies', 'Débroussaillage', 'Remise en état'],
        areaServed: { '@type': 'City', name: city },
        // Réutilise l’entreprise du layout sans inventer d’établissement local.
        provider: { '@id': `${BASE_URL}#localbusiness` }, url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: page.h1, item: url },
        ],
      },
      {
        '@type': 'FAQPage', '@id': `${url}#faq`,
        mainEntity: page.faq.map(({ q, a }) => ({
          '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <LocalLandingPage slug={slug} />
    </>
  );
}
