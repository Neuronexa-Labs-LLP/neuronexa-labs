import React from 'react';
import { Search, PenTool, Link2, Rocket, BarChart, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand your business',
    description:
      'We look at your calls, leads, customer questions, and daily workflows to identify where your team is losing the most time or opportunities.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Build your AI assistant',
    description:
      'We train your assistant on your services, FAQs, processes, and brand voice so it knows what to say, what to ask, and what to do.',
  },
  {
    number: '03',
    icon: Link2,
    title: 'Connect everything',
    description:
      'Connect your CRM, calendar, website, and business systems so the assistant can do more than talk — it can actually take action.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Start handling calls',
    description:
      'Go live with inbound calls. Your assistant can answer questions, qualify leads, follow up, book appointments, and transfer calls to your team when needed.',
  },
  {
    number: '05',
    icon: BarChart,
    title: 'See what happens',
    description:
      'Track every call, conversation, lead, appointment, and outcome from one place. Use the data to improve performance and grow.',
  },
];

// HowTo structured data helps this section surface as a rich result in search.
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How our AI voice assistant works',
  description:
    'How we set up an AI voice assistant that answers calls, follows up with leads, and books appointments for your business.',
  step: steps.map((step) => ({
    '@type': 'HowToStep',
    position: Number(step.number),
    name: step.title,
    text: step.description,
  })),
};

const HomeHowItHelps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-10 ">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy animate-pulse" />
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Five steps from first consultation to a live, automated voice assistant — answering calls,
            qualifying leads, and booking appointments for your business.
          </p>
        </div>

        {/* Steps Card Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_-8px_rgba(30,58,95,0.06),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden">
          {/* 5-Column Grid */}
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100 relative">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="group relative p-3 lg:p-5 flex flex-col justify-start transition-all duration-300 hover:bg-slate-50/70"
              >
                {/* Step Connector Arrow (Desktop only, between columns) */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-3.5 top-16 w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-400 items-center justify-center z-20 shadow-xs"
                  >
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                )}

                {/* Top Row: Circular Icon on Left, Number at the End on Right */}
                <div className="flex items-center justify-between mb-6">
                  {/* Circular Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-brand-navy relative z-10 shrink-0 shadow-xs">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  {/* Step Number at the end */}
                  <span className="text-2xl lg:text-3xl font-black text-slate-300 group-hover:text-brand-navy/50 transition-colors tracking-tight font-mono select-none">
                    {step.number}
                  </span>
                </div>

                {/* Title Container: Fixed min-height ensures uniform vertical alignment */}
                <div className="flex items-start mb-2.5">
                  <h3 className="text-[17px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-brand-navy transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItHelps;




