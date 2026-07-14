import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[#F4F9FC] relative flex items-center justify-center min-h-[50vh] overflow-hidden border-t border-slate-100">
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2AA7D3] rounded-full blur-[250px] opacity-[0.08] pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10 text-center max-w-5xl">
         <div className="flex justify-center mb-5">
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 bg-white/80 border border-[#2AA7D3]/20 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm"
           >
             <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse"></span>
             Client Feedback
           </motion.div>
         </div>
         
         <motion.div style={{ scale, opacity }}>
           <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-slate-800 leading-relaxed tracking-tight italic mb-10">
             "The platform Neuronexa Labs built for us has transformed how students engage with Mental Maths. The gamified approach has made learning incredibly effective."
           </h2>
           
           <div className="flex flex-col items-center">
             <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2AA7D3] to-[#1E3A5F] mb-4 p-[2px] shadow-md hover:scale-105 transition-transform duration-300">
                 <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#1E3A5F] font-bold text-lg">
                    P
                 </div>
             </div>
             <h3 className="text-slate-800 text-lg font-bold tracking-wide">Praveen Kulkarni</h3>
             <p className="text-[#2AA7D3] uppercase tracking-widest text-xs font-bold mt-1">Founder, Vedims</p>
           </div>
         </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;