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
  title: 'AI Automation & Voice AI Solutions for Businesses | Neuronexa Labs',
  description: 'Neuronexa Labs builds AI-powered business solutions that automate repetitive work, improve customer interactions, and help businesses scale.',
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
