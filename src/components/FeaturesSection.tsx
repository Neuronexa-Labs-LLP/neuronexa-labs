import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  PhoneCall, 
  Activity, 
  CheckCircle2, 
  BarChart3, 
  ArrowUpRight,
  Zap
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2AA7D3]" />
            What Is Our Solution
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Autonomous Voice Platform. Built Different.
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Engineered with subsecond latency, natural generation, and instant human handoff for mission-critical business communications.
          </p>
        </div>

        {/* 4 Alternating Feature Blocks */}
        <div className="space-y-16 sm:space-y-20 max-w-6xl mx-auto">
          
          {/* Story Block 1: Autonomous Calling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start text-left"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#0F6F94] mb-3">
                <PhoneCall className="w-3.5 h-3.5 text-[#2AA7D3]" />
                Autonomous Calling
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                High-volume outreach with natural human warmth — and instant team handoff.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Upload your contacts, set a schedule, and let our AI Voice Assistant connect with each person naturally. Each call follows your custom playbook, handles questions empathetically, books appointments, and smoothly loops in a real team member if the caller prefers. You wake up to an organized calendar and happy prospects.
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(15,111,148,0.06)] font-mono text-xs">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 font-bold text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Live — Campaign: Q4 Outreach
                  </span>
                  <span className="text-[#0F6F94] bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
                    124/500 calls
                  </span>
                </div>

                {/* Call Rows */}
                <div className="space-y-2.5 divide-y divide-slate-100">
                  <div className="flex items-center justify-between pt-2 text-slate-800">
                    <span className="font-semibold">Sarah Chen — Qualified ✓</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Done
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-slate-800">
                    <span className="font-semibold">Mike Ross — Demo Booked</span>
                    <span className="inline-flex items-center gap-1.5 text-[#0F6F94] font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#0F6F94]" /> Meet Sent
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-slate-800">
                    <span className="font-semibold">Ana Lopez — Callback Set</span>
                    <span className="inline-flex items-center gap-1.5 text-amber-600 font-bold text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-amber-500" /> Tomorrow
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-slate-800">
                    <span className="font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      Tom Wright — Dialing...
                    </span>
                    <span className="inline-flex items-center gap-1 text-cyan-600 font-bold text-[11px]">
                      <Zap className="w-3 h-3 text-cyan-600" />
                      Instant Voice Response
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Story Block 2: Intelligence Layer (Reversed on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Visual (Left on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full order-2 lg:order-1"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(15,111,148,0.06)] space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 text-[#0F6F94]">
                    <BarChart3 className="w-3.5 h-3.5 text-[#2AA7D3]" />
                    Campaign Metrics Overview
                  </span>
                  <span className="text-emerald-600 text-[10px]">Real-Time Active</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Conversion Rate</div>
                    <div className="text-xl font-bold text-slate-900 mt-1 flex items-baseline gap-1.5">
                      <span>18.4%</span>
                      <span className="text-emerald-600 text-[10px] font-semibold flex items-center">
                        <ArrowUpRight className="w-3 h-3" /> +4.2%
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Audio Uptime</div>
                    <div className="text-xl font-bold text-emerald-600 mt-1">99.9%</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Sentiment Score</div>
                    <div className="text-xl font-bold text-purple-700 mt-1">94.2%</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Avg Call Latency</div>
                    <div className="text-xl font-bold text-[#0F6F94] mt-1">Instant</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text (Right on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-start text-left order-1 lg:order-2"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 mb-3">
                <Activity className="w-3.5 h-3.5 text-indigo-600" />
                Intelligence Layer
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                Every call is a data point. Every insight is actionable.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Real-time dashboards show you sentiment trends, conversion funnels, and performance at a glance. Drill into individual call transcripts, listen to recordings, and export campaign reports to your CRM. Your assistants get smarter with every conversation.
              </p>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
