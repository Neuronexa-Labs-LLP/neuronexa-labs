import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  GitBranch,
  Zap,
  Sparkles,
  TrendingUp,
  Lock,
  Server,
} from 'lucide-react';
import AnimatedText from './jack/AnimatedText';
import Magnet from './jack/Magnet';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-t border-slate-100/85 overflow-hidden"
    >
      {/* Enhanced Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 h-[400px] w-[400px] rounded-full bg-[#2AA7D3]/10 blur-[120px] z-0" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-blue-400/10 blur-[120px] z-0" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-purple-400/5 blur-[100px] z-0" 
        />
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

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2AA7D3]/20 text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm shadow-[#2AA7D3]/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse" />
            About Neuronexa Labs
            <Sparkles className="h-3 w-3 text-[#2AA7D3] ml-1" />
          </motion.div>
        </div>

        {/* Narrative - Broken into scannable blocks */}
        <div className="max-w-5xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Core statement with AnimatedText */}
            <AnimatedText 
              text="Engineering excellence, security-first architecture, and measurable client ROI — that's our DNA."
              className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
            />

            {/* Supporting sentence */}
            <p className="text-lg md:text-xl text-slate-700 font-medium mt-4 max-w-3xl">
              We architect intelligent solutions that empower global enterprises to{' '}
              <span className="font-bold text-slate-800">automate processes seamlessly</span>, delivering tangible business impact.
            </p>
          </motion.div>

          {/* Three core pillars as mini-cards (replaces the long paragraph) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
          >
            {[
              {
                icon: <Server className="h-4 w-4 text-cyan-600" />,
                label: 'Engineering Excellence',
                desc: 'Built to scale, resilient, and rigorously tested.',
                bg: 'bg-cyan-50',
              },
              {
                icon: <Lock className="h-4 w-4 text-emerald-600" />,
                label: 'Security-First',
                desc: 'Zero-trust principles embedded at every layer.',
                bg: 'bg-emerald-50',
              },
              {
                icon: <TrendingUp className="h-4 w-4 text-purple-600" />,
                label: 'ROI-Obsessed',
                desc: 'Every solution engineered for measurable outcomes.',
                bg: 'bg-purple-50',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                className={`flex items-start gap-3 p-4 rounded-xl border border-slate-200/60 ${item.bg} backdrop-blur-sm hover:shadow-md hover:border-[#2AA7D3]/30 transition-shadow group`}
              >
                <div className="shrink-0 mt-0.5">
                  <Magnet padding={30} magnetStrength={2}>
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100/50">
                      {item.icon}
                    </div>
                  </Magnet>
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{item.label}</p>
                  <p className="text-xs text-slate-700 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Cards - Enhanced with Icons & Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: GitBranch,
              title: 'Infinite Scale',
              desc: 'Architectures built to withstand massive enterprise loads without faltering.',
              gradient: 'from-cyan-500 to-blue-500',
              bg: 'bg-cyan-50',
            },
            {
              icon: ShieldCheck,
              title: 'Zero Trust Security',
              desc: 'Security baked into every layer of our code natively, not as an afterthought.',
              gradient: 'from-emerald-500 to-teal-500',
              bg: 'bg-emerald-50',
            },
            {
              icon: Zap,
              title: 'Unified Workflows',
              desc: 'Consolidating disjointed systems into singular, highly-efficient automated flows.',
              gradient: 'from-amber-500 to-orange-500',
              bg: 'bg-amber-50',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 hover:border-[#2AA7D3]/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2AA7D3]/5 via-transparent to-purple-500/5 rounded-3xl pointer-events-none" />

              <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[#2AA7D3] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{feature.desc}</p>

              {/* Decorative corner line */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#2AA7D3]/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-16 border-t border-slate-200/60 pt-8 md:pt-10"
        >
          {[
            { label: 'Enterprise Clients', value: '50+' },
            { label: 'Automated Processes', value: '1,200+' },
            { label: 'Avg. ROI Increase', value: '3.2x' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-blue-600">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;