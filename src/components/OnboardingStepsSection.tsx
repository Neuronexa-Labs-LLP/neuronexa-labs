"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Bot,
  MessageSquare,
  FileUp,
  Play,
  BarChart3
} from 'lucide-react';

const timelineSteps = [
  {
    number: '01',
    icon: Bot,
    title: '1. Create Your Assistant',
    desc: 'Give your assistant a friendly name, choose a warm, natural voice, and select its conversational tone.'
  },
  {
    number: '02',
    icon: MessageSquare,
    title: '2. Plan the Conversation',
    desc: 'Create simple steps and questions for your assistant to follow during the call.'
  },
  {
    number: '03',
    icon: Play,
    title: '3. Start Your Campaign',
    desc: 'Upload your contact list, select a schedule, and let our AI Voice Assistant start making calls.'
  },
  {
    number: '04',
    icon: BarChart3,
    title: '4. Watch the Results',
    desc: 'See call summaries, check booked appointments, and review customer satisfaction.'
  }
];

const OnboardingStepsSection: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-20 md:py-24 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-navy" />
            Fast Deployment
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Get started in minutes
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            We guide you every step of the way or let you launch yourself. Natural, empathetic voice assistants ready in minutes.
          </p>
        </div>

        {/* 2-Column Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 max-w-5xl mx-auto items-start">
          
          {/* Left: 5 Timeline Steps */}
          <div className="flex flex-col relative pl-2 sm:pl-4">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative flex gap-5 sm:gap-6 pb-8 last:pb-0"
              >
                {/* Continuous timeline vertical line */}
                {idx < timelineSteps.length - 1 && (
                  <div className="absolute left-[17px] top-[36px] bottom-0 w-[1px] bg-slate-200" />
                )}

                {/* Circular Number Badge */}
                <div className="w-9 h-9 rounded-full bg-white border border-slate-300/90 shadow-xs flex items-center justify-center font-mono text-xs font-bold text-[#0F6F94] shrink-0 z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: One Integrated Platform Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="w-full flex items-center justify-center lg:sticky lg:top-24"
          >
            <div className="w-full max-w-md bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,111,148,0.06)]">
              
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#0F6F94]/10 text-[#0F6F94] text-[11px] font-mono font-bold uppercase mb-3">
                All-in-One Engine
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                One integrated platform.
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our AI Voice Assistant coordinates all outbound call dials, help docs indexing, and workflow updates automatically. Everything you need is integrated in a single workspace.
              </p>

              {/* Feature Checkmarks */}
              <div className="flex flex-col gap-2.5 text-xs font-mono text-slate-700 mb-7 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CRM Sync (Salesforce, HubSpot, Webhooks)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Neural Voice Pipeline &amp; Vernacular Accents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Frictionless Two-Way Calendar Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Human Onboarding Support on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-emerald-700 font-bold">Instant Response — Natural Voice Generation</span>
                </div>
              </div>


              {/* Primary Call to Action */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3">

                <a
                  href="https://wa.me/9110435020"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-brand-navy text-slate-700 bg-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all hover:bg-slate-50 cursor-pointer text-center"
                >
                  Schedule Demo
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default OnboardingStepsSection;

