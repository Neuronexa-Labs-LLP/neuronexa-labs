import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  return (
    <section ref={containerRef} className="py-48 bg-black relative flex items-center justify-center min-h-[80vh] overflow-hidden border-t border-white/5">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A7E1] rounded-full blur-[250px] opacity-[0.15] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
         <span className="text-[#00A7E1] tracking-[0.4em] font-medium text-xs mb-10 block uppercase">06 // Validation</span>
         
         <motion.div style={{ scale, opacity, filter: `blur(${blur})` }}>
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-relaxed tracking-tight italic mb-12">
             "The platform Neuronexa Labs built for us has transformed how students engage with Mental Maths. The gamified approach has made learning incredibly effective."
           </h2>
           
           <div className="flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00A7E1] to-[#003A4F] mb-4 p-[2px]">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                   P
                </div>
             </div>
             <h3 className="text-white text-xl font-bold tracking-wide">Praveen Kulkarni</h3>
             <p className="text-[#00A7E1] uppercase tracking-widest text-xs mt-2">Founder, Vedims</p>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;