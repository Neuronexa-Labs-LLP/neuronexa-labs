"use client";

import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const HomeBannerCallout: React.FC = () => {
  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-r from-slate-900 via-[#0B2545] to-[#0F6F94] p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-mono font-semibold uppercase mb-1.5">
              <Zap className="w-3.5 h-3.5" />
              AI Voice Agent
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-tight">
              Ready to deploy an AI Voice Assistant for your business?
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Launch customized inbound &amp; outbound voice agents in minutes with subsecond latency and instant CRM synchronization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/9110435020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md cursor-pointer"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerCallout;

