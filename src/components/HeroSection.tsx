import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cinematically fade and scale the main text as user scrolls down
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, 150]);

  // Expand the abstract glowing orb to consume the screen
  const orbScale = useTransform(scrollYProgress, [0, 0.8], [1, 5]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.3, 0.8, 0]);

  return (
    <section id="home" ref={containerRef} className="relative h-[150vh] md:h-[200vh] bg-black selection:bg-[#00A7E1] selection:text-white">
      {/* Sticky Container holds the actual visual content while the section takes 200vh space */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

        {/* Deep Space / Void Background Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001824] via-black to-black z-0"></div>

        {/* Abstract Expanding WebGL-like Glowing Orb */}
        <motion.div
          style={{ scale: orbScale, opacity: orbOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[120vw] h-[120vw] max-w-[600px] max-h-[600px] rounded-full bg-[#00A7E1] blur-[100px] md:blur-[150px] mix-blend-screen opacity-50"></div>
          <div className="absolute w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full bg-[#003A4F] blur-[80px] md:blur-[100px] mix-blend-screen opacity-70 translate-x-10 -translate-y-10 md:translate-x-20 md:-translate-y-20"></div>
        </motion.div>

        {/* Grid overlay for tech aesthetic */}
        <div className="absolute inset-0 z-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDMwaDJhMiAyIDAgMCAxIDIgMnYyaC02di0yYTIgMiAwIDAgMSAyLTJ6bTAgMmgydjJoLTJ2LTJ6bS0xOC0ydjJhMiAyIDAgMCAwIDIgMmgydi02aC0yYTIgMiAwIDAgMC0yIDJ6bTIgMHYyaC0ydi0yaDJ6bS0yLTEyYTIgMiAwIDAgMC0yIDJ2Mmg2di0yYTIgMiAwIDAgMC0yLTJoLTJ6bTAgMnYyaDJ2LTJoLTJ6bTE4IDBhMiAyIDAgMCAwIDItMnYtMmgtNnYyYTIgMiAwIDAgMCAyIDJoMnptMC0ydi0yaDJ2MmgtMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')] pointer-events-none"></div>

        {/* Typography Content */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="relative z-10 w-full px-4 text-center mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[#00A7E1] uppercase tracking-[0.3em] font-light text-sm md:text-base mb-6 md:mb-10">
              SYSTEM_INIT // Welcome to the
            </p>
          </motion.div>

          <motion.h1
            className="text-[12vw] sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Future of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] via-white to-[#00A7E1] animate-gradient bg-300%">
              Work
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 md:mt-12 text-lg md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          >
            Architecting intelligent enterprise systems, autonomous process automation, and world-class digital experiences.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        >
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[30%] bg-[#00A7E1]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;