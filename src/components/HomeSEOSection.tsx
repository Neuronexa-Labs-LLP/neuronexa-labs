import React from 'react';
import { Cpu, Bot, Workflow, ShieldCheck, Zap, Layers, BarChart3, Database } from 'lucide-react';

export default function HomeSEOSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-200/60 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Empowering Enterprises with Next-Generation{' '}
            <span className="bg-gradient-to-r from-brand-navy via-[#2AA7D3] to-brand-navy bg-clip-text text-transparent">
              AI Automation & Voice Intelligence
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-semibold mt-4 leading-relaxed">
            Discover how Neuronexa Labs designs, deploys, and scales enterprise-grade artificial intelligence frameworks tailored for modern business growth.
          </p>
        </div>

        {/* 4 Pillars SEO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
              Autonomous Voice AI Agents & Conversational Intelligence
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-4">
              Modern enterprises require continuous, low-latency customer engagement. Our custom <strong className="text-slate-900 font-bold">Voice AI Agents</strong> operate 24/7 across inbound and outbound channels, executing natural conversational flows, qualifying inbound sales leads, resolving support queries, and directly booking calendar appointments into your CRM.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Sub-300ms Latency</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Multi-Lingual Support</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Inbound & Outbound</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
              End-to-End AI Workflow Automation & System Integration
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-4">
              We eliminate operational bottlenecks by constructing robust <strong className="text-slate-900 font-bold">automated AI pipelines</strong>. By linking your core CRM platforms (Salesforce, HubSpot, Zoho), communication tools (WhatsApp, Email, Twilio), and internal databases, our orchestration engines process data, trigger actions, and eliminate manual data entry.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">CRM Integration</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Webhook Orchestration</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Zero Manual Data Entry</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
              Flagship Software Innovations & Proprietary Platforms
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-4">
              Beyond standalone automation scripts, Neuronexa Labs engineers full-scale SaaS ecosystems such as <strong className="text-slate-900 font-bold">NexaDhi</strong> — an AI-powered talent assessment and engineering learning platform featuring in-browser code sandboxes, AST code synthesis, and multi-signal biometric anti-cheat engines.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">NexaDhi Skill Intelligence</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Vedims LMS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">Enterprise HRMS</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all">

            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
              Enterprise Data Security & High-Performance Cloud Architecture
            </h3>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium mb-4">
              Security is built into every layer of our software architecture. We implement stringent <strong className="text-slate-900 font-bold">data protection standards</strong>, end-to-end payload encryption, multi-tenant isolation, and scalable cloud deployment frameworks (AWS, GCP, Vercel) designed for maximum reliability and uptime.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">End-to-End Encryption</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">SOC2 & Privacy Compliant</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">99.9% Uptime Guarantee</span>
            </div>
          </div>
        </div>

        {/* Detailed Indexing Paragraph Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 text-slate-600 text-xs md:text-sm leading-relaxed space-y-4 shadow-sm">
          <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            Why Leading Businesses Choose Neuronexa Labs for AI Transformation
          </h4>
          <p>
            The artificial intelligence landscape is rapidly shifting from passive text prompts to active, autonomous agents capable of performing complex multi-step tasks. At Neuronexa Labs, we combine deep software engineering expertise with cutting-edge multi-LLM orchestration to deliver high-ROI digital transformation.
          </p>
          <p>
            Whether your goal is to automate customer phone calls with voice AI, streamline internal HR processes, evaluate technical candidates with AI assessment tools, or build a scalable custom application from scratch, our team provides the complete strategy, architecture, and continuous solution support required to achieve your objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
