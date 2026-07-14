import React from 'react';

interface LiveProjectButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ 
  children = "Live Project", 
  className = "",
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] 
        font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-colors hover:bg-[#D7E2EA]/10
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default LiveProjectButton;
