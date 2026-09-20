import React from 'react';
import { Search, PenTool, Link2, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Learn your business',
    description:
      'We study how your team handles calls, leads, and appointments to find where AI adds the most value.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Build your AI assistant',
    description:
      'We train it on your services, FAQs, and tone of voice, so it sounds like part of your team.',
  },
  {
    number: '03',
    icon: Link2,
    title: 'Connect your tools',
    description:
      'We plug it into the CRM, calendar, and workflows you already use — no new software to learn.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Go live',
    description:
      'Your assistant starts answering calls, following up on leads, and booking appointments — 24/7.',
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Track the results',
    description:
      'Every call, lead, and booking shows up in one dashboard, so you always know what is working.',
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
    <section id="how-it-works" className="py-20 md:py-24 bg-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy animate-pulse" />
            <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 mb-6 tracking-tight">
            How it works
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
            Five steps from first call to a fully working AI assistant — answering calls,
            qualifying leads, and booking appointments for your business.
          </p>
        </div>

        {/* Steps grid */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-slate-200/80 bg-white shadow-sm rounded-xl overflow-hidden">
          {steps.map((step) => (
            <li
              key={step.title}
              className="border-r border-b border-slate-200/80 p-6 flex flex-col hover:bg-[#F8FAFC] transition-colors duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                  <step.icon className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <span className="text-3xl font-black text-slate-300 tracking-tighter font-mono transition-colors duration-300">
                  {step.number}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HomeHowItHelps;




