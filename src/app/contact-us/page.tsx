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
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    subtitle: 'Agents & Voice',
    image: '/assets/contact/ai-agents-voice.jpg',
    link: '/services/agents-voice/',
  },
  {
    subtitle: 'Smart Workflows',
    image: '/assets/contact/automation-workflows.jpg',
    link: '/services/smart-workflows/',
  },
  {
    subtitle: 'Business Tools',
    image: '/assets/contact/software-business.jpg',
    link: '/services/business-tools/',
  },
  {
    subtitle: 'Web & Mobile',
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



      {/* ─── Contact Form & Direct Reach ─── */}
      <section className="max-w-xl mx-auto px-4 sm:px-6 pb-16">
        {/* Form Card */}
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

        {/* Direct Reach / Quick Actions */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="h-px bg-slate-200 flex-1" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Or reach us directly
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          {/* WhatsApp Primary CTA */}
          <a
            href="https://wa.me/919110435020?text=Hi%20Neuronexa%20Labs!%20I%20scanned%20your%20visiting%20card%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all duration-300 active:scale-[0.99]"
          >
            <MessageSquare className="w-4 h-4" />
            Chat on WhatsApp (+91 91104 35020)
          </a>

          {/* Quick Contact: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="tel:+919110435020"
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-teal/40 hover:shadow-sm transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal/20 transition-colors">
                <Phone className="w-4 h-4 text-brand-teal" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Call Us</p>
                <p className="text-xs sm:text-sm font-semibold text-[#0F2137]">+91 91104 35020</p>
              </div>
            </a>

            <a
              href="mailto:info@neuronexalabs.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-brand-teal/40 hover:shadow-sm transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal/20 transition-colors">
                <Mail className="w-4 h-4 text-brand-teal" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Us</p>
                <p className="text-xs sm:text-sm font-semibold text-[#0F2137]">info@neuronexalabs.com</p>
              </div>
            </a>
          </div>

          {/* Location note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>India · Serving Global Remote Clients</span>
          </div>
        </motion.div>
        {/* ─── Services Grid ─── */}
        <section className="max-w-3xl mx-auto py-5 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
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
                  className="group relative block rounded-xl sm:rounded-2xl overflow-hidden bg-[#0F2137] aspect-[1/1] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-slate-800/20"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.subtitle}
                    className="absolute inset-0 w-full h-full object-contain opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2137]/95 via-[#0F2137]/45 to-transparent" />
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-2.5 sm:p-3.5">
                    <h3 className="text-brand-teal font-semibold text-[10px] sm:text-[11px] md:text-xs font-medium mt-0.5 group-hover:text-white transition-colors">
                      {service.subtitle}
                    </h3>
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
