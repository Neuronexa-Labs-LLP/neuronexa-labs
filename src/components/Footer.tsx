import React from 'react';
import { ChevronRight, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              TechSolve<span className="text-indigo-400">AI</span>
            </h3>
            <p className="text-gray-400 mb-6">
              We develop custom, requirement-based online solutions powered by the latest technologies and AI innovations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Web Development', 
                'AI Integration', 
                'Mobile App Development', 
                'UI/UX Design', 
                'Data Engineering'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-gray-400">+91 9110435020</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-gray-400">support@neuronexalabs.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Neuronexa Labs. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;