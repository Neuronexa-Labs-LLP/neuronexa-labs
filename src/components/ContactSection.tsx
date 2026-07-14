import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, User, Mail, MessageSquare } from 'lucide-react';

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
        console.error("Transmission rejected by server:", result);
        alert("Transmission failed. Please try again later.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error during transmission:", error);
      alert("Network error. Could not establish uplink to transmission server.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 md:py-16 bg-white overflow-hidden flex items-center justify-center border-t border-slate-100/80">
      {/* Blur Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#2AA7D3]/5 blur-[120px] z-0" />
        <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-200/5 blur-[90px] z-0" />
      </div>

      <div className="container mx-auto px-5 max-w-6xl relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-24 items-center">

        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-[#F4F9FC] border border-[#2AA7D3]/20 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#2AA7D3] animate-pulse"></span>
                Connect
              </motion.div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2137] mb-6 tracking-tighter leading-none uppercase">
              Let's <span className="text-[#2AA7D3]">Build.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium max-w-md mb-10 leading-relaxed">
              Ready to deploy cutting-edge automation and AI into your enterprise architecture? Initiate the sequence.
            </p>

            <div className="space-y-4 text-slate-500 font-mono text-xs sm:text-sm max-w-md bg-[#F4F9FC] p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <p className="flex items-center text-[#2AA7D3] font-semibold"><Terminal className="w-4 h-4 mr-3" /> SYSTEM_READY</p>
              <p className="flex justify-between border-b border-slate-200/60 pb-2"><span>IP:</span> <span className="text-[#1E3A5F] font-bold">India / Remote</span></p>
              <p className="flex justify-between border-b border-slate-200/60 pb-2 gap-2"><span className="shrink-0">COMMS:</span> <span className="text-[#1E3A5F] font-bold truncate">info@neuronexalabs.com</span></p>
              <p className="flex justify-between pb-1"><span>UPLINK:</span> <span className="text-[#2AA7D3] font-bold">+91 91104 35020</span></p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[32px] border border-slate-200/60 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2AA7D3] rounded-full blur-[120px] opacity-[0.06]"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full border-2 border-[#2AA7D3] flex items-center justify-center mb-6 text-[#2AA7D3] text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#0F2137] mb-2">Transmission Successful</h3>
                <p className="text-slate-500 font-medium">Our engineers will respond to your query shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">Your Designation / Name</label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-[#2AA7D3] focus-within:ring-2 focus-within:ring-[#2AA7D3]/15 transition-all duration-300">
                    <User className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                    <input
                      type="text"
                      placeholder="e.g. राजेश कुमार / Project Director"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">Corporate Email</label>
                  <div className="flex items-center bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-[#2AA7D3] focus-within:ring-2 focus-within:ring-[#2AA7D3]/15 transition-all duration-300">
                    <Mail className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
                    <input
                      type="email"
                      placeholder="e.g. rajesh@enterprise.com"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-1">Project Description</label>
                  <div className="flex items-start bg-[#F8FAFC] border border-slate-200/60 rounded-xl px-4 py-3 shadow-sm focus-within:border-[#2AA7D3] focus-within:ring-2 focus-within:ring-[#2AA7D3]/15 transition-all duration-300">
                    <MessageSquare className="w-4 h-4 text-slate-400 mr-3 mt-0.5 shrink-0" />
                    <textarea
                      placeholder="Describe your workflow automation or agentic AI needs..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#0F2137] font-semibold placeholder-slate-400/80 resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#2AA7D3] hover:bg-[#1E3A5F] text-white font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center group shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? "Processing..." : "Transmit"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;