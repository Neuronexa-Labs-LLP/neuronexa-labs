import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/nnlabs-logo-hd.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/">
              <img src={logo} alt="NeuroNexa Labs" className="h-14 mb-5 object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Custom enterprise solutions powered by agentic AI, robust data engineering, and relentless process automation.
            </p>
            <a
              href="https://www.linkedin.com/in/malharrao-kulkarni-76a303391/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-teal text-gray-400 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Company</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'Upcoming', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Solutions</h4>
            <ul className="space-y-3">
              {['AI Calling Agents', 'Lead Qualification', 'Workflow Automation', 'Data Engineering', 'Custom Development'].map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-teal shrink-0" />
                <span className="text-gray-400 text-sm">+91 91104 35020</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-teal shrink-0" />
                <span className="text-gray-400 text-sm">info@neuronexalabs.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} NeuroNexa Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;