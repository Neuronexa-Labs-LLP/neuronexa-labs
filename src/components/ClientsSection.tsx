import React from "react";
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  const clients = [
    { id: 1, name: "Vedims", logo: "/assets/clients/vedims.png", link: "https://vedims.com" },
    { id: 2, name: "Shri Rajeshwari Properties", logo: "/assets/clients/srp.png", link: "https://shrirajeshwariproperties.com" },
    { id: 3, name: "Orion Park", logo: "/assets/clients/orion_park.png", link: "https://shrirajeshwariproperties.com" },
    { id: 4, name: "Legacy B", logo: "/assets/clients/legacyb.jpeg", link: "#" },
    { id: 5, name: "Medblik", logo: "/assets/clients/medblik.png", link: "#" }
  ];

  return (
    <section className="relative py-48 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDMwaDJhMiAyIDAgMCAxIDIgMnYyaC02di0yYTIgMiAwIDAgMSAyLTJ6bTAgMmgydjJoLTJ2LTJ6bS0xOC0ydjJhMiAyIDAgMCAwIDIgMmgydi02aC0yYTIgMiAwIDAgMC0yIDJ6bTIgMHYyaC0ydi0yaDJ6bS0yLTEyYTIgMiAwIDAgMC0yIDJ2Mmg2di0yYTIgMiAwIDAgMC0yLTJoLTJ6bTAgMnYyaDJ2LTJoLTJ6bTE4IDBhMiAyIDAgMCAwIDItMnYtMmgtNnYyYTIgMiAwIDAgMCAyIDJoMnptMC0ydi0yaDJ2MmgtMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')]"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 lg:mb-32 px-4"
        >
          <span className="text-[#00A7E1] tracking-[0.3em] font-medium text-xs mb-8 block uppercase">05 // Trusted Partners</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
             Alliances
          </h2>
        </motion.div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="overflow-hidden whitespace-nowrap relative py-12">
           
          {/* Gradient Edges */}
          <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* Animation Row */}
          <div className="scroller flex items-center gap-16 md:gap-32 w-max">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-500 transform-gpu"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
                />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsSection;