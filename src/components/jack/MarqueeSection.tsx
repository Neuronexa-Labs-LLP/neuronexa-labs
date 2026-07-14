import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const wordsRow1 = [
  "Workflow Automation", "Agentic AI", "Data Engineering", 
  "Enterprise Security", "Infinite Scale", "Zero Trust"
];

const wordsRow2 = [
  "Measurable ROI", "Autonomous Logic", "Unified Truth", 
  "Seamless Integration", "Process Optimization"
];

const MarqueeSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  return (
    <section className="relative py-20 bg-white overflow-hidden border-t border-slate-100">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFC] via-transparent to-white pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-6 md:gap-10 items-center whitespace-nowrap pl-10">
          {[...wordsRow1, ...wordsRow1, ...wordsRow1].map((word, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-6 md:gap-10">
              <span className="text-4xl md:text-7xl font-extrabold text-slate-300 uppercase tracking-tighter">
                {word}
              </span>
              <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-[#2AA7D3] opacity-40" />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-6 md:gap-10 items-center whitespace-nowrap pr-10">
          {[...wordsRow2, ...wordsRow2, ...wordsRow2].map((word, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-6 md:gap-10">
              <span className="text-4xl md:text-7xl font-extrabold text-slate-300 uppercase tracking-tighter">
                {word}
              </span>
              <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-blue-500 opacity-30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
