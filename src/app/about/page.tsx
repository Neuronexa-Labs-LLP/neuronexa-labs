import ContactSection from '../../components/ContactSection';
import { ShieldCheck, Users, Target, Rocket } from 'lucide-react';

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Neuronexa Labs",
  "description": "Neuronexa Labs is an Enterprise AI and Workflow Automation company dedicated to building autonomous AI agents and streamlining business operations.",
  "publisher": {
    "@type": "Organization",
    "name": "Neuronexa Labs",
    "url": "https://neuronexalabs.com"
  }
};

export const metadata = {
  title: 'About Us | Neuronexa Labs',
  description: 'Learn more about Neuronexa Labs, our mission, and our expertise in Enterprise AI and Workflow Automation solutions.',
  alternates: {
    canonical: 'https://neuronexalabs.com/about',
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              About Neuronexa Labs
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are an AI company that helps businesses save time and grow faster. We build smart systems that handle boring, repetitive tasks so your team can focus on what really matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                At Neuronexa Labs, we believe AI should help people, not replace them. Our mission is to take over the daily busywork that slows your business down. This gives your employees the freedom to focus on creative and important projects.
              </p>
              <p className="text-slate-600 leading-relaxed">
                By setting up safe, fast, and reliable AI tools, we help your business run smoother and grow without limits.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Target, title: 'Precision', desc: 'We engineer solutions with exactness and rigor.' },
              { icon: ShieldCheck, title: 'Security', desc: 'Enterprise-grade protection for your sensitive data.' },
              { icon: Users, title: 'Collaboration', desc: 'Partnering closely with your team for success.' },
              { icon: Rocket, title: 'Innovation', desc: 'Always pushing the boundaries of AI capabilities.' }
            ].map((value, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-full bg-[#0F6F94]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-[#0F6F94]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>
      
      <ContactSection />
    </>
  );
}
