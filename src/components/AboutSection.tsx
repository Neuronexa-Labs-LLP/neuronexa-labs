import React from 'react';

import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            At Neuronexa Labs, we are passionate about leveraging technology to create innovative solutions that empower
            businesses and individuals. Our team of experts specializes in AI, web development, and design, ensuring that we
            deliver exceptional results tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Our Mission', 'Our Vision', 'Our Values'].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg transform transition-transform hover:scale-105 hover:bg-white/20`}
            >
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-300">
                {title === 'Our Mission' &&
                  'To drive innovation and deliver cutting-edge solutions that help our clients achieve their goals and thrive in the digital age.'}
                {title === 'Our Vision' &&
                  'To be a global leader in technology solutions, recognized for our commitment to excellence and innovation.'}
                {title === 'Our Values' &&
                  'Integrity, innovation, and customer-centricity are at the core of everything we do.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
