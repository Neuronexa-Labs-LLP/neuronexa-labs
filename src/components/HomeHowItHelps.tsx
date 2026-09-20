import React from 'react';
import { Search, PenTool, Link2, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Understand Your Business',
    description: 'We learn how your team handles calls, leads, and appointments to find where AI helps most.',
  },
  {
    icon: PenTool,
    title: 'Build Your AI Assistant',
    description: 'We create an assistant that matches your business, your services, and your tone of voice.',
  },
  {
    icon: Link2,
    title: 'Connect Your Tools',
    description: 'We plug into the tools you already use — your CRM, calendar, and workflows.',
  },
  {
    icon: Rocket,
    title: 'Start Helping Your Team',
    description: 'Your AI answers calls, follows up with leads, and books appointments — 24/7.',
  },
  {
    icon: BarChart,
    title: 'See the Results',
    description: 'Track calls, leads, and conversations in one place. See the impact instantly.',
  }
];

const HomeHowItHelps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-brand-navy text-sm font-semibold tracking-widest uppercase mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How We Help You Grow</h2>
          <p className="text-slate-500 text-lg leading-relaxed">We start by understanding your business and where your team spends the most time. Then we set up an AI Voice Assistant to handle those tasks for you.</p>
        </div>

        {/* Horizontal Stepper */}
        <div className="hidden lg:grid grid-cols-5 gap-0 relative">
          {/* Connector Line */}
          <div className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-navy/20 via-brand-navy/40 to-brand-navy/20"></div>

          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center px-4 relative group">
              {/* Numbered Circle */}
              <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-navy/30 flex items-center justify-center mb-6 relative z-10 group-hover:border-brand-navy group-hover:shadow-[0_0_20px_rgba(42,167,211,0.2)] transition-all duration-300">
                <step.icon className="w-6 h-6 text-[#0F6F94] group-hover:text-brand-navy transition-colors duration-300" />
              </div>

              {/* Step Label */}
              <span className="text-xs font-bold text-brand-navy tracking-wider uppercase mb-2">Step {index + 1}</span>
              <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight leading-snug">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Layout — stacked */}
        <div className="lg:hidden relative pl-14">
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Circle on the line */}
                <div className="absolute -left-14 top-0 w-12 h-12 rounded-full bg-white border-2 border-brand-navy/30 flex items-center justify-center z-10">
                  <step.icon className="w-5 h-5 text-[#0F6F94]" />
                </div>
                {/* Connector line to next step — hidden on last step */}
                {index < steps.length - 1 && (
                  <div className="absolute -left-[33px] top-12 w-[2px] h-[calc(100%+2rem)] bg-brand-navy/20"></div>
                )}
                {/* Text content */}
                <div className="pt-1">
                  <span className="text-xs font-bold text-brand-navy tracking-wider uppercase">Step {index + 1}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItHelps;




