import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Link2, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. Understand Your Business',
    description: 'We learn how your team handles calls, leads, customers, and appointments so we know where your AI assistant can make the biggest difference.',
  },
  {
    icon: PenTool,
    title: '2. Build Your AI Assistant',
    description: 'We create an assistant around your business, your services, and your way of speaking — so it sounds like your company, not a robot.',
  },
  {
    icon: Link2,
    title: '3. Connect Your Tools',
    description: 'We connect the assistant with the tools you already use, such as your CRM and calendar, so everything works together.',
  },
  {
    icon: Rocket,
    title: '4. Start Helping Your Team',
    description: 'Your AI assistant starts answering calls, calling leads, booking appointments, and handling follow-ups — 24/7.',
  },
  {
    icon: BarChart,
    title: '5. See the Results',
    description: 'Track your calls, leads, appointments, and conversations in one place and see how much work your AI is handling for your team.',
  }
];

const HomeHowItHelps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">How We Help You Grow</h2>
          <p className="text-slate-600 text-lg">We start by understanding your business and where your team spends the most time on calls and follow-ups. Then we set up an AI Voice Assistant to handle those tasks for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-[#2AA7D3] transition-colors duration-300 shadow-sm border border-sky-100">
                <step.icon className="w-7 h-7 text-[#0F6F94] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItHelps;

