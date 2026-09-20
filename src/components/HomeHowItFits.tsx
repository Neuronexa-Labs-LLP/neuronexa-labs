"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fits = [
  "No technical knowledge needed — we handle the setup for you.",
  "Reduce manual work for your team by letting AI handle calls, follow-ups, and bookings.",
  "Go live in days, not months — with zero downtime during setup.",
  "Every call is recorded and reviewable, so you always know what's happening.",
  "Handle 10 calls a day or 10,000 without adding more people."
];

const HomeHowItFits: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div 
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              It Just Works With Your Business
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              You don't need to change the way your team works. Our AI Voice Assistant fits into your existing processes and works with the tools you already use.
            </p>
            
            <ul className="space-y-4">
              {fits.map((fit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-navy shrink-0 mt-0.5" />
                  <span className="text-slate-700">{fit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-lg font-bold text-slate-800 mb-2">Your team stays in control</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Listen to calls anytime · See what your AI is handling 
              </p>
            </div>
          </div>

          <div 
            className="w-full lg:w-1/2 relative"
          >
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-navy/20 rounded-full blur-[80px]" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0F2137] to-[#0A1626] p-1 border border-slate-700/50">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy/10 rounded-full blur-3xl" />
              
              <div className="relative bg-[#0F2137]/90 backdrop-blur-xl rounded-[23px] p-6 sm:p-8 flex flex-col gap-5 border border-slate-700/30">
                {/* Integration Card */}
                <div className="bg-slate-800/40 hover:bg-slate-800/60 transition-colors rounded-2xl p-5 border border-slate-700/50 shadow-inner group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 rounded-l-2xl shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                      <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-white font-bold text-sm sm:text-base tracking-wide">Active Integration</p>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">CONNECTED</span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium">Your CRM is connected and ready</p>
                    </div>
                  </div>
                </div>

                {/* Call Volume Card */}
                <div className="bg-slate-800/40 hover:bg-slate-800/60 transition-colors rounded-2xl p-5 border border-slate-700/50 shadow-inner group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy rounded-l-2xl shadow-[0_0_10px_rgba(42,167,211,0.5)]" />
                  <div className="flex items-center justify-between mb-4 pl-2">
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                        Live Call Volume
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-navy opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-navy"></span>
                        </span>
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium mt-0.5">Handling multiple calls at the same time</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-white tracking-tight">14</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Active</p>
                    </div>
                  </div>
                  
                  {/* Dynamic Audio Waveform Mockup */}
                  <div className="flex gap-1.5 h-12 items-end justify-between px-2 w-full mt-2">
                    {[35, 60, 40, 85, 55, 100, 75, 45, 90, 65, 30, 70].map((h, i) => (
                      <div 
                        key={i} 
                        style={{ height: `${h}%` }}
                        className="w-full max-w-[12px] bg-gradient-to-t from-[#0F6F94] to-brand-navy rounded-sm opacity-80 group-hover:opacity-100 transition-opacity" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeHowItFits;

