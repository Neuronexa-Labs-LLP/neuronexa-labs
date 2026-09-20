export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://neuronexalabs.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
