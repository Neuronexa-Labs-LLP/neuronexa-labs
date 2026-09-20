"use client";

import React from 'react';

import { PhoneOutgoing, CalendarCheck, Headphones, Zap, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: PhoneOutgoing,
    title: 'Calls Your Leads For You',
    description: 'Your AI calls new and existing leads, answers their questions, understands their needs, and identifies the leads that are ready to talk to your team.',
    accent: {
      bg: 'bg-sky-50',
      border: 'border-sky-100',
      iconBg: 'bg-gradient-to-br from-[#0F6F94] to-[#2AA7D3]',
      iconText: 'text-white',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(15,111,148,0.15)]',
      hoverBorder: 'hover:border-[#2AA7D3]/40',
      tagBg: 'bg-sky-100/80',
      tagText: 'text-[#0F6F94]',
    },
    tag: 'Outbound Sales',
    number: '01',
  },
  {
    icon: Headphones,
    title: 'Answers Customers 24/7',
    description: 'Customers don\'t have to wait for business hours. Your AI answers calls, handles common questions, and connects them with your team when needed.',
    accent: {
      bg: 'bg-emerald-50/60',
      border: 'border-emerald-100',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
      iconText: 'text-white',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]',
      hoverBorder: 'hover:border-emerald-300/60',
      tagBg: 'bg-emerald-100/80',
      tagText: 'text-emerald-700',
    },
    tag: 'Inbound Support',
    number: '02',
  },
  {
    icon: CalendarCheck,
    title: 'Books Meetings on the Spot',
    description: 'Your AI checks your calendar while speaking with the customer and can book, reschedule, or cancel appointments during the call.',
    accent: {
      bg: 'bg-violet-50/60',
      border: 'border-violet-100',
      iconBg: 'bg-gradient-to-br from-violet-600 to-violet-400',
      iconText: 'text-white',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]',
      hoverBorder: 'hover:border-violet-300/60',
      tagBg: 'bg-violet-100/80',
      tagText: 'text-violet-700',
    },
    tag: 'Smart Scheduling',
    number: '03',
  },
  {
    icon: Zap,
    title: 'Updates Your CRM Automatically',
    description: 'Important details from every conversation are captured and sent to your CRM automatically, so your team doesn\'t have to spend time writing call notes.',
    accent: {
      bg: 'bg-amber-50/60',
      border: 'border-amber-100',
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-400',
      iconText: 'text-white',
      hoverShadow: 'hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]',
      hoverBorder: 'hover:border-amber-300/60',
      tagBg: 'bg-amber-100/80',
      tagText: 'text-amber-700',
    },
    tag: 'Auto Sync',
    number: '04',
  }
];

const HomeSolution: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2AA7D3]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-emerald-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F6F94]/[0.08] border border-[#2AA7D3]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2AA7D3] animate-pulse" />
            <span className="text-xs font-bold text-[#0F6F94] uppercase tracking-wider">Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            What Our AI Does For You
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Your AI Voice Assistant handles everyday phone conversations so your team can spend more time serving customers and closing deals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div
              key={item.title}
              className={`
                group relative bg-white rounded-[24px] p-7 sm:p-8
                border ${item.accent.border}
                shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)]
                ${item.accent.hoverShadow}
                ${item.accent.hoverBorder}
                transition-all duration-300 ease-out
                cursor-pointer
              `}
            >
              {/* Step number watermark */}
              <span className="absolute top-6 right-7 text-[72px] font-black text-slate-100/80 leading-none select-none pointer-events-none transition-colors duration-300 group-hover:text-slate-200/60">
                {item.number}
              </span>

              {/* Card content */}
              <div className="relative z-10">
                {/* Top row: Icon + Tag */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-2xl ${item.accent.iconBg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                    <item.icon className={`w-6 h-6 ${item.accent.iconText}`} strokeWidth={2} />
                  </div>
                  
                  {/* Category tag */}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.accent.tagBg} ${item.accent.tagText}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-slate-500 leading-relaxed mb-2" style={{ lineHeight: '1.7' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolution;

