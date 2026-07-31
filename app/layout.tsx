import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteMetadata, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/seo';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://terrepaysage.com'),
  title: {
    default: siteMetadata.title,
    template: '%s | Terre Viva Paysage',
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: 'Terre Viva Paysage' }],
  creator: 'Terre Viva Paysage',
  publisher: 'Terre Viva Paysage',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: 'Terre Viva Paysage',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Terre Viva Paysage - Entretien de Jardins Professionnel',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
    creator: '@terrepaysage',
  },
  alternates: {
    canonical: siteMetadata.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

const BASE_URL = 'https://terrepaysage.com';
const LOCAL_BUSINESS_ID = `${BASE_URL}#localbusiness`;

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': LOCAL_BUSINESS_ID,
  name: 'Terre Paysage',
  url: BASE_URL,
  image: `${BASE_URL}/logo.png`,
  logo: `${BASE_URL}/logo.png`,
  telephone: "+33 6 65 19 27 66",
  areaServed: [
    'Saint-Ismier',
    'Meylan',
    'Montbonnot-Saint-Martin',
    'Crolles',
    'Bernin',
    'Biviers',
    'Grenoble',
    'Corenc',
  ],
  serviceType: [
    'Entretien de jardin',
    'Tonte',
    'Taille de haies',
    'Débroussaillage',
    'Élagage de petits arbres',
    "Nettoyage d'allées",
    'Évacuation des déchets verts',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        {/* Banner de cookies eliminado del layout server */}
      </body>
    </html>
  );
}
