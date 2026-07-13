import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
// import ClientsSection from '../components/ClientsSection';
import AboutSection from '../components/AboutSection';
import JackMarqueeSection from '../components/jack/MarqueeSection';
import UpcomingSection from '../components/UpcomingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Neuronexa Labs - AI-Driven Solutions for Your Business';
    
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-teal selection:text-white transition-colors duration-300">
      <Helmet>
        <title>Neuronexa Labs | Enterprise AI & Workflow Automation</title>
        <meta name="description" content="World-class process automation and intelligent AI workflows for global enterprises." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        
        <JackMarqueeSection />
        
        <ServicesSection />
        <CaseStudiesSection />
        <AboutSection />
        {/* <ClientsSection /> */}
        
        <UpcomingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
