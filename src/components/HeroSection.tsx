import React from 'react';
import { Code, Cpu, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import worldMap from '../assets/world_map.png';

const HeroSection: React.FC = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="hero-section relative pt-24 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 z-0"></div>

      {/* ✅ World Map Background - Smooth Sliding Effect */}
      <div
        className="absolute inset-0 bg-repeat-x bg-center opacity-10 z-0 slide-world"
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundSize: "cover",
        }}
      ></div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-60 h-60 rounded-full bg-indigo-500 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-600 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500 blur-3xl"
        ></motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDE0MTQiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMmEyIDIgMCAwIDEgMiAydjJoLTZ2LTJhMiAyIDAgMCAxIDItMnptMCAyaDJ2MmgtMnYtMnptLTE4LTJ2MmEyIDIgMCAwIDAgMiAyaDJ2LTZoLTJhMiAyIDAgMCAwLTIgMnptMiAwdjJoLTJ2LTJoMnptLTItMTJhMiAyIDAgMCAwLTIgMnYyaDZ2LTJhMiAyIDAgMCAwLTItMmgtMnptMCAydjJoMnYtMmgtMnptMTggMGEyIDIgMCAwIDAgMi0ydi0yaC02djJhMiAyIDAgMCAwIDIgMmgyem0wLTJ2LTJoMnYyaC0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left max-w-lg"
            >
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Empowering Your Vision with <span className="text-primary">AI-Driven Solutions</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-300">
                At Neuronexa Labs, we transform your ideas into reality with cutting-edge technology and innovative strategies.
                Let us help you achieve your goals with our expertise in AI, web development, and design.
              </motion.p>

              {/* ✅ Add this tagline line here */}
              <motion.p variants={fadeInUp} className="mt-2 text-primary text-lg tracking-wide font-medium">
                AI • Cloud • Modern Apps • Automation
              </motion.p>

              {/* ✅ Add social proof */}
              <motion.p variants={fadeInUp} className="mt-6 text-gray-400 text-sm uppercase tracking-wider opacity-80">
                Trusted by teams and startups in India
              </motion.p>

              {/* ✅ Add quick services */}
              <motion.div variants={fadeInUp} className="mt-3 grid grid-cols-2 gap-3 text-gray-300 text-sm">
                <div className="bg-white/10 px-3 py-2 rounded-md">🤖 AI Automation</div>
                <div className="bg-white/10 px-3 py-2 rounded-md">⚡ Custom Development</div>
                <div className="bg-white/10 px-3 py-2 rounded-md">📱 Mobile & Web Apps</div>
                <div className="bg-white/10 px-3 py-2 rounded-md">☁️ Cloud & DevOps</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-6 flex space-x-4">
                <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Get Started
                </a>
                <a href="#projects" className="border border-white text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-primary transform hover:scale-105">
                  Learn More
                </a>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* <div className="text-white/80 text-sm">AI Powered</div> */}
                  <a href="https://wa.me/919110435020?text=Hi%20I%20would%20like%20to%20request%20a%20demo%20of%20your%20services" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-sm bg-[#6ED36E] text-white px-3 py-1 rounded-full font-medium shadow-lg cursor-pointer hover:opacity-90 transition"
                    >
                      Book a Demo
                    </motion.div>
                  </a>
                </div>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                        <Code className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">Innovative Digital Solutions</h3>
                        <p className="text-indigo-200 text-sm">Revolutionizing businesses with cutting-edge technology</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                        <Cpu className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">AI-Powered Insights</h3>
                        <p className="text-indigo-200 text-sm">Harnessing AI to deliver actionable intelligence</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 transition-colors"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                        <LayoutGrid className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-medium mb-1">Seamless User Experiences</h3>
                        <p className="text-indigo-200 text-sm">Crafting intuitive designs for all platforms</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-500 rounded-lg blur-lg opacity-60"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500 rounded-lg blur-lg opacity-60"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;