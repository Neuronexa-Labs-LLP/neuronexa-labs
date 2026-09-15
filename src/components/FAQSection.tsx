import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Sparkles, Linkedin, Instagram } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
  tag?: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'How does the AI Voice Assistant actually sound? Will callers know it is AI?',
    answer: 'It sounds warm, natural, and friendly. Powered by our instant-response voice engine and natural generation, it speaks with natural human cadence without robotic lag. Most callers simply feel they are speaking with your best front-desk receptionist.',
    tag: 'Voice Quality'
  },
  {
    question: 'Does it handle both incoming customer calls and outgoing calls?',
    answer: 'Yes, both! It answers incoming calls 24/7 to answer customer questions, share prices, and book appointments. It also makes outgoing calls to instantly follow up with new leads, confirm bookings, and remind clients about upcoming visits.',
    tag: 'Call Types'
  },
  {
    question: 'What happens if 50 or 100 people call at the exact same minute?',
    answer: 'No one ever hears a busy signal or waits on hold. The assistant answers every single call at the exact same time. Whether 1 person calls or 1,000 people call at once, each person gets an immediate answer.',
    tag: 'Concurrent Calls'
  },
  {
    question: 'Can it send WhatsApp messages and book Google Calendar slots?',
    answer: 'Yes! Right after or during the call, it can text the customer a brochure, payment link, or Google Maps location on WhatsApp. It also checks your Google Calendar or Outlook in real time so appointments are booked without any double-booking.',
    tag: 'Integrations'
  },
  {
    question: 'Can a human team member take over a call if needed?',
    answer: 'Yes, absolutely. If a customer asks to speak with a human or has a special emergency request, the assistant can immediately transfer the live call to your phone or notify your team via WhatsApp.',
    tag: 'Human Transfer'
  }
];

export interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  title = "Frequently Asked Questions", 
  faqs = defaultFaqs 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50/60 via-white to-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mx-auto max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            {title}
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#2AA7D3]/60 shadow-sm shadow-[#0F6F94]/5'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#0F6F94] text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                      {faq.tag && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-[10px] font-mono font-semibold uppercase text-[#0F6F94] bg-sky-50 px-2 py-0.5 rounded border border-sky-200/60">
                            {faq.tag}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg border border-slate-800">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Stay up to date with NeuroNexa Labs
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Follow us on our social channels for the latest updates, news, and insights.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            <a
              href="https://www.linkedin.com/company/neuronexa-labs/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-[#0F6F94] transition-all border border-white/10 shadow-sm"
            >
              <Linkedin className="w-5 h-5 text-[#2AA7D3] group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/neuronexa_labs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-pink-600 transition-all border border-white/10 shadow-sm"
            >
              <Instagram className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
