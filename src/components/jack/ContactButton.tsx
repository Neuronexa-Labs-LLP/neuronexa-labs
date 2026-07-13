import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  children = "Contact Us", 
  className = "",
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-full p-[1px]
        transition-transform hover:scale-105
        ${className}
      `}
    >
      {/* Animated gradient border */}
      <span className="absolute inset-0 bg-gradient-to-r from-[#2AA7D3] via-blue-500 to-[#2AA7D3] bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]" />
      
      {/* Button interior */}
      <div className="relative bg-white text-slate-900 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full flex items-center gap-3 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
        <span className="text-sm sm:text-base font-extrabold uppercase tracking-widest">{children}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};

export default ContactButton;
