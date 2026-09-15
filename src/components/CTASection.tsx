import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9110435020', '_blank');
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 via-white to-sky-50/40 p-8 sm:p-12 md:p-16 text-center shadow-[0_8px_30px_rgba(15,111,148,0.06)]"
        >
          {/* Subtle Ambient Background Accents */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#2AA7D3]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#0F6F94]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Top Pill Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2AA7D3]" />
                Ready to automate?
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Instant Voice Response
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-4">
              Ready to automate your calls?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto mb-8">
              Join growing businesses using our AI Voice Assistant to connect with customers, handle bookings, and eliminate hours of manual work.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">


              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm sm:text-base transition-all shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Talk with an Engineer</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
