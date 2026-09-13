import servicesDataJson from './servicesData.json';

export interface ServiceContent {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  heroImage: string;
  content: string; // Basic HTML/Markdown styled text
  faqs?: { question: string; answer: string; tag?: string }[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  robots?: string;
}

export const servicesData: ServiceContent[] = servicesDataJson;
