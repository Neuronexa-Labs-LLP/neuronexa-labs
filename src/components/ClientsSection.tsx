import React from "react";
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  const clients = [
    { id: 1, name: "Vedims", logo: "/assets/clients/vedims.png", link: "https://vedims.com" },
    { id: 5, name: "Medblik", logo: "/assets/clients/medblik.png", link: "#" }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden border-t border-slate-100">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 px-4"
        >

          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">
             Alliances
          </h2>
        </motion.div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="overflow-hidden whitespace-nowrap relative py-6">
           
          {/* Gradient Edges */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Animation Row */}
          <div className="scroller flex items-center gap-16 md:gap-32 w-max">
            {[...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <motion.a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block opacity-60 hover:opacity-100 transition-opacity duration-500 transform-gpu"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-10 md:h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;