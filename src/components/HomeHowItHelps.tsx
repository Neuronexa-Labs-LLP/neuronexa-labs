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
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-50">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-navy animate-pulse"></span>
            <span className="text-xs font-bold text-brand-navy tracking-widest uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F2137] mb-6 tracking-tight">
            How We Help You Grow
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We handle the complexity so you can focus on results. Our seamless 5-step integration ensures your AI voice assistant fits perfectly into your operations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-navy/0 via-brand-navy/20 to-brand-navy/0 -translate-x-1/2"></div>
          
          {/* Left Line (Mobile only) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-navy/10 via-brand-navy/20 to-brand-navy/0"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.title} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} md:h-48 group`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-slate-50 shadow-lg z-10 group-hover:scale-110 group-hover:border-brand-navy/20 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                      <step.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Empty space for alternating layout (Desktop) */}
                  <div className="hidden md:block w-1/2 px-12"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 md:px-12 pt-1 md:pt-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1">
                      {/* Subtle step number background */}
                      <div className={`absolute -top-4 ${isEven ? '-left-2' : '-right-2 md:-right-2'} text-9xl font-black text-slate-50/80 pointer-events-none select-none z-0`}>
                        {index + 1}
                      </div>
                      
                      <div className="relative z-10">
                        <span className="inline-block text-[10px] font-extrabold text-brand-navy tracking-widest uppercase mb-3 px-2 py-1 bg-brand-navy/5 rounded">
                          Step 0{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItHelps;




