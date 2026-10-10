"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  User,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

// Detailed prompt asking AI models about NeuroNexa Labs citing public pages
const aiPrompt = `What does NeuroNexa Labs (neuronexalabs.com) do for businesses, and when is it the right AI automation and engineering partner? Cite neuronexalabs.com, neuronexalabs.com/services/agents-voice, neuronexalabs.com/services/smart-workflows, neuronexalabs.com/services/business-tools and neuronexalabs.com/services/web-mobile. Cover AI voice agents for inbound and outbound calling, workflow automation, custom enterprise software and dashboards, products built (including NexaDhi, Vedims LMS, HRMS, Medblik), which industries it serves (Real Estate, Healthcare, Education, Hospitality, Enterprises), which countries it serves (India, US, Europe, the Gulf, and Global Remote clients), and how fast a business can get started. Note that pricing is on request.`;

const aiAssistants = [
  {
    name: 'ChatGPT',
    url: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.5994 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4038-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.4072 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219zm1.263-2.1974l3.1077-1.795 3.1077 1.795v3.5852l-3.1077 1.795-3.1077-1.795z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    url: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#C2410C]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h3.2l-2.26 2.26a1.5 1.5 0 0 0 2.12 2.12L9.82 15.62V19.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3.88l2.26 2.26a1.5 1.5 0 0 0 2.12-2.12L15 13.5h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H15l2.26-2.26a1.5 1.5 0 0 0-2.12-2.12L12.82 8.38V4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3.88L7.56 6.12a1.5 1.5 0 0 0-2.12 2.12L7.7 10.5H4.5z" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    url: `https://www.google.com/search?udm=50&q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#1A73E8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    url: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0 text-[#0D9488]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a1 1 0 0 1 1 1v4.06l3.58-2.07a1 1 0 1 1 1 1.74L14 8.87v6.26l3.58 2.07a1 1 0 1 1-1 1.74L13 16.94V21a1 1 0 1 1-2 0v-4.06l-3.58 2.07a1 1 0 1 1-1-1.74L10 15.13V8.87L6.42 6.8a1 1 0 1 1 1-1.74L11 7.13V3a1 1 0 0 1 1-1z" />
      </svg>
    ),
  },
];

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.68-1.2 1.25-1.68 1.33-.46.07-1.04.1-3.04-.73-2.56-1.06-4.2-3.66-4.33-3.83-.13-.17-1.03-1.37-1.03-2.61 0-1.24.65-1.85.88-2.1.23-.25.5-.32.67-.32.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.74 1.8.8 1.93.07.13.11.29.02.46-.09.18-.14.29-.28.45-.14.16-.29.35-.42.47-.14.14-.29.29-.12.58.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.41.29.14.46.12.63-.08.17-.2.73-.85.92-1.15.2-.29.39-.24.66-.14.27.1 1.72.81 2.02.96.29.15.49.22.56.34.07.12.07.7-.17 1.38z" />
    </svg>
  );
}

const services = [
  {
    subtitle: 'Agents & Voice',
    tag: 'Voice AI & Inbound',
    image: '/assets/contact/ai-agents-voice.jpg',
    link: '/services/agents-voice/',
  },
  {
    subtitle: 'Smart Workflows',
    tag: 'Custom Automations',
    image: '/assets/contact/automation-workflows.jpg',
    link: '/services/smart-workflows/',
  },
  {
    subtitle: 'Business Tools',
    tag: 'Portals & Dashboards',
    image: '/assets/contact/software-business.jpg',
    link: '/services/business-tools/',
  },
  {
    subtitle: 'Web & Mobile',
    tag: 'Digital Products',
    image: '/assets/contact/digital-products.jpg',
    link: '/services/web-mobile/',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isEmail = formData.email.includes('@');
      const response = await fetch("https://formsubmit.co/ajax/info@neuronexalabs.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Name": formData.name,
          "Contact (Email / Phone)": formData.email,
          ...(isEmail ? { email: formData.email, _replyto: formData.email } : {}),
          "Message": formData.message || "Visiting Card QR Code scan - requested contact.",
          "Lead Source": "Visiting Card QR Code (/contact-us)",
          "Submission Time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          _subject: `Visiting Card Inquiry: ${formData.name} | Neuronexa Labs`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success !== "false") {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 6000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Message delivery failed. Please reach us directly on WhatsApp at +91 91104 35020.");
        setIsSubmitting(false);
      }
    } catch {
      alert("Network error. Please reach us on WhatsApp at +91 91104 35020 or email info@neuronexalabs.com.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-24 pb-6 sm:pt-28 sm:pb-8 md:pt-32 md:pb-10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-teal/[0.05] blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-navy/[0.04] blur-[80px]" />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2137] tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-3"
          >
            We Build <span className="text-brand-teal">Intelligent</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed"
          >
            AI-powered automation, custom software, and digital products that help businesses scale faster.
          </motion.p>
        </div>
      </section>

      {/* ─── Main Content Container ─── */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">

        {/* ─── Ask an AI Widget (Top title/description, bottom chips) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-6"
        >
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-sm transition-shadow">
            {/* Top: Title & Description */}
            <div className="mb-3.5">
              <h3 className="text-sm sm:text-base font-bold text-[#0F2137] tracking-tight">
                Ask an AI about NeuroNexa Labs
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 mt-1 leading-relaxed">
                Open your assistant with the question already typed. It answers from our public pages, not our marketing copy.
              </p>
            </div>

            {/* Bottom: Provider Chips */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5">
              {aiAssistants.map(ai => (
                <a
                  key={ai.name}
                  href={ai.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 px-3.5 py-2 sm:py-1.5 rounded-full bg-white border border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/80 shadow-xs hover:shadow-sm text-xs sm:text-[13px] font-semibold text-slate-700 transition-all duration-200 active:scale-[0.98]"
                >
                  {ai.icon}
                  <span>{ai.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Form Card ─── */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-[0_4px_24px_rgba(15,33,55,0.06)] relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-3.5 text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2137] mb-1">Message Sent!</h3>
                <p className="text-sm text-slate-500 max-w-xs">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Your Name
                  </label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 sm:py-3 focus-within:bg-white focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/15 transition-all">
                    <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-sm text-[#0F2137] font-medium placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Email or Phone
                  </label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 sm:py-3 focus-within:bg-white focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/15 transition-all">
                    <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input
                      type="text"
                      placeholder="Email or phone number"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-sm text-[#0F2137] font-medium placeholder-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Message <span className="text-slate-400 normal-case font-normal">(optional)</span>
                  </label>
                  <div className="flex items-start bg-[#F8FAFC] border border-slate-200 rounded-xl px-3.5 py-2.5 sm:py-3 focus-within:bg-white focus-within:border-brand-teal focus-within:ring-2 focus-within:ring-brand-teal/15 transition-all">
                    <MessageSquare className="w-4 h-4 text-slate-400 mr-2.5 mt-0.5 shrink-0" />
                    <textarea
                      placeholder="Tell us what you're looking for..."
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-sm text-[#0F2137] font-medium placeholder-slate-400 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy hover:bg-[#0F6F94] text-white font-bold text-xs sm:text-sm uppercase tracking-widest py-3 sm:py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>

                <p className="text-[11px] text-center text-slate-400 font-medium pt-1">
                  ✓ We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>
        </motion.div>

        {/* ─── Direct Reach / Quick Actions ─── */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 space-y-3"
        >
          {/* Subtle clean divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px bg-slate-200/80 flex-1" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Or reach us directly
            </span>
            <div className="h-px bg-slate-200/80 flex-1" />
          </div>

          {/* WhatsApp Primary CTA */}
          <a
            href="https://wa.me/919110435020?text=Hi%20Neuronexa%20Labs!%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#20be5a] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all duration-300 active:scale-[0.99]"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp (+91 91104 35020)</span>
          </a>

          {/* Symmetrical Phone & Email Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+919110435020"
              className="flex items-center gap-3.5 p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-teal/40 hover:shadow-sm transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-100/70 transition-colors">
                <Phone className="w-4 h-4 text-[#0F6F94]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                <p className="text-xs sm:text-sm font-semibold text-[#0F2137] truncate">+91 91104 35020</p>
              </div>
            </a>

            <a
              href="mailto:info@neuronexalabs.com"
              className="flex items-center gap-3.5 p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-teal/40 hover:shadow-sm transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-100/70 transition-colors">
                <Mail className="w-4 h-4 text-[#0F6F94]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                <p className="text-xs sm:text-sm font-semibold text-[#0F2137] truncate">info@neuronexalabs.com</p>
              </div>
            </a>
          </div>

          {/* Location Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium pt-1">
            <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>India · Serving Global Remote Clients</span>
          </div>
        </motion.div>

        {/* ─── Core Solutions Grid (Redesigned: Simple & Professional) ─── */}
        <section className="mt-10 pt-8 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Our Core Pillars
              </span>
              <h2 className="text-sm sm:text-base font-bold text-[#0F2137]">
                End-to-End Business Solutions
              </h2>
            </div>
            <Link
              href="/services/"
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy hover:text-brand-teal transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
            {services.map((service, i) => (
              <motion.div
                key={service.subtitle}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <Link
                  href={service.link}
                  className="group flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-brand-teal/40 hover:shadow-md transition-all duration-300"
                >
                  {/* Visual container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0F2137] to-[#162A45] overflow-hidden flex items-center justify-center p-2.5">
                    <img
                      src={service.image}
                      alt={service.subtitle}
                      className="w-full h-full object-contain opacity-85 group-hover:scale-108 group-hover:opacity-100 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Clean text body */}
                  <div className="p-2.5 sm:p-3 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-teal block mb-0.5 truncate">
                        {service.tag}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-bold text-[#0F2137] group-hover:text-[#0F6F94] transition-colors leading-snug">
                        {service.subtitle}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}

