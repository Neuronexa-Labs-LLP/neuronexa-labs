import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Sparkles, ShieldCheck, Server, TrendingUp, Cpu } from 'lucide-react';
import AnimatedText from './AnimatedText';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import FadeIn from './FadeIn';

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-t border-slate-100/85 overflow-hidden"
    >
      {/* Enhanced Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full bg-[#2AA7D3]/10 blur-[120px] z-0" />
        <div className="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[120px] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-purple-400/5 blur-[100px] z-0" />
        {/* Subtle grid pattern */}
        <svg
          className="absolute inset-0 w-full h-full z-0 opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Top badge */}
        <FadeIn y={20} className="mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2AA7D3]/20 text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm shadow-[#2AA7D3]/5">
            <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse" />
            About Neuronexa Labs
            <Sparkles className="h-3 w-3 text-[#2AA7D3] ml-1" />
          </div>
        </FadeIn>

        {/* Scroll-Revealed Text Paragraph */}
        <div className="max-w-4xl text-center mb-16 relative">
          <AnimatedText 
            text="Engineering excellence, security-first architecture, and measurable client ROI — that's our DNA. We architect intelligent solutions that empower global enterprises to automate processes seamlessly."
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight"
          />

          {/* Decorative floating icons */}
          <div className="hidden lg:block absolute -top-10 -left-20">
            <Magnet padding={50}>
              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-[#2AA7D3]/10 border border-slate-100 rotate-[-10deg]">
                <Server className="w-8 h-8 text-[#2AA7D3]" />
              </div>
            </Magnet>
          </div>
          <div className="hidden lg:block absolute top-20 -right-20">
            <Magnet padding={50}>
              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-100 rotate-[15deg]">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
              </div>
            </Magnet>
          </div>
          <div className="hidden lg:block absolute -bottom-10 -left-10">
            <Magnet padding={50}>
              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-purple-500/10 border border-slate-100 rotate-[5deg]">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
            </Magnet>
          </div>
          <div className="hidden lg:block absolute -bottom-10 -right-5">
            <Magnet padding={50}>
              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-emerald-500/10 border border-slate-100 rotate-[-5deg]">
                <Cpu className="w-8 h-8 text-emerald-500" />
              </div>
            </Magnet>
          </div>
        </div>

        {/* Stats */}
        <FadeIn y={30} delay={0.2} className="flex flex-wrap items-center justify-center gap-8 md:gap-16 border-t border-slate-200/60 pt-12 w-full max-w-3xl mb-16">
          {[
            { label: 'Enterprise Clients', value: '50+' },
            { label: 'Automated Processes', value: '1,200+' },
            { label: 'Avg. ROI Increase', value: '3.2x' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-blue-600">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </FadeIn>

        {/* Contact Button */}
        <FadeIn y={30} delay={0.4}>
          <a href="#contact" className="block">
            <ContactButton />
          </a>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutSection;
