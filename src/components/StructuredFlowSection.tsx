"use client";

import React from 'react';
import { 
  Database, 
  PhoneCall, 
  Webhook, 
  Cpu, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  Layers, 
  XCircle, 
  TrendingUp, 
} from 'lucide-react';

const flowSteps = [
  {
    step: '01',
    badge: 'Multi-Source Intake',
    title: 'Instant Lead Capture',
    desc: 'Connects directly to Webhooks, CRMs (Salesforce, HubSpot, Zoho), Google Sheets, or custom APIs. The millisecond a new lead arrives, the pipeline triggers automatically.',
    icon: Database,
    accent: 'border-blue-200 bg-blue-50/60 text-blue-600'
  },
  {
    step: '02',
    badge: 'Cognitive Engine',
    title: 'Context & Reasoning',
    desc: 'Advanced cognitive reasoning models evaluate lead parameters, past interaction history, and booking calendars to form a personalized, context-aware call strategy.',
    icon: Cpu,
    accent: 'border-purple-200 bg-purple-50/60 text-purple-600'
  },
  {
    step: '03',
    badge: 'Natural Voice',
    title: 'Warm Zero-Lag Calling',
    desc: 'Powered by an ultra-low-latency voice pipeline with natural cadence and empathetic speech. Handles slot booking, mutual calendar consensus, and instant transfer to human staff on request.',
    icon: PhoneCall,
    accent: 'border-teal-200 bg-teal-50/60 text-teal-600'
  },
  {
    step: '04',
    badge: 'Schema Extraction',
    title: 'Speech to Data',
    desc: 'Conversations are unstructured; operations need structure. The reasoning model distills call audio into verified JSON: confirmed time, sentiment, and notes.',
    icon: Layers,
    accent: 'border-amber-200 bg-amber-50/60 text-amber-600'
  },
  {
    step: '05',
    badge: 'Two-Way Closed Loop',
    title: 'Direct CRM Webhook Write',
    desc: 'Instantly dispatches structured payload back to the source CRM or database via secure Webhooks. Calendar invites auto-generate—zero manual Excel data entry.',
    icon: Webhook,
    accent: 'border-emerald-200 bg-emerald-50/60 text-emerald-600'
  }
];

const tableRows = [
  {
    dimension: 'Concurrency & Volume',
    tag: 'Throughput',
    icon: Zap,
    manualState: '1 call at a time. High risk of dropped balls during peak batches (1 staff strictly capped at 6–10 students/day).',
    agentState: 'Infinite parallel calls. Execute thousands of operations simultaneously with zero queue latency.',
    operationalDelta: '1,000s in parallel vs 1'
  },
  {
    dimension: 'Scheduling Overhead',
    tag: 'Logistics',
    icon: CalendarCheck,
    manualState: '3–5 back-and-forth touchpoints via WhatsApp & calls. 15–20 minutes admin time wasted per session.',
    agentState: 'Autonomous 2-way consensus: aligns mentor & mentee availability and auto-dispatches Google Meet invites.',
    operationalDelta: '100% eliminated'
  },
  {
    dimension: 'Response Latency & Speed',
    tag: 'Subsecond Speed',
    icon: Zap,
    manualState: 'Callers wait on hold 5–10 minutes or receive delayed callbacks hours later.',
    agentState: 'Instant response — Natural Generation and instant conversational pickup on the first ring.',
    operationalDelta: 'Instant vs 10min hold'
  },
  {
    dimension: 'Data Entry & Synchronization',
    tag: 'Data Integrity',
    icon: Webhook,
    manualState: 'Manual export to Excel, prone to human error, untracked no-shows, and formatting desync.',
    agentState: 'Automated schema extraction via reasoning models and direct JSON/Webhook injection to CRM in milliseconds.',
    operationalDelta: 'Instant Webhook / 0% manual'
  },
  {
    dimension: 'Pre-Meeting Preparation',
    tag: 'Retention',
    icon: Clock,
    manualState: 'Variable briefing quality dependent on operator workload; ~25–35% student drop-off rate.',
    agentState: 'Consistent T-24h context briefing playbook + T-30m simultaneous outbound nudge calls to both parties.',
    operationalDelta: '<5% no-shows (95%+ attendance)'
  },
  {
    dimension: 'Compliance & Scale',
    tag: 'Governance',
    icon: ShieldCheck,
    manualState: 'High risk of operator burnout and manual dialing violations against Do-Not-Call (DNC) lists.',
    agentState: 'Programmatic scaling with built-in automated TRAI regulations and real-time DNC list scrubbing.',
    operationalDelta: '100% TRAI / DNC compliant'
  }
];

const StructuredFlowSection: React.FC = () => {
  return (
    <section id="flow" className="relative py-12 sm:py-16 md:py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Responsive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-200 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#2AA7D3]"></span>
              Multi-Source Integration & Voice Automation
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Operational Architecture & Blueprint of Our AI Voice Assistant
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              Connect diverse lead sources, trigger autonomous calls in real time as leads arrive, and automatically update your CRM via Webhooks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0 bg-white p-2.5 sm:px-3 sm:py-2 rounded-lg border border-slate-200 shadow-sm text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-slate-800">Live Webhook Engine</span>
            </div>
            <span className="text-slate-300 hidden xs:inline">|</span>
            <span>Zero Manual Entry</span>
          </div>
        </div>

        {/* 5-Step Compact Pipeline with Horizontal Scroll on Mobile */}
        <div className="mb-12 sm:mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>Execution Lifecycle</span>
              <span className="hidden sm:inline text-[10px] text-slate-400 font-normal">
                (5 Stages)
              </span>
            </div>
            <div className="lg:hidden flex items-center gap-1 text-[11px] font-medium text-[#0F6F94] bg-white px-2 py-0.5 rounded border border-slate-200">
              <span>Scroll flow</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          {/* Horizontal scroll on mobile/tablet, 5-col grid on desktop */}
          <div className="flex lg:grid lg:grid-cols-5 gap-4 overflow-x-auto pb-4 pt-1 px-1 lg:overflow-visible lg:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {flowSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors w-[260px] xs:w-[280px] sm:w-[300px] lg:w-auto shrink-0 snap-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      STAGE {step.step}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${step.accent}`}>
                      <step.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F6F94] block mb-1">
                    {step.badge}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Centered connector arrow node between cards */}
                {idx < flowSteps.length - 1 && (
                  <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0F6F94]">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* OPERATIONAL DELTA: FULLY MOBILE RESPONSIVE */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          
          {/* Header Banner */}
          <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-5 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-white/10">
                <TrendingUp className="w-3.5 h-3.5" />
                Operational Blueprint
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                Operational Delta: Manual Spreadsheets vs. AI Voice Assistant
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Measurable performance comparison between manual operational drag and autonomous AI Voice Assistant scaling.
              </p>
            </div>

            {/* Responsive KPI Badges (1 col on mobile, 3 cols on tablet+) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0 w-full lg:w-auto">
              <div className="bg-slate-800/90 border border-slate-700/80 px-3 py-2 rounded-lg text-left sm:text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Concurrency</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">1,000s in Parallel</div>
              </div>
              <div className="bg-slate-800/90 border border-slate-700/80 px-3 py-2 rounded-lg text-left sm:text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Scheduling</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">100% Eliminated</div>
              </div>
              <div className="bg-slate-800/90 border border-slate-700/80 px-3 py-2 rounded-lg text-left sm:text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400">Sync Mode</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400">Instant Webhook</div>
              </div>
            </div>
          </div>

          {/* DESKTOP TABLE VIEW (md:block) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/80 text-[11px] uppercase font-bold tracking-wider text-slate-600">
                  <th scope="col" className="py-3 px-5 w-[22%]">Operational Dimension</th>
                  <th scope="col" className="py-3 px-5 w-[32%] text-rose-700 border-l border-slate-200/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Current Manual State
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-5 w-[32%] text-emerald-700 border-l border-slate-200/60">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      AI Voice Assistant State
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-5 w-[14%] text-slate-700 border-l border-slate-200/60 text-right">
                    Operational Delta
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    
                    {/* Dimension */}
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="p-1 rounded bg-slate-100 text-[#0F6F94]">
                          <row.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {row.tag}
                        </span>
                      </div>
                      <div className="font-bold text-slate-900 text-sm">
                        {row.dimension}
                      </div>
                    </td>

                    {/* Manual State */}
                    <td className="py-4 px-5 align-top border-l border-slate-200/60 bg-rose-50/20">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="text-slate-600 leading-relaxed font-normal">
                          {row.manualState}
                        </span>
                      </div>
                    </td>

                    {/* AI Voice Assistant State */}
                    <td className="py-4 px-5 align-top border-l border-slate-200/60 bg-emerald-50/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 leading-relaxed font-medium">
                          {row.agentState}
                        </span>
                      </div>
                    </td>

                    {/* Operational Delta */}
                    <td className="py-4 px-5 align-middle border-l border-slate-200/60 text-right">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-800 font-bold text-[11px] whitespace-nowrap border border-emerald-200">
                        {row.operationalDelta}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD VIEW (block md:hidden) */}
          <div className="block md:hidden divide-y divide-slate-200">
            {tableRows.map((row, idx) => (
              <div key={idx} className="p-4 space-y-3">
                {/* Header with Title and Delta Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-slate-100 text-[#0F6F94]">
                      <row.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {row.tag}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {row.dimension}
                      </h4>
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px] whitespace-nowrap border border-emerald-200 shrink-0">
                    {row.operationalDelta}
                  </span>
                </div>

                {/* Manual State Card */}
                <div className="p-3 rounded-lg bg-rose-50/40 border border-rose-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 mb-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>Current Manual State</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {row.manualState}
                  </p>
                </div>

                {/* AI Voice Assistant State Card */}
                <div className="p-3 rounded-lg bg-emerald-50/40 border border-emerald-200/70">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>AI Voice Assistant State</span>
                  </div>
                  <p className="text-xs text-slate-800 font-medium leading-relaxed">
                    {row.agentState}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Built-in <strong>TRAI / Do-Not-Call (DNC)</strong> compliance on all outbound channels.</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-600">
              <span className="flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Webhook JSON Injection
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2AA7D3]"></span>
                Neural Voice Pipeline
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                Real-Time Reasoning Models
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                Subsecond Voice Generation
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StructuredFlowSection;

