import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/white-flat.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">

      {/* Footer background glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00A7E1] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:pr-8">
            <Link to="/">
              <img src={logo} alt="Neuronexa Labs Logo" className="h-20 mb-6 object-contain" />
            </Link>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              We develop custom, requirement-based enterprise solutions powered by agentic AI, robust data engineering, and relentless process automation.
            </p>
            <div className="flex space-x-4">
              {/* Social Profile */}
              <a href="https://www.linkedin.com/in/malharrao-kulkarni-76a303391/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00A7E1] hover:text-white transition-all text-gray-400 group">
                <Linkedin className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#00A7E1] transition-colors duration-300 font-light inline-block transform hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              {[
                'Process Automation',
                'Agentic AI Workflows',
                'Custom Development',
                'Data Engineering',
                'Enterprise Security'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
                    className="text-gray-400 hover:text-[#00A7E1] transition-colors duration-300 font-light inline-block transform hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white tracking-wide">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 mr-4 text-[#00A7E1]"><Phone className="h-5 w-5" /></div>
                <div>
                  <span className="block text-gray-400 font-light text-sm mb-1">Phone Inquiry</span>
                  <span className="text-white">+91 91104 35020</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 text-[#00A7E1]"><Mail className="h-5 w-5" /></div>
                <div>
                  <span className="block text-gray-400 font-light text-sm mb-1">Email Us</span>
                  <span className="text-white">info@neuronexalabs.com</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 text-[#00A7E1]"><MapPin className="h-5 w-5" /></div>
                <div>
                  <span className="block text-gray-400 font-light text-sm mb-1">Location</span>
                  <span className="text-white">Dharwad, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/80 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">Neuronexa Labs</span>. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-[#00A7E1] transition-colors duration-300 font-light">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#00A7E1] transition-colors duration-300 font-light">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#00A7E1] transition-colors duration-300 font-light">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;