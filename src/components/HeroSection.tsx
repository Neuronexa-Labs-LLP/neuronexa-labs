import React, { useEffect, useState } from 'react';
import { Code, Cpu, LayoutGrid } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="hero-section relative pt-24 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-indigo-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-600 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNDE0MTQiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzBoMmEyIDIgMCAwIDEgMiAydjJoLTZ2LTJhMiAyIDAgMCAxIDItMnptMCAyaDJ2MmgtMnYtMnptLTE4LTJ2MmEyIDIgMCAwIDAgMiAyaDJ2LTZoLTJhMiAyIDAgMCAwLTIgMnptMiAwdjJoLTJ2LTJoMnptLTItMTJhMiAyIDAgMCAwLTIgMnYyaDZ2LTJhMiAyIDAgMCAwLTItMmgtMnptMCAydjJoMnYtMmgtMnptMTggMGEyIDIgMCAwIDAgMi0ydi0yaC02djJhMiAyIDAgMCAwIDIgMmgyem0wLTJ2LTJoMnYyaC0yeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-left max-w-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Empoweringg Your Vision with <span className="text-primary">AI-Driven Solutions</span>
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  At Neuronexa Labs, we transform your ideas into reality with cutting-edge technology and innovative strategies. Let us help you achieve your goals with our expertise in AI, web development, and design.
                </p>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href="#projects"
                    className="border border-white text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-primary"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white/80 text-sm">Custom Solutions</div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 transform transition-transform hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-start">
                        <div className="bg-indigo-600/20 p-3 rounded-lg mr-4">
                          <Code className="h-6 w-6 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-medium mb-1">Innovative Digital Solutions</h3>
                          <p className="text-indigo-200 text-sm">Revolutionizing businesses with cutting-edge technology</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 transform transition-transform hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-start">
                        <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                          <Cpu className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-medium mb-1">AI-Powered Insights</h3>
                          <p className="text-indigo-200 text-sm">Harnessing AI to deliver actionable intelligence</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 transform transition-transform hover:scale-[1.02] hover:bg-white/10">
                      <div className="flex items-start">
                        <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                          <LayoutGrid className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-white text-lg font-medium mb-1">Seamless User Experiences</h3>
                          <p className="text-indigo-200 text-sm">Crafting intuitive designs for all platforms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-500 rounded-lg blur-lg opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-500 rounded-lg blur-lg opacity-60 animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;