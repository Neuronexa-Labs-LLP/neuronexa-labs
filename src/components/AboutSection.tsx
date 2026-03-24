import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const Word = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const color = useTransform(progress, range, ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 1)"]);
  return (
    <motion.span 
      style={{ opacity, color }}
      className="inline-block transition-colors duration-200 text-white"
    >
      {children}
    </motion.span>
  );
};

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  // We use direct fractional intersection bounds:
  // "0 0.8" -> Animation starts when the top (0) of the text hits 80% (0.8) down the screen.
  // "1 0.6" -> Animation finishes completely when the bottom (1) of the text hits 60% (0.6) down the screen.
  // This guarantees all words are vividly lit before hitting the middle of the screen!
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["0 0.8", "1 0.6"]
  });

  const narrative = "Engineering excellence, ruthless efficiency, security-first architecture, and a relentless focus on delivering measurable client ROI are at the core of our DNA. We architect intelligent solutions that empower global enterprises.".split(" ");

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-48 bg-black">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[#00A7E1] tracking-[0.3em] text-sm md:text-base font-bold uppercase mb-16 relative"
        >
          System Core // Narrative
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#00A7E1]/50 hidden md:block"></div>
        </motion.h2>
        
        <p ref={textRef} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-4">
          {narrative.map((word, i) => {
            const SAFE_ZONE = 0.5;
            const start = (i / narrative.length) * SAFE_ZONE;
            const end = ((i + 1) / narrative.length) * SAFE_ZONE;
            return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
          })}
        </p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 md:mt-32 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          {[
            { icon: "∞", title: "Infinite Scale", desc: "Architectures built to withstand massive enterprise loads without faltering." },
            { icon: "0", title: "Zero Trust", desc: "Security baked into every layer of our code natively, not as an afterthought." },
            { icon: "1", title: "Unified Truth", desc: "Consolidating disjointed systems into singular, highly-efficient workflows." }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 70, damping: 20 }
                }
              }}
              className="group relative p-10 md:p-12 rounded-[2rem] bg-[#030303] border border-white/[0.03] overflow-hidden hover:border-[#00A7E1]/30 transition-colors duration-500"
            >
               {/* Hover bloomed glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#00A7E1]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

               {/* Massive typography icon wrapped for blending */}
               <div className="relative text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 mb-8 tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  {feature.icon}
               </div>

               {/* Accent line expanding on hover */}
               <div className="w-8 h-[2px] bg-[#00A7E1]/80 mb-6 group-hover:w-16 transition-all duration-500 shadow-[0_0_15px_rgba(0,167,225,0.5)]"></div>

               <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg tracking-tight">{feature.title}</h3>
               <p className="text-zinc-400 leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-500">
                 {feature.desc}
               </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
