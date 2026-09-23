import dynamic from 'next/dynamic';
import HeroSection from '../components/HeroSection';

const HomeHowItHelps = dynamic(() => import('../components/HomeHowItHelps'));
const HomeSolution = dynamic(() => import('../components/HomeSolution'));
const HomeHowItFits = dynamic(() => import('../components/HomeHowItFits'));
const HomeIntegrations = dynamic(() => import('../components/HomeIntegrations'));
const FAQSection = dynamic(() => import('../components/FAQSection'));
const ContactSection = dynamic(() => import('../components/ContactSection'));
const HomeBannerCallout = dynamic(() => import('../components/HomeBannerCallout'));

const homeFaqs = [
  {
    question: "What exactly does Neuronexa Labs do?",
    answer: "We build smart AI tools that save you time and money. We create custom AI voice assistants and automated workflows that handle your repetitive daily tasks.",
    tag: "About Us"
  },
  {
    question: "What is the best AI voice agent platform for my industry?",
    answer: "We build custom AI voice agents tailored to your business, whether you are in healthcare, finance, or e-commerce. Our fast-responding agents can answer customer questions, automate inbound lead qualification, and schedule appointments for you 24/7.",
    tag: "Voice AI"
  },
  {
    question: "How long does it take to deploy an automation workflow?",
    answer: "Most of our AI tools and automated workflows are ready in just 2 to 4 weeks, depending on how complex your current systems are.",
    tag: "Deployment"
  },
  {
    question: "Is our data secure when using your AI solutions?",
    answer: "Yes, absolutely. We use the highest level of security to keep your data safe. Everything is encrypted and follows strict privacy rules, so your business information is always protected.",
    tag: "Security"
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes, our tools play nicely with others. We can connect our AI directly to the software you already use, like Salesforce, HubSpot, or your own custom systems.",
    tag: "Integrations"
  }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Neuronexa Labs",
  "url": "https://neuronexalabs.com/",
  "logo": "https://neuronexalabs.com/logo.png",
  "description": "Neuronexa Labs builds AI-powered business solutions that automate repetitive work, improve customer interactions, and help businesses scale.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Neuronexa Labs",
  "url": "https://neuronexalabs.com/"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": homeFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: 'AI Automation & Voice AI Solutions for Businesses | Neuronexa Labs',
  description: 'Neuronexa Labs builds AI-powered business solutions that automate repetitive work, improve customer interactions, and help businesses scale.',
  alternates: {
    canonical: 'https://neuronexalabs.com/',
  },
};

export default function Home() {
  return (
    <>
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, faqSchema]) }}
      />
      <main>
        <HeroSection />
        <HomeHowItHelps />
        <HomeSolution />
        <HomeHowItFits />
        <HomeIntegrations />
        <HomeBannerCallout />
        <ContactSection />
        <FAQSection 
          title="Frequently Asked Questions" 
          faqs={homeFaqs} 
        />
      </main>
    </>
  );
}
