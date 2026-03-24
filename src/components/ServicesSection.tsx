import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const services = [
  {
    title: "Workflow Automation",
    subtitle: "01 // ELIMINATE REDUNDANCY",
    desc: "Replace repetitive manual tasks with highly optimized, automated workflows that execute flawlessly 24/7.",
    color: "#00A7E1"
  },
  {
    title: "Agentic AI Integration",
    subtitle: "02 // AUTONOMOUS LOGIC",
    desc: "Deploy autonomous AI agents capable of reasoning, planning, and executing complex multistep processes.",
    color: "#003A4F"
  },
  {
    title: "Data Engineering",
    subtitle: "03 // UNIFIED TRUTH",
    desc: "Architect robust data pipelines that clean, structure, and securely store your organization's most valuable assets.",
    color: "#E6F7FC"
  },
  {
    title: "Enterprise Security",
    subtitle: "04 // ZERO TRUST",
    desc: "Embed zero-trust security architecture directly into your automated workflows and custom applications.",
    color: "#0096CA"
  }
];

const DesktopServiceCard = ({ service, index, total, scrollYProgress }: any) => {
  // Calculate dynamic scroll ranges for each item (0% to 100% split by 4)
  const start = index * 0.25;
  const peak = start + 0.125;
  const end = start + 0.25;

  // Ensure arrays are strictly increasing and bound to [0, 1] without negative numbers
  const opacityInput = index === 0 
     ? [0, end - 0.1, end] 
     : index === total - 1 
        ? [start - 0.05, start, 1] 
        : [start - 0.05, start, end - 0.1, end];

  const opacityOutput = index === 0
     ? [1, 1, 0]
     : index === total - 1
        ? [0, 1, 1]
        : [0, 1, 1, 0];

  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);
  
  // Map scale/y for cinematic "sliding up" and "falling away" effect
  const y = useTransform(scrollYProgress,
    [start, peak, end],
    ["50px", "0px", "-50px"]
  );
  const scale = useTransform(scrollYProgress,
    [start, peak, end],
    [0.9, 1, 1.1]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <span className="text-[#00A7E1] tracking-[0.4em] text-xs md:text-sm font-bold mb-6 block">
        {service.subtitle}
      </span>
      <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
        {service.title}
      </h2>
      <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Extract inline hooks to top level to satisfy Rules of Hooks unconditionally
  const line1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const line1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.4, 0.1]);
  const line2Y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const line2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.1]);

  // Mobile Native Accordion/Stack View (Prevents 400vh scroll fatigue)
  if (isMobile) {
    return (
      <section id="services" className="relative py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-4">
           {services.map((service, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.6 }}
               className="mb-8 last:mb-0 border border-[#00A7E1]/20 bg-gradient-to-br from-[#00A7E1]/5 to-transparent rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
             >
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A7E1] rounded-full blur-[80px] opacity-10 pointer-events-none"></div>
               <span className="text-[#00A7E1] tracking-[0.4em] text-xs font-bold mb-4 block">
                 {service.subtitle}
               </span>
               <h2 className="text-4xl font-black text-white mb-4 tracking-tighter leading-tight">
                 {service.title}
               </h2>
               <p className="text-base text-gray-400 font-light leading-relaxed relative z-10">
                 {service.desc}
               </p>
             </motion.div>
           ))}
        </div>
      </section>
    );
  }

  // Desktop Cinematic Fade Track
  return (
    <section id="services" ref={targetRef} className="relative h-[400vh] bg-black">
      {/* Background layer stays sticky underneath everything */}
      <div className="sticky top-0 h-screen w-full bg-black overflow-hidden flex items-center justify-center">
        
        {/* Abstract Tech Lines Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <motion.div 
             style={{
                y: line1Y,
                opacity: line1Opacity
             }}
             className="w-[1px] h-[300vh] bg-gradient-to-b from-transparent via-[#00A7E1] to-transparent absolute left-1/4"
          />
          <motion.div 
             style={{
                y: line2Y,
                opacity: line2Opacity
             }}
             className="w-[1px] h-[300vh] bg-gradient-to-b from-transparent via-[#00A7E1] to-transparent absolute right-1/4"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
           {services.map((service, index) => (
             <DesktopServiceCard
               key={index}
               service={service}
               index={index}
               total={services.length}
               scrollYProgress={scrollYProgress}
             />
           ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;