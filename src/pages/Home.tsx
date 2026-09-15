import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import HomeHowItHelps from '../components/HomeHowItHelps';
import HomeSolution from '../components/HomeSolution';
import HomeHowItFits from '../components/HomeHowItFits';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import HomeBannerCallout from '../components/HomeBannerCallout';
import Footer from '../components/Footer';
import { FAQItem } from '../components/FAQSection';

const homeFaqs: FAQItem[] = [
  {
    question: "What exactly does Neuronexa Labs do?",
    answer: "We are an Enterprise AI and Workflow Automation agency. We specialize in building autonomous AI agents, intelligent voice assistants, and custom automation workflows that streamline your business operations and reduce manual overhead.",
    tag: "About Us"
  },
  {
    question: "Do you build custom AI Voice Assistants?",
    answer: "Yes, we build low-latency, human-like voice AI assistants that can handle inbound customer support, outbound sales calls, appointment scheduling, and lead qualification 24/7.",
    tag: "Voice AI"
  },
  {
    question: "How long does it take to deploy an automation workflow?",
    answer: "Most of our automation workflows and AI agent deployments are completed within 2 to 4 weeks, depending on the complexity of your existing systems and the specific use cases you want to automate.",
    tag: "Deployment"
  },
  {
    question: "Is our data secure when using your AI solutions?",
    answer: "Absolutely. We adhere to enterprise-grade security protocols and ensure that all data processed by our AI systems is encrypted and compliant with industry standards. Your data privacy is our top priority.",
    tag: "Security"
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes, our solutions are designed to be highly interoperable. We seamlessly integrate with popular CRMs (like Salesforce or HubSpot), ERPs, scheduling tools, and even custom legacy systems via APIs.",
    tag: "Integrations"
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Neuronexa Labs - Next-Gen AI Voice & Workflows';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-white transition-colors duration-300">
      <Helmet>
        <title>Neuronexa Labs | AI Voice & Workflows</title>
        <meta name="description" content="Deploy human-sounding AI voice assistants and robust workflow automations." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <HomeHowItHelps />
        <HomeSolution />
        <HomeHowItFits />
        <HomeBannerCallout />
        <ContactSection />
        <FAQSection 
          title="Frequently Asked Questions" 
          faqs={homeFaqs} 
        />
      </main>
      
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;

