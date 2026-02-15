import React from 'react';
import { Code, Database, Layout, Lock, PieChart, Smartphone, Cpu, Globe } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

import { motion } from 'framer-motion';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-7 w-7" />,
      title: "Custom Web Development",
      description: "Tailored web applications designed to meet your specific business requirements and deliver exceptional user experiences."
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "AI Integration",
      description: "Leverage the power of artificial intelligence with custom solutions that analyze data, automate processes, and deliver insights."
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile App Development",
      description: "Create beautiful, functional mobile experiences for iOS and Android that keep your users engaged."
    },
    {
      icon: <Layout className="h-7 w-7" />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences."
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and storage solutions that help you make sense of your most valuable asset - your data."
    },
    {
      icon: <Lock className="h-7 w-7" />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with advanced security measures and protocols tailored to your business needs."
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Cloud Services",
      description: "Scalable, reliable cloud infrastructure that grows with your business while optimizing costs and performance."
    },
    {
      icon: <PieChart className="h-7 w-7" />,
      title: "Analytics & Insights",
      description: "Transform your data into actionable insights with custom analytics solutions and dashboards."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Technical Solutions</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            We develop custom, requirement-based online solutions to help businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;