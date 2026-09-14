import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/Navbar';
import AIVoiceHero from '../../components/AIVoiceHero';
import BusinessOutcomesSection from '../../components/BusinessOutcomesSection';
import FeaturesSection from '../../components/FeaturesSection';
import IndustrySolutionsSection from '../../components/IndustrySolutionsSection';
import OnboardingStepsSection from '../../components/OnboardingStepsSection';
import ContactSection from '../../components/ContactSection';
import FAQSection from '../../components/FAQSection';
import Footer from '../../components/Footer';

const AIVoiceAgent: React.FC = () => {
  useEffect(() => {
    document.title = 'Neuronexa Labs - AI Voice Assistant Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-white transition-colors duration-300">
      <Helmet>
        <title>AI Voice Assistants | Neuronexa Labs</title>
        <meta name="description" content="Deploy human-sounding AI voice assistants with subsecond latency, natural speech generation, and zero-loss CRM synchronization." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* 1 Hero Section */}
        <AIVoiceHero />
        
        {/* 2 How it will help you */}
        <BusinessOutcomesSection />
        
        {/* 3 What is our solution */}
        <FeaturesSection />
        
        {/* 4 How this will fit you */}
        <IndustrySolutionsSection />
        <OnboardingStepsSection />
        
        {/* 5 Contact us */}
        <ContactSection />
        
        {/* 6 FAQs (5 core questions) */}
        <FAQSection />
      </main>
      
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AIVoiceAgent;
