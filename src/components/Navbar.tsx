import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/white-flat.png'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Force permanent dark mode globally at entry
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#000000';
    document.documentElement.style.color = '#ffffff';

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9110435020', '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 h-24 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center group">
          <img
            src={logo} 
            alt="Neuronexa Labs Logo"
            className="h-28 md:h-40 w-auto object-contain transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {['Home', 'Capabilities', 'Portfolio', 'Narrative', 'Contact'].map((item) => {
            const idMap: Record<string, string> = {
                'Home': 'home',
                'Capabilities': 'services',
                'Portfolio': 'projects',
                'Narrative': 'about',
                'Contact': 'contact'
            };
            return (
              <a 
                key={item} 
                href={`/#${idMap[item]}`}
                className="font-light tracking-wide text-sm text-gray-300 hover:text-white transition-colors duration-500 relative group overflow-hidden"
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[#00A7E1] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </a>
            );
          })}
          
          <button 
            onClick={handleWhatsAppClick}
            className="bg-transparent border border-[#00A7E1]/50 hover:bg-[#00A7E1]/10 text-[#00A7E1] px-6 py-2.5 rounded-full font-light tracking-wider text-sm transition-all duration-500 flex items-center backdrop-blur-md"
          >
            INITIALIZE COMM <MessageCircle className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-white hover:text-[#00A7E1] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } }}
            className="md:hidden fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 h-screen w-screen"
          >
            {['Home', 'Capabilities', 'Portfolio', 'Narrative', 'Contact'].map((item, idx) => {
               const idMap: Record<string, string> = {
                  'Home': 'home',
                  'Capabilities': 'services',
                  'Portfolio': 'projects',
                  'Narrative': 'about',
                  'Contact': 'contact'
              };
              return (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1), ease: "easeOut" }}
                  href={`/#${idMap[item]}`}
                  className="text-white hover:text-[#00A7E1] font-light text-3xl tracking-widest uppercase transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              );
            })}
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppClick();
              }}
              className="mt-8 px-10 py-4 bg-transparent border border-[#00A7E1]/50 text-[#00A7E1] rounded-full font-light tracking-widest text-sm transition-all duration-300 flex items-center justify-center uppercase hover:bg-[#00A7E1] hover:text-black"
            >
              INITIATE COMM <MessageCircle className="ml-3 h-5 w-5" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;