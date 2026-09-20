import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, Zap, ArrowUpRight, ArrowRight } from 'lucide-react';
import ContactSection from '../../../components/ContactSection';
import FAQSection from '../../../components/FAQSection';
import { servicesData } from '../../../data/servicesData';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Neuronexa Labs`,
    description: service.shortDesc,
    alternates: {
      canonical: `https://neuronexalabs.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.shortDesc,
    "provider": {
      "@type": "Organization",
      "name": "Neuronexa Labs",
      "url": "https://neuronexalabs.com"
    },
    "category": service.category,
    "url": `https://neuronexalabs.com/services/${service.slug}`
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const schemas = faqSchema ? [serviceSchema, faqSchema] : [serviceSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main className="flex-grow pt-24 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative bg-white border-b border-slate-200/80 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-navy/10 blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0F6F94]/5 blur-3xl opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0F6F94] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Text */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 border border-brand-navy/20 text-[#0F6F94] text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3.5 h-3.5" />
                  {service.category}
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                  {service.title}
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
                  {service.shortDesc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/#contact"
                    className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#0F6F94] hover:bg-[#0c5977] text-white font-bold rounded-xl shadow-lg shadow-[#0F6F94]/20 transition-all hover:-translate-y-0.5"
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative lg:h-[500px] h-[350px] w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0F6F94]/10 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10" />
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/50 relative">
                  <img 
                    src={service.heroImage} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CONTENT & SIDEBAR SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Main Content (Left) */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 mb-12">
                <div 
                  className="prose prose-slate prose-lg max-w-none
                    prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-h2:text-3xl sm:prose-h2:text-4xl prose-h2:mt-2 prose-h2:mb-6
                    prose-h3:text-2xl sm:prose-h3:text-3xl prose-h3:mt-10 prose-h3:mb-5
                    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-brand-navy prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                    prose-li:text-slate-700 prose-li:my-3 prose-li:marker:text-brand-navy
                    prose-strong:text-brand-navy prose-strong:font-bold"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>

              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden mb-12">
                  <FAQSection 
                    title="Related FAQs"
                    description={`Frequently asked questions about ${service.title.toLowerCase()}`}
                    faqs={service.faqs}
                  />
                </div>
              )}
            </div>

            {/* Sticky Sidebar (Right) */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#0F6F94] to-slate-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                  
                  <h3 className="text-2xl font-bold mb-4">Ready to automate?</h3>
                  <p className="text-slate-200 mb-8 text-sm leading-relaxed">
                    Stop letting manual processes slow down your growth. Speak with our AI architects to see how {service.title.toLowerCase()} can transform your business.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      'Custom Implementation Plan',
                      'ROI & Cost Analysis',
                      'Security & Compliance Review'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="/#contact"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#0F6F94] hover:bg-slate-50 font-bold rounded-xl transition-colors"
                  >
                    Book a Free Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* More Services Link */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Explore More Services</h4>
                  <div className="space-y-3">
                    {servicesData.filter(s => s.slug !== service.slug).slice(0, 4).map(s => (
                      <Link 
                        key={s.slug} 
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-slate-700 group-hover:text-[#0F6F94] transition-colors line-clamp-1">{s.title}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0F6F94] transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#0F6F94] hover:text-[#0c5977] mt-6 transition-colors">
                    View all services
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

      </main>

      <ContactSection />
    </>
  );
}
