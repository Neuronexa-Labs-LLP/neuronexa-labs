import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, MessageCircle, Instagram } from 'lucide-react';
import Link from 'next/link';
import logo from '../assets/nnlabs-logo-hd.png';

const navigationLinks = [
  { label: 'Overview', href: '/#' },
  { label: 'Services', href: '/services' },
  { label: 'AI Voice Agent', href: '/services/ai-voice-agent' },
  { label: 'How It Works', href: '/#how-it-works' },
];

const projectLinks = [
  { label: 'Vedims LMS', href: '/projects/vedims' },
  { label: 'HRMS Solution', href: '/projects/hrms' },
  { label: 'Medblik Locator', href: '/projects/medblik' },
  { label: 'AgTech E-Commerce', href: '/projects/agtech' },
  { label: 'Mentor AI Matcher', href: '/projects/mentor-ai' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D16] text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img src={logo.src} alt="NeuroNexa Labs" width={200} height={56} className="h-12 md:h-14 object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-sm">
              We build intelligent AI voice assistants and custom web applications that automate your daily tasks. Save time and grow your business without the manual work.
            </p>
            
            <div>
              <p className="text-slate-400 mb-4 text-xs font-bold uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/neuronexa-labs/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#0F6F94] text-slate-400 hover:text-white transition-all border border-white/5 hover:border-[#0F6F94] shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/neuronexa_labs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-pink-600 text-slate-400 hover:text-white transition-all border border-white/5 hover:border-pink-600 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-bold mb-6 text-sm text-white">Platform</h4>
            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-brand-navy transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="text-slate-600 group-hover:text-brand-navy transition-colors font-mono">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold mb-6 text-sm text-white">Projects</h4>
            <ul className="space-y-4">
              {projectLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-brand-navy transition-colors text-sm flex items-center gap-2 group truncate"
                  >
                    <span className="text-slate-600 group-hover:text-brand-navy transition-colors font-mono shrink-0">›</span>
                    <span className="truncate">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-bold mb-6 text-sm text-white">Get in Touch</h4>
            <ul className="space-y-5">
              <li>
                <a 
                  href="tel:+919110435020" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-white/5 group-hover:bg-brand-navy/10 transition-colors">
                    <Phone className="h-4 w-4 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Call Us</p>
                    <span className="text-sm font-medium">+91 91104 35020</span>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@neuronexalabs.com" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="mt-0.5 p-2 rounded-lg bg-white/5 group-hover:bg-brand-navy/10 transition-colors">
                    <Mail className="h-4 w-4 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Email Us</p>
                    <span className="text-sm font-medium truncate block">info@neuronexalabs.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} NeuroNexa Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
