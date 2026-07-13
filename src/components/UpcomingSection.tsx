import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  LanguagesIcon,
  DatabaseIcon,
  BarChart,
  SparklesIcon,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface UpcomingFeature {
  icon: LucideIcon;
  title: string;
  timeline: string;
  desc: string;
  color: string;
  bg: string;
  iconColor: string;
}

const upcomingFeatures: UpcomingFeature[] = [
  {
    icon: SparklesIcon,
    title: 'Multimodal Voice Agents',
    timeline: 'Q3 2026',
    desc: 'AI agents that understand voice tone, visual documents, and text chat concurrently for a seamless customer experience.',
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
  {
    icon: LanguagesIcon,
    title: 'Real-Time Accent Translation',
    timeline: 'Q3 2026',
    desc: 'Converse in 40+ global languages with instant local accent adjustments, expanding your sales reach without friction.',
    color: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: DatabaseIcon,
    title: 'Deep CRM Autonomous Sync',
    timeline: 'Q4 2026',
    desc: 'Automatic extraction of meeting transcripts and action items directly into HubSpot, Salesforce, and custom CRMs.',
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: BarChart,
    title: 'Voice Sentiment Analytics',
    timeline: 'Q4 2026',
    desc: 'Extract real-time customer mood, tone shifts, and purchase intent to flag high-priority leads for human follow-up.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
];

const UpcomingSection: React.FC = () => {
  return (
    <section
      id="upcoming"
      className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden border-t border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header – refined with pill and gradient */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#2AA7D3]/20 text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm shadow-[#2AA7D3]/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse" />
            Roadmap
            <Calendar className="h-3 w-3 text-[#2AA7D3] ml-1" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4"
          >
            Expanding the boundaries of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] via-blue-500 to-purple-500">
              Voice AI
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-800 text-base font-medium max-w-2xl mt-3"
          >
            Our product evolution roadmap – built to keep you ahead of the curve.
          </motion.p>
        </div>

        {/* Cards with enhanced visual structure */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible gap-5 md:gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {upcomingFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative flex-shrink-0 snap-start w-[280px] md:w-auto bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#2AA7D3]/30 group flex flex-col"
            >

              {/* Header: timeline pill + icon */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                  {feature.timeline}
                </span>
                <div
                  className={`h-10 w-10 rounded-xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                </div>
              </div>

              {/* Title with hover arrow */}
              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#2AA7D3] transition-colors duration-300 flex items-center gap-1.5">
                {feature.title}
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#2AA7D3]" />
              </h3>

              {/* Description */}
              <p className="text-slate-800 leading-relaxed text-sm font-medium mt-3 flex-1">
                {feature.desc}
              </p>

              {/* Decorative corner element */}
              <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-[#2AA7D3]/10 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Timeline indicator dot – for visual connection */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2AA7D3]/40 group-hover:bg-[#2AA7D3] transition-colors duration-300" />
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                  Coming soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / subtle note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-slate-800 font-medium">
            Stay tuned – we're constantly innovating to bring you the next generation of AI automation.
          </p>
        </motion.div>
      </div>

      {/* Custom scrollbar hiding (Tailwind doesn't have a built-in class for all browsers) */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UpcomingSection;