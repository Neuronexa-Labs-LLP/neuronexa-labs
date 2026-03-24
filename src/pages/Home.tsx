import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/CaseStudiesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ClientsSection from '../components/ClientsSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'Neuronexa Labs - AI-Driven Solutions for Your Business';
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
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
    <div className="min-h-screen bg-black font-sans selection:bg-[#00A7E1] selection:text-white transition-colors duration-300">
      <Helmet>
        <title>Neuronexa Labs | Enterprise AI & Workflow Automation</title>
        <meta name="description" content="World-class process automation and intelligent AI workflows for global enterprises. We architect scalable, secure, and highly efficient systems." />
        <meta property="og:title" content="Neuronexa Labs | Enterprise AI & Workflow Automation" />
        <meta property="og:description" content="World-class process automation and intelligent AI workflows for global enterprises." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
