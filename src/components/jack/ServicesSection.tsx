import React from 'react';
import { BrainCircuit, Network, Activity, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const services = [
  {
    id: "01",
    icon: BrainCircuit,
    title: "Workflow Automation",
    subtitle: "Eliminate Redundancy",
    desc: "Replace repetitive manual tasks with highly optimized, automated workflows that execute flawlessly 24/7.",
    bg: "bg-blue-50"
  },
  {
    id: "02",
    icon: Network,
    title: "Agentic AI",
    subtitle: "Autonomous Logic",
    desc: "Deploy autonomous AI agents capable of reasoning, planning, and executing complex multistep processes.",
    bg: "bg-purple-50"
  },
  {
    id: "03",
    icon: Activity,
    title: "Data Engineering",
    subtitle: "Unified Truth",
    desc: "Architect robust data pipelines that clean, structure, and securely store your organization's most valuable assets.",
    bg: "bg-emerald-50"
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Enterprise Security",
    subtitle: "Zero Trust",
    desc: "Embed zero-trust security architecture directly into your automated workflows and custom applications.",
    bg: "bg-amber-50"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services"
      className="relative pt-32 pb-48 bg-[#FAFBFC] rounded-t-[40px] md:rounded-t-[60px] border-t border-slate-100 z-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-white border border-[#2AA7D3]/20 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse"></span>
              What We Do
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-2xl">
              Intelligent automation built for <span className="text-[#2AA7D3]">global enterprises.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="md:max-w-xs text-slate-600 font-medium text-lg md:text-xl">
            We don't just write code; we engineer scalable solutions that transform how your business operates.
          </FadeIn>
        </div>

        {/* Services Grid (Masonry-ish for 4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-32">
          {services.map((service, idx) => (
            <FadeIn 
              key={service.id} 
              y={50} 
              delay={idx * 0.15}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="group relative bg-white border border-slate-200/70 rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(42,167,211,0.12)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden">
                
                {/* Number & Icon */}
                <div className="flex justify-between items-start mb-12">
                  <span className="text-xl font-bold text-slate-300">
                    {service.id}
                  </span>
                  <div className={`h-20 w-20 rounded-[24px] ${service.bg} flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                    <service.icon className="h-10 w-10 text-[#2AA7D3]" />
                  </div>
                </div>

                <div className="flex-grow">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#2AA7D3] mb-4 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>

                {/* Decorative background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#2AA7D3]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
