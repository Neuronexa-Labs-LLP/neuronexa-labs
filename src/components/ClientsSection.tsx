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
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/world-map.png')" }}
      />

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovators Who Work With Us</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            We collaborate with forward-thinking companies to build meaningful and high-performance products.
          </p>
        </motion.div>
        {/* Infinite Scroll Wrapper */}
        <div className="overflow-hidden whitespace-nowrap">

          {/* Animation Row */}
          <div className="scroller gap-16 flex">
            {[...clients, ...clients].map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-80 hover:opacity-100 transition"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-32 md:h-16 md:w-40 object-contain grayscale hover:grayscale-0 transition duration-300"
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