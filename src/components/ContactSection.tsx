"use client";

import React, { useState } from 'react';
import { ArrowRight, User, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@neuronexalabs.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Enterprise Inquiry | Neuronexa Labs",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success !== "false") {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Submission rejected by server:", result);
        alert("Message delivery failed. Please contact us directly on WhatsApp at +91 91104 35020.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error during form submission:", error);
      alert("Network error. Please reach us directly on WhatsApp at +91 91104 35020 or email info@neuronexalabs.com.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-white overflow-hidden flex items-center justify-center border-t border-slate-100/80">
      {/* Blur Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-navy/5 blur-[120px] z-0" />
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-200/5 blur-[90px] z-0" />
      </div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">

        <div className="flex-1 w-full relative">
          <div>
            <div className="mb-4">
              <div
                className="inline-flex items-center gap-2 bg-[#F4F9FC] border border-brand-navy/20 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-navy"></span>
                Get in Touch
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2137] mb-6 tracking-tighter leading-none uppercase">
              Let's <span className="text-brand-navy">Build.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-md mb-8 leading-relaxed">
              Ready to deploy an intelligent AI Voice Assistant or custom workflow? Speak directly with our team — we reply within 24 hrs.
            </p>

            <div className="space-y-3 text-slate-600 text-xs sm:text-sm max-w-md bg-[#F4F9FC] p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm overflow-hidden font-sans">
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                <span className="text-slate-500 font-mono text-xs">DIRECT LINE:</span>
                <a href="https://wa.me/9110435020" target="_blank" rel="noopener noreferrer" className="text-[#0F6F94] hover:text-brand-navy font-bold transition-colors">
                  +91 91104 35020
                </a>
              </div>
              <div className="flex justify-between items-center border-b border-slate-200/60 pb-2 gap-2">
                <span className="text-slate-500 font-mono text-xs shrink-0">EMAIL:</span>
                <a href="mailto:info@neuronexalabs.com" className="text-[#1E3A5F] hover:text-brand-navy font-bold truncate transition-colors">
                  info@neuronexalabs.com
                </a>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-slate-500 font-mono text-xs">LOCATION:</span>
                <span className="text-slate-700 font-semibold">India · Global Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full text-left">
          <div
            className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-navy rounded-full blur-[120px] opacity-[0.06]"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 bg-emerald-50 flex items-center justify-center mb-6 text-emerald-600 text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#0F2137] mb-2">Thank you! Message Received</h3>
                <p className="text-slate-600 font-medium max-w-sm">A real member of our engineering team will review your requirements and we will get back to you within 24 hrs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block px-1">Your Name / Organization</label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-brand-navy focus-within:ring-2 focus-within:ring-brand-navy/15 transition-all duration-300">
                    <User className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter your Name / Organization"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block px-1">Work Email or Phone</label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-brand-navy focus-within:ring-2 focus-within:ring-brand-navy/15 transition-all duration-300">
                    <Mail className="w-4 h-4 text-slate-500 mr-3 shrink-0" />
                    <input
                      type="text"
                      placeholder="Enter email address"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block px-1">Message/Enquiry </label>
                  <div className="flex items-start bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-brand-navy focus-within:ring-2 focus-within:ring-brand-navy/15 transition-all duration-300">
                    <MessageSquare className="w-4 h-4 text-slate-500 mr-3 mt-0.5 shrink-0" />
                    <textarea
                      placeholder="Tell us about your business, expected call volume, or workflows you'd like to automate..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80 resize-none"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-brand-navy hover:bg-[#0F6F94] text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center group shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-3 font-medium">
                    ✓ No automated chatbots · Speak directly with our founding engineers
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

