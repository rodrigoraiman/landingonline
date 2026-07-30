import type { MetadataRoute } from 'next';
import { LOCAL_PAGE_SLUGS } from './[localPage]/page';

const BASE_URL = 'https://terrepaysage.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...LOCAL_PAGE_SLUGS.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
