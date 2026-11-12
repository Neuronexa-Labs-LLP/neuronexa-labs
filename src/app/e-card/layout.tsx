import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Neuronexa Labs',
  description:
    'Get in touch with Neuronexa Labs for AI automation, voice AI agents, custom software, and digital product development.',
  alternates: {
    canonical: 'https://neuronexalabs.com/e-card/',
  },
  openGraph: {
    title: 'Contact Neuronexa Labs',
    description:
      'Reach out to discuss AI automation, voice agents, business software, and digital product development.',
    url: 'https://neuronexalabs.com/e-card/',
  },
};

export default function ECardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
