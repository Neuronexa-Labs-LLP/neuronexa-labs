import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // NOTE: Generate a free access key at https://web3forms.com/ and paste it replacing the string below
          access_key: "2bcc34ca-a718-47fd-bc50-291be571c96b",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Enterprise Inquiry | Neuronexa Labs",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Transmission rejected by server:", result);
        alert("Transmission failed. Please verify the Web3Forms access key is correctly configured.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Network error during transmission:", error);
      alert("Network error. Could not establish uplink to transmission server.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-black border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-[#001824] to-[#000000]"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 flex flex-col md:flex-row gap-16 lg:gap-32 items-center">

        <div className="flex-1 w-full relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
              Let's <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A7E1] to-white">Build.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md mb-12">
              Ready to deploy cutting-edge automation and AI into your enterprise architecture? Initiate the sequence.
            </p>

            <div className="space-y-6 text-gray-500 font-mono text-sm max-w-md bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
              <p className="flex items-center text-[#00A7E1]"><Terminal className="w-4 h-4 mr-3" /> SYSTEM_READY</p>
              <p className="flex justify-between border-b border-white/10 pb-2"><span>IP:</span> <span className="text-white">India / Remote</span></p>
              <p className="flex justify-between border-b border-white/10 pb-2"><span>COMMS:</span> <span className="text-white">info@neuronexalabs.com</span></p>
              <p className="flex justify-between pb-2"><span>UPLINK:</span> <span className="text-[#00A7E1]">+91 91104 35020</span></p>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-[#00121B] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A7E1] rounded-full blur-[100px] opacity-10"></div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full border-2 border-[#00A7E1] flex items-center justify-center mb-6 text-[#00A7E1]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Transmission Successful</h3>
                <p className="text-gray-400">Our engineers will respond to your query shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <input
                    type="text"
                    placeholder="Your Designation / Name"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00A7E1] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Corporate Email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00A7E1] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Project Parameters"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00A7E1] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  disabled={isSubmitting}
                  className="w-full bg-[#00A7E1] text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all flex items-center justify-center group"
                >
                  {isSubmitting ? "Processing..." : "Transmit"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />}
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