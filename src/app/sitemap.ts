export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuronexa.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/ai-automation',
    '/services/lead-qualification',
    '/services/appointment-scheduling',
    '/services/customer-support',
    '/services/sales-assistants',
    '/services/outbound-calling',
    '/services/crm-integration',
    '/services/multi-language',
    '/services/analytics',
    '/services/voice-cloning',
    '/projects/vedims',
    '/projects/hrms',
    '/projects/medblik',
    '/projects/d-gen-x',
    '/projects/ai-finance',
    '/projects/crypto-bot',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
