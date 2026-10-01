import { Inter, Playfair_Display, Kanit } from 'next/font/google';
import '../index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  style: ['italic', 'normal'], 
  variable: '--font-playfair',
  display: 'swap',
});

const kanit = Kanit({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'], 
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://neuronexalabs.com/'),
  title: {
    default: 'AI Automation & Voice AI Solutions for Businesses | Neuronexa Labs',
    template: '%s | Neuronexa Labs',
  },
  description: 'Neuronexa Labs builds enterprise AI automation, custom Voice AI agents, and intelligent software solutions that automate repetitive workflows, accelerate sales, and scale business operations.',
  keywords: [
    'AI Automation',
    'Voice AI Agents',
    'AI Voice Assistant',
    'Workflow Automation',
    'Conversational AI',
    'Custom AI Solutions',
    'Enterprise Software Development',
    'NexaDhi',
    'AI Talent Assessment',
    'Lead Qualification AI',
    'Automated Appointment Scheduling',
    'Neuronexa Labs'
  ],
  authors: [{ name: 'Neuronexa Labs', url: 'https://neuronexalabs.com' }],
  creator: 'Neuronexa Labs',
  publisher: 'Neuronexa Labs',
  openGraph: {
    title: 'AI Automation & Voice AI Solutions for Businesses | Neuronexa Labs',
    description: 'Neuronexa Labs builds enterprise AI automation, custom Voice AI agents, and intelligent software solutions that automate repetitive workflows and scale operations.',
    url: 'https://neuronexalabs.com/',
    siteName: 'Neuronexa Labs',
    images: [
      {
        url: 'https://neuronexalabs.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neuronexa Labs - Enterprise AI Solutions & Voice AI Agents',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation & Voice AI Solutions | Neuronexa Labs',
    description: 'Custom Voice AI Agents & Workflow Automation Solutions built to scale your business operations.',
    images: ['https://neuronexalabs.com/og-image.png'],
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
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${kanit.variable} min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-white transition-colors duration-300`}>
        <Navbar />
        {children}
        <footer id="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
