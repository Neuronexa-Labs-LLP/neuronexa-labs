import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Neuronexa Labs';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white">
      <Helmet>
        <title>Terms of Service | Neuronexa Labs</title>
        <meta name="description" content="Terms of Service for Neuronexa Labs." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 prose prose-slate max-w-none">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
              Terms of Service
            </h1>
            
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. 
              In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            
            <h2>2. Provision of Services</h2>
            <p>
              Neuronexa Labs provides Enterprise AI Voice Assistants and workflow automation solutions. We reserve the right to 
              modify, suspend or discontinue any part of the service at any time with or without notice to you.
            </p>
            
            <h2>3. User Responsibilities</h2>
            <p>
              You are responsible for any activity that occurs under your account. You agree not to use the service for any 
              illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
            </p>
            
            <h2>4. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of 
              Neuronexa Labs and its licensors. The service is protected by copyright, trademark, and other laws of both the 
              United States and foreign countries.
            </p>
            
            <h2>5. Limitation of Liability</h2>
            <p>
              In no event shall Neuronexa Labs, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use the service.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
