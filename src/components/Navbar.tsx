import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '../assets/white-flat.png'; 
import blackLogo from '../assets/logo-website-theme.png'; // Import the black version of the logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Removed useEffect for setting hero section marginTop and navbar-offset class

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9110435020', '_blank'); // Updated with the WhatsApp number from the footer
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-24 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="flex items-center">
          <img
            src={scrolled ? blackLogo : logo} // Switch logo based on scroll state
            alt="Neuronexa Labs Logo"
            className="h-40 w-auto object-cover" // Further increased logo height for better visibility
            style={{ padding: 0, margin: 0, display: 'block' }} // Removed default padding/margin and ensured proper display
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? 'text-secondary' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            className={`bg-primary hover:bg-primary-dark px-5 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center ${
              scrolled ? 'text-white' : 'text-white'
            }`}
          >
            Chat with Us <MessageCircle className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md`}
            style={{ color: scrolled ? '#1d265e' : '#ffffff' }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg py-4 px-4 transition-all duration-300">
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block py-3 text-secondary hover:text-primary font-medium border-b border-gray-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={handleWhatsAppClick}
            className="mt-4 w-full bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
          >
            Chat with Us <MessageCircle className="ml-2 h-4 w-4" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;