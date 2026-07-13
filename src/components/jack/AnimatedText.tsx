import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{ 
  char: string; 
  progress: MotionValue<number>; 
  range: [number, number] 
}> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.4, 1]);
  
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');
  
  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + (1 / chars.length);
        
        return (
          <Character 
            key={i} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
};

export default AnimatedText;
