import React from 'react';
import { Mail, Phone, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/nnlabs-logo-hd.png';

const navigationLinks = [
  { label: 'Overview', href: '/#' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Blog & Deep-Dives', href: '/blog' },
];

const capabilityLinks = [
  { label: 'Autonomous Outbound Calling', href: '/#features' },
  { label: 'Subsecond Latency Pipeline (<380)', href: '/#features' },
  { label: 'Two-Way CRM Webhook Sync', href: '/blog#flow' },
  { label: 'Real-Time Voice Analytics', href: '/#features' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D16] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/">
              <img src={logo} alt="NeuroNexa Labs" className="h-12 md:h-14 mb-4 object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-5 text-xs sm:text-sm">
              Enterprise AI Voice Assistants & autonomous workflow automation. Eliminating manual friction with zero-latency conversational intelligence and instant CRM synchronization.
            </p>
            
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Voice Systems Operational
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/malharrao-kulkarni-76a303391/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0F6F94] text-slate-400 hover:text-white transition-all border border-white/10"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/9110435020"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-600 text-slate-400 hover:text-white transition-all border border-white/10"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-300 font-mono">Platform</h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#2AA7D3] transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-300 font-mono">Capabilities</h4>
            <ul className="space-y-2.5">
              {capabilityLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-slate-400 hover:text-[#2AA7D3] transition-colors text-xs sm:text-sm flex items-center gap-1.5"
                  >
                    <span className="text-slate-600">›</span>
                    {item.label}
                    {item.isExternal && <ExternalLink className="w-3 h-3 text-[#2AA7D3] ml-1 shrink-0" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-300 font-mono">Get in Touch</h4>
            <ul className="space-y-3.5 mb-6">
              <li>
                <a 
                  href="tel:+919110435020" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Phone className="h-4 w-4 text-[#2AA7D3] shrink-0" />
                  <span>+91 91104 35020</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@neuronexalabs.com" 
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  <Mail className="h-4 w-4 text-[#2AA7D3] shrink-0" />
                  <span className="truncate">info@neuronexalabs.com</span>
                </a>
              </li>
            </ul>


          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} NeuroNexa Labs. All rights reserved.</p>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="text-emerald-400 font-semibold">&lt;380 Subsecond Latency</span>
            <span>•</span>
            <span>Natural Generation</span>
            <span>•</span>
            <span>Quick Response</span>
            <span>•</span>
            <span>99.2% Uptime SLA</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;