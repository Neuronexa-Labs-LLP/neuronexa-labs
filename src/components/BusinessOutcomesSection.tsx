"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const outcomes = [
  {
    title: 'Improve customer experience',
    desc: 'Resolve questions instantly, without the wait. Callers get clear, friendly answers instantly, and are gracefully transferred to your team whenever personal care is needed.',
    renderVisual: () => (
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] h-[120px]">
        {/* Baseline 'Before' curve */}
        <path d="M 20 100 Q 100 90 180 80" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Accelerated 'With Voice AI' curve */}
        <path d="M 20 100 Q 100 80 140 30 T 180 20" stroke="#0F6F94" strokeWidth="2.5" strokeLinecap="round" />
        {/* Before point */}
        <circle cx="100" cy="90" r="4" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Voice AI point */}
        <circle cx="140" cy="30" r="5" fill="#0F6F94" stroke="#ffffff" strokeWidth="2" />
        <circle cx="140" cy="30" r="8" fill="#2AA7D3" opacity="0.25" className="animate-ping" />
        {/* Labels */}
        <text x="100" y="110" fill="#64748b" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="500">
          Before
        </text>
        <text x="140" y="16" fill="#0F6F94" fontSize="9" fontFamily="monospace" fontWeight="700" textAnchor="middle">
          With Voice AI
        </text>
      </svg>
    )
  },
  {
    title: 'Achieve more deals',
    desc: 'Engage new leads immediately. Our AI Voice Assistant answers product interest calls, schedules demos, and logs contact details to keep your pipeline moving forward.',
    renderVisual: () => (
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] h-[120px]">
        {/* Bar 1: Legacy */}
        <rect x="42" y="70" width="16" height="30" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
        {/* Bar 2: Semi-automated */}
        <rect x="92" y="45" width="16" height="55" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        {/* Bar 3: AI Voice Assistant */}
        <rect x="142" y="20" width="16" height="80" rx="3" fill="#0F6F94" fillOpacity="0.95" />
        {/* Velocity trajectory line */}
        <path d="M 50 70 Q 100 45 150 20" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="150" cy="20" r="3.5" fill="#0F6F94" />
        <line x1="20" y1="100" x2="180" y2="100" stroke="#e2e8f0" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Save time & scale operations',
    desc: 'Automate scheduling, updates, and CRM syncs. Complete thousands of hours of workflow tasks instantly, freeing your team for strategic work.',
    renderVisual: () => (
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px] h-[120px]">
        {/* Wavy manual timeline */}
        <path d="M 20 40 L 60 25 L 100 55 L 140 30 L 180 40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Straight automated highway */}
        <path d="M 20 80 L 180 80" stroke="#0F6F94" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="180" cy="40" r="3.5" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="180" cy="80" r="4" fill="#0F6F94" stroke="#ffffff" strokeWidth="1.5" />
        {/* Text descriptions */}
        <text x="20" y="30" fill="#64748b" fontSize="8" fontFamily="monospace">
          Manual tasks (Hours)
        </text>
        <text x="20" y="72" fill="#0F6F94" fontSize="8" fontFamily="monospace" fontWeight="700">
          AI auto-sync (Seconds)
        </text>
      </svg>
    )
  }
];

const BusinessOutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2AA7D3]" />
            Business Value &amp; Velocity
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Built to improve customer experience, sales, and business outcomes
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Help your team eliminate phone burnout while ensuring every single caller is greeted with empathy, attentiveness, and immediate answers 24/7.
          </p>
        </div>

        {/* 3-Column Outcomes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y lg:border-y-0 lg:border-x border-slate-200 bg-white/70 rounded-2xl shadow-xs overflow-hidden mb-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 sm:p-10 flex flex-col items-center text-center hover:bg-slate-50/60 transition-colors"
            >
              {/* Graphic Visual */}
              <div className="h-[140px] w-full flex items-center justify-center mb-6">
                {item.renderVisual()}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-[320px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Oversight & Human Control Banner */}
        <div className="max-w-3xl mx-auto text-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-medium pt-2">
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Your team stays in full control
          </span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>Listen to call recordings anytime</span>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <span>Instant live human transfer on request</span>
        </div>

      </div>
    </section>
  );
};

export default BusinessOutcomesSection;

