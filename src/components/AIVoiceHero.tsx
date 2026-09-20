"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Headphones, CalendarCheck, Zap, CheckCircle2 } from 'lucide-react';

const highlights = [
  { icon: Phone, text: 'Outbound & Inbound Calls' },
  { icon: Headphones, text: '24/7 Customer Support' },
  { icon: CalendarCheck, text: 'Appointment Booking' },
  { icon: Zap, text: 'Automatic CRM Updates' },
];

const AIVoiceHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#EEF8FF] via-white to-white pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#2AA7D3]/[0.06] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-emerald-400/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#2AA7D3]/20 shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse" />
            <span className="text-xs font-bold text-[#0F6F94] uppercase tracking-wider">AI Voice Assistant</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
          >
            An AI That Handles Your{' '}
            <span className="bg-gradient-to-r from-[#0F6F94] via-[#2AA7D3] to-sky-500 bg-clip-text text-transparent">
              Phone Calls
            </span>{' '}
            Like Your Best Employee
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Your AI Voice Assistant answers customer calls, reaches out to new leads, 
            books appointments, and updates your CRM — all while sounding natural and 
            friendly. Your team focuses on closing deals, not chasing calls.
          </motion.p>

          {/* Highlights row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
          >
            {highlights.map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200/80 shadow-sm"
              >
                <item.icon className="w-4 h-4 text-[#2AA7D3]" />
                <span className="text-sm font-semibold text-slate-700">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/9110435020"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F6F94] to-[#2AA7D3] hover:from-[#0c5977] hover:to-[#228cb2] text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-[#0F6F94]/20 transition-all duration-200 cursor-pointer"
            >
              Get a Free Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#outcomes"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-[#2AA7D3] text-slate-700 bg-white hover:text-[#0F172A] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:bg-slate-50 cursor-pointer"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No coding needed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Live in days
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              TRAI / DNC Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Cancel anytime
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceHero;

