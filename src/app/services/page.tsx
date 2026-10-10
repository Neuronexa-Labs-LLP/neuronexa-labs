import Link from 'next/link';
import { Mic, ArrowRight } from 'lucide-react';
import ContactSection from '../../components/ContactSection';
import { servicesData } from '../../data/servicesData';

export const metadata = {
  title: 'AI Solutions & Custom Engineering Services | Neuronexa Labs',
  description: 'Explore Neuronexa Labs\' suite of AI automation, voice assistants, custom web applications, and digital growth services designed to scale your business.',
  alternates: {
    canonical: 'https://neuronexalabs.com/services/',
  },
};

export default function ServicesHub() {
  const categories = Array.from(new Set(servicesData.map(s => s.category)));

  return (
    <>
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/10 border border-brand-navy/20 text-[#0F6F94] text-xs font-bold uppercase tracking-wider mb-4">
              End-to-End Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Business Solutions
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Explore our core business solutions and engineering capabilities—designed to automate operations, empower teams, and drive measurable revenue growth.
            </p>
          </div>

          <div className="space-y-20">
            {categories.map(category => {
              const categoryServices = servicesData.filter(s => s.category === category);
              const isEndToEnd = category === 'End-to-End Business Solutions';
              return (
                <section key={category}>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 gap-2">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {category}
                      </h2>
                      {isEndToEnd && (
                        <p className="text-sm text-slate-500 mt-1">
                          Our four core pillars for modern enterprise transformation.
                        </p>
                      )}
                    </div>
                  </div>
                  <div className={`grid ${isEndToEnd ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
                    {categoryServices.map(service => (
                      <Link 
                        key={service.slug}
                        href={`/services/${service.slug}/`}
                        className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className={`${isEndToEnd ? 'h-44' : 'h-48'} overflow-hidden relative bg-slate-900`}>
                          <img 
                            src={service.heroImage} 
                            alt={service.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                          {isEndToEnd && (
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F2137]/80 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-brand-teal border border-brand-teal/20">
                              Core Pillar
                            </span>
                          )}
                        </div>
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#0F6F94] transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                            {service.shortDesc}
                          </p>
                          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy mt-auto group-hover:text-brand-teal transition-colors">
                            Explore Solution
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Flagship Voice Product Banner */}
            <section>
              <div className="bg-gradient-to-br from-[#0F2137] to-[#0A1626] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-navy/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/20 border border-brand-navy/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Mic className="w-3.5 h-3.5" />
                    Flagship Product
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Enterprise AI Voice Assistants
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    Deploy human-sounding AI voice agents in minutes. Handle inbound support 24/7, qualify outbound leads, and sync everything directly to your CRM with subsecond latency.
                  </p>
                  <Link 
                    href="/services/ai-voice-agent/"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-navy hover:bg-[#228cb2] text-white font-bold transition-colors"
                  >
                    Explore Voice AI
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

        </div>
      </main>

      <ContactSection />
    </>
  );
}
