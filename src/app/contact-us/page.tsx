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
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0 fill-[#0F2137]">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    url: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0 fill-[#D97757]">
        <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
      </svg>
    ),
  },
  {
    name: 'Gemini',
    url: `https://www.google.com/search?udm=50&q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0">
        <defs>
          <linearGradient id="hk-gemini" x1="0" y1="20" x2="24" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FBBC05" />
            <stop offset="0.35" stopColor="#34A853" />
            <stop offset="0.7" stopColor="#4285F4" />
            <stop offset="1" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <path fill="url(#hk-gemini)" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
      </svg>
    ),
  },
  {
    name: 'Perplexity',
    url: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] shrink-0 fill-[#20808D]">
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
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
    subtitle: 'Agents & Voice AI',
    tag: 'AI Voice',
    image: '/assets/contact/ai-agents-voice.jpg',
    link: '/services/agents-voice/',
  },
  {
    subtitle: 'Workflows Automations',
    tag: 'AI Automations',
    image: '/assets/contact/automation-workflows.jpg',
    link: '/services/smart-workflows/',
  },
  {
    subtitle: 'Business Tools',
    tag: 'Tools & Dashboards',
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
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#25D366]/60 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors duration-300">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Chat on WhatsApp
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0F2137] truncate mt-0.5">
                  +91 91104 35020
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all shrink-0">
              <span className="hidden sm:inline">Start Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Symmetrical Phone & Email Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:+919110435020"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0F6F94]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 group-hover:bg-[#0F2137] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#0F6F94] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Call Us
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0F2137] truncate mt-0.5">
                    +91 91104 35020
                  </p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F6F94] group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>

            <a
              href="mailto:info@neuronexalabs.com"
              className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-teal/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-colors duration-300">
                  <Mail className="w-4 h-4 text-brand-teal group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Email Us
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0F2137] truncate mt-0.5">
                    info@neuronexalabs.com
                  </p>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-all shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* ─── Core Solutions Grid (Redesigned: Simple & Professional) ─── */}
        <section className="mt-10 pt-8 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm sm:text-base font-bold text-[#0F2137]">
              Explore Business Solutions
            </h2>
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
                  className="group flex flex-col bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-brand-teal/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Visual container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0B1523] via-[#0F2137] to-[#142A45] overflow-hidden flex items-center justify-center p-3">
                    <img
                      src={service.image}
                      alt={service.subtitle}
                      className="w-full h-full object-contain opacity-90 group-hover:scale-108 group-hover:opacity-100 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Clean text body */}
                  <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between items-center text-center bg-white">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal block mb-1">
                        {service.tag}
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-bold text-[#0F2137] group-hover:text-[#0F6F94] transition-colors leading-snug">
                        {service.subtitle}
                      </h3>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-100 w-full flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-brand-teal transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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

