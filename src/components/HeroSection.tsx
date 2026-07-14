import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Award, PhoneOff, Mic, Grid, Volume2, Phone, Star } from 'lucide-react';

const NeuronexaHero: React.FC = () => {
  // Status Cycle for Call UI phase details
  const [statusState, setStatusState] = useState('Dialing...');

  // Status state rotation
  useEffect(() => {
    const states = ['Dialing...', 'Ringing...', 'Connected', 'Speaking'];
    let index = 0;
    setStatusState(states[0]);

    const interval = setInterval(() => {
      index = (index + 1) % states.length;
      setStatusState(states[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#EEF8FF] pt-24 pb-16 md:pt-28 md:pb-28 overflow-hidden min-h-screen flex items-center">
      {/* Blur Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-sky-400/10 blur-[120px] z-0" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-[120px] z-0" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-200/20 blur-[100px] z-0" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Text Column */}
          <div className="flex-1 text-left relative z-20">
            {/* Header Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-2 bg-white/80 border border-[#2AA7D3]/20 text-[#0F172A] px-3.5 py-1.5 rounded-full text-xs font-bold mb-6 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2AA7D3] animate-pulse"></span>
              Voice AI Platform
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-6"
            >
              AI Voice Agents<br />
              That Never Miss<br />
              <span className="text-[#2AA7D3]">a Sales Opportunity</span>
            </motion.h1>

            {/* Subtitle Accent list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mb-8 flex flex-wrap gap-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2AA7D3] to-[#1E3A5F]"
            >
              <span>24×7 Availability</span>
              <span className="text-[#2AA7D3]">•</span>
              <span>Human-like Realism</span>
              <span className="text-[#2AA7D3]">•</span>
              <span>Multilingual</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <motion.a
                href="https://wa.me/9110435020"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2AA7D3] to-[#1E3A5F] text-white px-7 py-4 rounded-xl text-sm font-bold shadow-md cursor-pointer"
              >
                Schedule a Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-[#2AA7D3] text-slate-700 bg-white/80 hover:text-[#0F172A] px-7 py-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer shadow-sm"
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Metrics Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-slate-200/80 pt-6 space-y-3 max-w-md"
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Award className="h-4 w-4 text-[#2AA7D3] shrink-0" />
                <span>✓ 95% Lead Qualification Accuracy</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Zap className="h-4 w-4 text-[#2AA7D3] shrink-0" />
                <span>✓ 24/7 Autopilot Availability</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <Shield className="h-4 w-4 text-[#2AA7D3] shrink-0" />
                <span>✓ 60% Faster Average Response Time</span>
              </div>
            </motion.div>
          </div>

          {/* Right Mockup Dashboard Column */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl relative flex justify-center z-20">
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 lg:-left-6 top-[15%] bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl px-3 py-2 lg:px-4 lg:py-3 z-30 hidden md:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Phone className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">300+</span>
                  <span className="text-[9px] text-slate-400 font-bold">Calls / hour</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 lg:-right-6 bottom-[8%] bg-white/95 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl px-3 py-2 lg:px-4 lg:py-3 z-30 hidden md:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-amber-50 flex items-center justify-center">
                  <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">98%</span>
                  <span className="text-[9px] text-slate-400 font-bold">Satisfaction</span>
                </div>
              </div>
            </motion.div>

            {/* Apple-style Premium Glassmorphism Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 0.4, -0.4, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full rounded-[32px] backdrop-blur-xl bg-white/80 border border-white/60 shadow-[0_30px_80px_rgba(0,0,0,.08)] p-1.5"
            >
              <div className="bg-gradient-to-b from-[#0F172A] to-[#1E3A5F] rounded-[28px] p-6 border border-slate-700/30 relative overflow-hidden">
                
                {/* Subtle background glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-[#2AA7D3]/15 blur-[60px] pointer-events-none" />

                  <div className="flex flex-col items-center justify-between py-3 md:py-4 min-h-[260px] md:min-h-[290px] relative z-10">
                    
                    {/* Top Label */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                        {statusState === 'Dialing...' || statusState === 'Ringing...' ? 'Connecting' : 'Live Call'}
                      </span>
                    </div>

                    {/* Avatar with animated rings */}
                    <div className="relative flex items-center justify-center my-4">
                      <div className="absolute h-24 w-24 rounded-full border border-[#2AA7D3]/15 animate-pulse" />
                      <div className="absolute h-20 w-20 rounded-full border-2 border-[#2AA7D3]/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute h-16 w-16 rounded-full bg-[#2AA7D3]/10 animate-pulse" />
                      <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-[#2AA7D3] to-[#1890B8] flex items-center justify-center text-white shadow-[0_0_30px_rgba(42,167,211,0.35)]">
                        <span className="text-lg font-extrabold">RK</span>
                      </div>
                    </div>

                    {/* Caller Info */}
                    <div className="text-center mb-1">
                      <h4 className="text-sm font-extrabold text-white tracking-tight">Rajesh Kumar</h4>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 tracking-wider">
                        +91 98765 •••••
                      </p>
                    </div>

                    {/* Status / Timer */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        statusState === 'Dialing...' ? 'bg-amber-400 animate-pulse' :
                        statusState === 'Ringing...' ? 'bg-amber-400 animate-ping' :
                        'bg-emerald-400 animate-pulse'
                      }`} />
                      <span className="text-[11px] font-bold text-slate-300 tracking-wide">
                        {statusState === 'Dialing...' ? 'Dialing...' :
                         statusState === 'Ringing...' ? 'Ringing...' :
                         statusState === 'Connected' ? '00:12' : '00:47'}
                      </span>
                    </div>

                    {/* Waveform Visualizer */}
                    <div className="flex items-end gap-[3px] h-6 mb-5">
                      {[3, 5, 8, 12, 16, 12, 8, 14, 10, 6, 9, 13, 7, 4].map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-[#2AA7D3]/60"
                          style={{
                            height: `${h}px`,
                            animation: `pulse ${0.8 + i * 0.15}s ease-in-out infinite alternate`
                          }}
                        />
                      ))}
                    </div>

                    {/* Post-Call Summary Card */}
                    <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-5 max-w-[95%]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <p className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-400">Summary Auto-Generated</p>
                        </div>
                        <span className="text-[8px] text-slate-500 font-bold">After every call</span>
                      </div>

                      {/* Mini conversation extract */}
                      <div className="flex flex-col gap-1.5 mb-3 pl-2 border-l-2 border-[#2AA7D3]/30">
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                          <span className="text-slate-300 font-bold">AI:</span> "Rajesh, you requested info on premium units..."
                        </p>
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                          <span className="text-slate-300 font-bold">Lead:</span> "Yes, book a site visit for Tuesday."
                        </p>
                      </div>

                      {/* Call Performance Stats */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-[11px] font-extrabold text-white">92<span className="text-[8px] text-slate-500 font-bold"> calls</span></p>
                          <p className="text-[7px] text-emerald-400 font-bold mt-0.5">in 22 min</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-[11px] font-extrabold text-[#2AA7D3]">300<span className="text-[8px] text-slate-500 font-bold"> /hr</span></p>
                          <p className="text-[7px] text-slate-500 font-bold mt-0.5">TARGET</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-2 text-center">
                          <p className="text-[11px] font-extrabold text-emerald-400">87%</p>
                          <p className="text-[7px] text-slate-500 font-bold mt-0.5">CONNECT</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-5 w-full max-w-[240px]">
                      <div className="flex flex-col items-center gap-1.5">
                        <button type="button" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-all cursor-pointer backdrop-blur-sm border border-white/5">
                          <Mic className="h-4 w-4" />
                        </button>
                        <span className="text-[8px] font-bold text-slate-500">Mute</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <button type="button" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-all cursor-pointer backdrop-blur-sm border border-white/5">
                          <Grid className="h-4 w-4" />
                        </button>
                        <span className="text-[8px] font-bold text-slate-500">Keypad</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <button type="button" className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 transition-all cursor-pointer backdrop-blur-sm border border-white/5">
                          <Volume2 className="h-4 w-4" />
                        </button>
                        <span className="text-[8px] font-bold text-slate-500">Speaker</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <button type="button" className="h-10 w-10 rounded-full bg-red-500 hover:bg-red-600 hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer">
                          <PhoneOff className="h-4 w-4" />
                        </button>
                        <span className="text-[8px] font-bold text-red-400/80">End</span>
                      </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const HeroSection: React.FC = () => {
  return <NeuronexaHero />;
};

export default HeroSection;