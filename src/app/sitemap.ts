export const dynamic = 'force-static';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuronexalabs.com/';

  const routes = [
    // Core pages
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: 'about/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: 'services/', priority: 0.9, changeFrequency: 'weekly' as const },

    // Autonomous AI Agents
    { path: 'services/ai-automation/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/ai-voice-agent/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/lead-qualification/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/appointment-scheduling/', priority: 0.8, changeFrequency: 'monthly' as const },

    // Custom Engineering
    { path: 'services/website-development/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/mobile-app-development/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/solution-support/', priority: 0.8, changeFrequency: 'monthly' as const },

    // Growth & Security
    { path: 'services/digital-marketing/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/content-marketing/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/security-validation/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'services/outbound-campaigns/', priority: 0.8, changeFrequency: 'monthly' as const },

    // Featured Projects
    { path: 'projects/vedims/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'projects/hrms/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'projects/medblik/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'projects/agtech/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: 'projects/mentor-ai/', priority: 0.8, changeFrequency: 'monthly' as const },

    // Legal
    { path: 'privacy/', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: 'terms/', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
