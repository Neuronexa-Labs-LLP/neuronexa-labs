import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Cpu,
  Layers,
  CheckCircle2,
  Zap,
  Sparkles,
  Code,
  Clock,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Check,
  BarChart3,
  GitBranch,
  Workflow,
  Play,
} from 'lucide-react';

interface ProjectNeed {
  id: string;
  name: string;
  duration: string;
  desc: string;
  timeline: {
    phase: string;
    weeks: number;
    description: string;
  }[];
}

const projectNeedsData: ProjectNeed[] = [
  {
    id: 'basic-integration',
    name: 'Standard AI Agent & Integration',
    duration: '2 - 4 Weeks',
    desc: 'Connecting standard chatbot integrations, calendar APIs, and auto-email alerts.',
    timeline: [
      { phase: 'Requirement & Ideation', weeks: 0.5, description: 'Bringing customized automation ideas to your stack' },
      { phase: 'Business Logic Planning', weeks: 0.5, description: 'Structuring flows and data schemas' },
      { phase: 'Prototype Development', weeks: 1, description: 'Building the core agent actions' },
      { phase: 'Handover & Support', weeks: 0.5, description: 'Setup, testing, and continuous optimization' },
    ]
  },
  {
    id: 'voice-caller',
    name: 'Voice AI & CRM Autonomous Sync',
    duration: '6 - 8 Weeks',
    desc: 'Deploying outbound agent systems connected to live webhook pipelines with CRM sync.',
    timeline: [
      { phase: 'Requirement & Ideation', weeks: 1, description: 'Analyzing dialing lists and custom agent prompts' },
      { phase: 'Business Logic Planning', weeks: 1, description: 'API mapping and conditional routing rules' },
      { phase: 'Prototype Development', weeks: 4, description: 'Voice latency tuning, transcription layers, and CRM pushes' },
      { phase: 'Handover & Support', weeks: 1.5, description: 'Volume tests, dashboard training, and support SLA' },
    ]
  },
  {
    id: 'enterprise-custom',
    name: 'Custom Multi-Agent Orchestration',
    duration: '10 - 12 Weeks',
    desc: 'Tailored enterprise stack automation, custom dashboards, database pipelines, and security audits.',
    timeline: [
      { phase: 'Requirement & Ideation', weeks: 2, description: 'Analyzing organizational data silos and custom strategies' },
      { phase: 'Business Logic Planning', weeks: 2, description: 'System architecture design & data governance rules' },
      { phase: 'Prototype Development', weeks: 5, description: 'Full-stack dashboard, custom models, and parallel routing' },
      { phase: 'Handover & Support', weeks: 2, description: 'Compliance validation, handoff, and monthly maintenance' },
    ]
  }
];

const Streamline: React.FC = () => {
  const [selectedNeed, setSelectedNeed] = useState<string>('basic-integration');

  useEffect(() => {
    document.title = 'Streamline Workflow Automation | Neuronexa Labs';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const currentProject = projectNeedsData.find(p => p.id === selectedNeed) || projectNeedsData[0];

  // Phase color mapping
  const phaseColors = [
    { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700', icon: Sparkles },
    { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-700', icon: Code },
    { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-700', icon: Bot },
    { bg: 'bg-emerald-100', border: 'border-emerald-300', text: 'text-emerald-700', icon: Check },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-teal selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2AA7D3]/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl animate-pulse delay-700" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#2AA7D3]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[140px] animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-[#E8F4FA]/10 backdrop-blur-sm border border-[#2AA7D3]/30 text-[#2AA7D3] px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-lg shadow-[#2AA7D3]/5 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse" />
              Enterprise Automation Suite
              <ChevronRight className="h-3 w-3 ml-1" />
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Streamline Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] via-blue-400 to-purple-400">
                Operations
              </span> 24/7.
            </h1>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-semibold mb-8">
              Replace repetitive manual tasks with highly optimized, autonomous workflows. Connect your tools, deploy agentic logic, and watch your business scale flawlessly.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/9110435020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2AA7D3] hover:bg-[#1890B8] text-white px-6 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-[#2AA7D3]/30 hover:scale-105 cursor-pointer"
              >
                Consult an Architect <ArrowRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all cursor-pointer">
                Watch Demo <Play className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Project Estimation Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-8 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }}
          className="bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[32px] p-6 md:p-10"
        >
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-[#2AA7D3] uppercase tracking-wider bg-[#E8F4FA] px-3 py-1 rounded-full">Interactive Estimator</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-950 tracking-tight mt-4 mb-3">
              Project Timeline <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-blue-600">Estimator</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
              We bring our own ideas to your business. Rather than asking you for technical requirement sheets, our architects outline the best strategy, build prototype steps, and deploy custom integrations. Choose a project category to map the timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left selector items */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {projectNeedsData.map((project) => (
                <motion.button
                  key={project.id}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedNeed(project.id)}
                  className={`text-left p-5 rounded-2xl border-2 transition-all cursor-pointer ${selectedNeed === project.id
                    ? 'border-[#2AA7D3] bg-gradient-to-br from-[#EEF8FF] to-white shadow-lg shadow-[#2AA7D3]/10'
                    : 'border-slate-200/60 hover:border-slate-300 hover:bg-white/50'
                    }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`text-sm font-extrabold ${selectedNeed === project.id ? 'text-[#2AA7D3]' : 'text-slate-800'}`}>
                        {project.name}
                      </p>
                      <p className="text-xs text-slate-400 font-bold mt-1 flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {project.duration}
                      </p>
                    </div>
                    {selectedNeed === project.id && (
                      <motion.div layoutId="active-pill" className="bg-[#2AA7D3] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                        Active
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* ========== IMPROVED TIMELINE PANEL ========== */}
            <div className="lg:col-span-8 bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 flex flex-col shadow-inner relative overflow-hidden">
              {/* Decorative background blurs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#2AA7D3]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-slate-200/65 pb-4 mb-6 gap-4 relative z-10">
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Workflow className="h-5 w-5 text-[#2AA7D3]" />
                    {currentProject.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-semibold mt-0.5">{currentProject.desc}</p>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <Calendar className="h-4 w-4 text-[#2AA7D3]" />
                  <span className="text-xs font-extrabold text-slate-800">{currentProject.duration} Total</span>
                </div>
              </div>

              {/* Curved Timeline with SVG Path */}
              <div className="relative py-4 flex-1">

                {/* Timeline Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                  <AnimatePresence mode="wait">
                    {currentProject.timeline.map((item, idx) => {
                      const color = phaseColors[idx] || phaseColors[0];
                      const IconComponent = color.icon;
                      const isLast = idx === currentProject.timeline.length - 1;

                      return (
                        <motion.div
                          key={item.phase}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.4, delay: idx * 0.12 }}
                          className="flex flex-col items-center text-center group"
                        >
                          {/* Node Circle with icon */}
                          <div className="relative mb-3">
                            <div className={`
                      w-14 h-14 rounded-full border-4 ${color.border} ${color.bg} 
                      flex items-center justify-center shadow-lg group-hover:scale-110 
                      transition-transform duration-300 group-hover:shadow-xl
                      relative z-10
                    `}>
                              <IconComponent className={`h-6 w-6 ${color.text}`} />
                            </div>
                            {/* Pulsing ring */}
                            <div className="absolute inset-0 rounded-full border-2 border-[#2AA7D3]/30 animate-ping opacity-30" />
                          </div>

                          {/* Phase info */}
                          <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-slate-200/60 shadow-sm w-full hover:shadow-md transition-shadow">
                            <p className="text-sm font-extrabold text-slate-800 tracking-tight">
                              {item.phase}
                            </p>
                            <span className="inline-block bg-slate-900 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mt-1 tracking-wider">
                              {item.weeks} {item.weeks === 1 ? 'Week' : 'Weeks'}
                            </span>
                            <p className="text-xs text-slate-600 font-semibold mt-2 leading-snug hidden sm:block">
                              {item.description}
                            </p>
                          </div>

                          {/* Connector dot (visible on mobile) */}
                          {!isLast && (
                            <div className="md:hidden w-6 h-0.5 bg-slate-300 my-1" />
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200/60 pt-4 mt-6 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <GitBranch className="h-4 w-4" /> Operational Handover Timeline
                </span>
                <span className="text-xs text-emerald-500 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> Continuous Support Included
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid Capabilities */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              icon: Bot,
              title: 'Agentic Integration',
              desc: 'Connect your customer-facing channels, CRM endpoints, database storages, and messaging platforms directly into centralized agent clusters.',
              gradient: 'from-blue-500 to-cyan-400',
              bg: 'bg-blue-50',
            },
            {
              icon: Cpu,
              title: 'Decision Logic',
              desc: 'Let AI evaluate intent, parse parameters, route tickets, and trigger automated tasks conditionally based on live context.',
              gradient: 'from-purple-500 to-pink-500',
              bg: 'bg-purple-50',
            },
            {
              icon: Layers,
              title: 'Zero Friction',
              desc: 'Scale operation flows with full confidence, complete visibility logs, automatic retry fallback paths, and secure zero-trust auth integrations.',
              gradient: 'from-emerald-500 to-teal-400',
              bg: 'bg-emerald-50',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="bg-white/80 backdrop-blur-sm border border-white/50 p-8 rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`h-14 w-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`h-6 w-6 text-[#2AA7D3]`} />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">{item.desc}</p>
              <div className="mt-6 inline-flex items-center text-xs font-bold text-[#2AA7D3] gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats & Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2AA7D3]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold text-[#2AA7D3] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">Why Neuronexa</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-4 mb-6 tracking-tight">
                Why build autonomous <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-blue-400">workflows?</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                Our autonomous workflows are designed to handle complex business logic, ensuring zero downtime and maximum efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Time Savings', value: '95%', icon: Zap },
                  { label: 'System Uptime', value: '99.9%', icon: ShieldCheck },
                  { label: 'CRM Sync', value: 'Instant', icon: GitBranch },
                  { label: 'Security', value: 'Zero-Trust', icon: CheckCircle2 },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                    <stat.icon className="h-5 w-5 text-[#2AA7D3] mx-auto mb-1" />
                    <p className="text-xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-center">
              <h4 className="text-lg font-extrabold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#2AA7D3]" /> Enterprise-Grade Benefits
              </h4>
              <div className="space-y-4">
                {[
                  'Replace repetitive manual copy-pasting actions with instant automations.',
                  'Workflows operate continuously 24/7 without delays or processing fatigue.',
                  'Directly sync captured client conversation data back into Salesforce or HubSpot.',
                  'Every workflow incorporates zero-trust encryption parameters directly.',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-sm text-slate-300 font-semibold"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#2AA7D3] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-white border border-slate-200 rounded-[32px] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#2AA7D3]/10 to-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="h-16 w-16 rounded-full bg-[#E8F4FA] flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-[#2AA7D3] fill-[#2AA7D3]/20" />
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Ready to streamline your <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-purple-500">operational stack?</span>
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-semibold mb-8 max-w-lg mx-auto">
              Let's discuss how we can map your custom business processes and deploy automated workflow agents.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/9110435020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2AA7D3] hover:bg-[#1890B8] text-white px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-[#2AA7D3]/30 hover:scale-105 cursor-pointer shadow-md"
              >
                Consult with our architects <ArrowRight className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider transition-all hover:bg-slate-50 cursor-pointer">
                View Case Studies
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-bold">
              <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> 5+ Enterprises Deployed</span>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};


export default Streamline;