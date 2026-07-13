import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Network, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import AnimatedText from './jack/AnimatedText';
import Magnet from './jack/Magnet';

const services = [
  {
    icon: BrainCircuit,
    title: "Workflow Automation",
    subtitle: "Eliminate Redundancy",
    desc: "Replace repetitive manual tasks with highly optimized, automated workflows that execute flawlessly 24/7.",
    bg: "bg-blue-50/80"
  },
  {
    icon: Network,
    title: "Agentic AI Integration",
    subtitle: "Autonomous Logic",
    desc: "Deploy autonomous AI agents capable of reasoning, planning, and executing complex multistep processes.",
    bg: "bg-purple-50/80"
  },
  {
    icon: Activity,
    title: "Data Engineering",
    subtitle: "Unified Truth",
    desc: "Architect robust data pipelines that clean, structure, and securely store your organization's most valuable assets.",
    bg: "bg-emerald-50/80"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    subtitle: "Zero Trust",
    desc: "Embed zero-trust security architecture directly into your automated workflows and custom applications.",
    bg: "bg-amber-50/80"
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } 
  }
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#FAFBFC] border-t border-b border-slate-100/80 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-[#2AA7D3]/[0.04] blur-[120px] z-0" />
        <div className="absolute -bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-blue-600/[0.04] blur-[100px] z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-[#2AA7D3]/20 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse"></span>
            What We Do
          </motion.div>
          <AnimatedText 
            text="Intelligent automation and AI workflows built for global enterprises"
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible gap-6 pb-6 md:pb-0 pr-4 md:pr-0 custom-scrollbar snap-x snap-mandatory"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white border border-slate-200/70 rounded-[28px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(42,167,211,0.12)] transition-shadow duration-500 group min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start flex flex-col overflow-hidden"
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2AA7D3]/5 to-transparent rounded-bl-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <Magnet padding={40} disabled={false} magnetStrength={2}>
                  <div className={`h-16 w-16 rounded-[20px] ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100/50`}>
                    <service.icon className={`h-7 w-7 text-[#2AA7D3] group-hover:text-blue-600 transition-colors duration-500`} />
                  </div>
                </Magnet>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full group-hover:border-[#2AA7D3]/30 group-hover:text-[#2AA7D3] group-hover:bg-[#E8F4FA]/50 transition-colors duration-300">
                  {service.subtitle}
                </span>
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#2AA7D3] transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium flex-grow">
                  {service.desc}
                </p>
                
                {/* Bottom CTA */}
                <motion.div 
                  whileHover="hover"
                  className="mt-8 pt-5 border-t border-slate-100 flex items-center text-xs font-bold text-[#2AA7D3] gap-1 cursor-pointer"
                >
                  Explore Solution 
                  <motion.div variants={{ hover: { x: 5 } }} transition={{ type: "spring" }}>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;