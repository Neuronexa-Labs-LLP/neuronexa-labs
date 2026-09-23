"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones, Webhook, PhoneOff, Mic, Grid, Volume2, Phone, Star, CheckCircle2, CalendarCheck, Sparkles } from 'lucide-react';

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
        <div 
          className="anim-hero-blob-1 absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-sky-400/10 blur-[120px] z-0" 
        />
        <div 
          className="anim-hero-blob-2 absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-[120px] z-0" 
        />
        <div 
          className="anim-hero-blob-3 absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-200/20 blur-[100px] z-0" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* Left Text Column */}
          <div className="flex-1 text-left relative z-20">
            {/* Header Chips */}
            <div
              className="hero-anim hero-fade inline-flex items-center gap-2 bg-white/90 border border-brand-navy/30 text-slate-900 px-3.5 py-1.5 rounded-full text-xs font-bold mb-5 shadow-xs"
              style={{ animationDelay: '0ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-navy animate-pulse"></span>
              <span className="text-[#0F6F94] font-bold">Enterprise AI Voice Assistant</span>
            </div>

            {/* Title */}
            <h1
              className="hero-anim hero-fade text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[40px] font-extrabold text-[#0F172A] mb-4"
              style={{ animationDelay: '150ms' }}
            >
              Scale Your Business with {' '}
              <span className="bg-gradient-to-r from-brand-navy via-cyan-600 to-sky-400 bg-clip-text text-transparent">
                 Enterprise AI Voice & Automation
              </span>{' '}
            </h1>

            {/* Subtitle */}
            <p
              className="hero-anim hero-fade text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-xl"
              style={{ animationDelay: '180ms' }}
            >
               Neuronexa Labs is an enterprise AI and workflow automation company that builds autonomous AI agents, intelligent voice assistants, and custom automation processes.
            </p>

            {/* Feature Pills */}
            <div
              className="hero-anim hero-fade flex flex-wrap gap-2 mb-7"
              style={{ animationDelay: '220ms' }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                Instant Voice Response
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs">
                <Headphones className="w-3.5 h-3.5 text-brand-navy" />
                Warm Vernacular Accents
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs">
                <Webhook className="w-3.5 h-3.5 text-purple-500" />
                Live Webhook Sync
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% TRAI / DNC Compliant
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-anim hero-fade flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
              style={{ animationDelay: '250ms' }}
            >
              <a
                href="https://wa.me/9110435020"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F6F94] to-brand-navy hover:from-[#0c5977] hover:to-[#228cb2] hover:scale-105 hover:-translate-y-0.5 active:scale-95 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md shadow-[#0F6F94]/20 transition-all duration-200 cursor-pointer"
              >
                Schedule Live Demo
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#flow"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-brand-navy text-slate-700 bg-white/90 hover:text-[#0F172A] hover:scale-105 hover:-translate-y-0.5 active:scale-95 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-xs hover:bg-slate-50 cursor-pointer"
              >
                View System Architecture
              </a>
            </div>
          </div>

          {/* Right Mockup Dashboard Column */}
          <div className="flex-1 w-full max-w-md lg:max-w-xl relative flex justify-center z-20">
            <div
              className="anim-hero-status-card absolute -right-4 lg:-right-6 bottom-[8%] bg-white/95 backdrop-blur-xl border border-emerald-100/80 shadow-[0_8px_30px_rgba(16,185,129,0.12)] rounded-2xl px-3 py-2 lg:px-4 lg:py-3 z-30 hidden md:block"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Zap className="h-3.5 w-3.5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">Fast Response</span>
                  <span className="text-[9px] text-emerald-700 font-bold">Instant Replies</span>
                </div>
              </div>
            </div>

            {/* Apple-style Premium Glassmorphism Card */}
            <div
              className="anim-hero-glass-card w-full rounded-[32px] backdrop-blur-2xl bg-white/90 border border-white/80 shadow-[0_25px_70px_rgba(15,111,148,0.12)] p-2"
            >
              <div className="bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0A1424] rounded-[26px] p-5 sm:p-6 border border-slate-700/40 relative overflow-hidden text-white shadow-inner">
                
                {/* Subtle radial ambient glows */}
                <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-brand-navy/15 blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 -left-10 h-36 w-36 rounded-full bg-emerald-500/10 blur-[50px] pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-3.5">
                  
                  {/* Top Status Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                        {statusState === 'Dialing...' || statusState === 'Ringing...' ? 'Connecting Outbound' : 'Live Outbound Call'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-navy/15 border border-brand-navy/30 text-[10px] font-mono font-bold text-cyan-300">
                      <Zap className="w-3 h-3 text-brand-navy" />
                      <span>Real-Time Response</span>
                    </div>
                  </div>

                  {/* Caller Identity Card */}
                  <div className="flex items-center justify-between gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
                    <div className="flex items-center gap-3">
                      {/* Avatar with subtle ring */}
                      <div className="relative shrink-0">
                        <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-navy to-[#0F6F94] flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_20px_rgba(42,167,211,0.35)] border-2 border-white/20">
                          RK
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-[#0B1528] flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                        </span>
                      </div>

                      {/* Name & Phone */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-bold text-white tracking-tight">Rajesh Kumar</p>
                          <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30">
                            Verified Lead
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5 tracking-wide">
                          +91 98765 •••••
                        </p>
                      </div>
                    </div>

                    {/* Timer / Call Status Badge */}
                    <div className="text-right shrink-0">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>
                          {statusState === 'Dialing...' ? 'Dialing...' :
                           statusState === 'Ringing...' ? 'Ringing...' :
                           statusState === 'Connected' ? '00:18' : '00:54'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Waveform Equalizer */}
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Headphones className="w-3 h-3 text-brand-navy" />
                      Neural Voice Streaming
                    </span>
                    <div className="flex items-end gap-[3px] h-4">
                      {[4, 7, 12, 16, 13, 8, 15, 18, 14, 9, 12, 16, 10, 5].map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-gradient-to-t from-[#0F6F94] to-brand-navy"
                          style={{
                            height: `${h}px`,
                            animation: `pulse ${0.7 + (i % 5) * 0.15}s ease-in-out infinite alternate`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Real-Time Conversation Dialogue Bubbles */}
                  <div className="space-y-2 bg-slate-900/70 rounded-2xl p-3.5 border border-slate-800/90 text-left">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px] font-mono">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Live Transcript Feed
                      </span>
                      <span className="text-slate-500">Auto-Transcribing</span>
                    </div>

                    {/* AI Speech Bubble */}
                    <div className="p-2.5 rounded-xl bg-[#0F6F94]/25 border border-brand-navy/35">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-cyan-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          Neuronexa AI Assistant
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">10:42 AM</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        "Hi Rajesh, Rahul has 4:00 PM open this Tuesday. Shall I lock that into your calendar?"
                      </p>
                    </div>

                    {/* Lead Speech Bubble */}
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/70 ml-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Rajesh Kumar (Lead)
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">10:42 AM</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans">
                        "Yes, Tuesday at 4 PM works great. Please confirm and send the calendar invite."
                      </p>
                    </div>
                  </div>


                  {/* Refined Modern Call Control Bar */}
                  <div className="pt-1.5 flex items-center justify-center gap-5 sm:gap-6">
                    <button
                      type="button"
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-all backdrop-blur-md">
                        <Mic className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[8px] font-mono font-semibold text-slate-400 group-hover:text-slate-200">Mute</span>
                    </button>

                    <button
                      type="button"
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-all backdrop-blur-md">
                        <Grid className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[8px] font-mono font-semibold text-slate-400 group-hover:text-slate-200">Keypad</span>
                    </button>

                    <button
                      type="button"
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-all backdrop-blur-md">
                        <Volume2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[8px] font-mono font-semibold text-slate-400 group-hover:text-slate-200">Speaker</span>
                    </button>

                    <button
                      type="button"
                      className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                      <div className="h-9 w-9 rounded-full bg-rose-500 hover:bg-rose-600 active:scale-95 flex items-center justify-center text-white shadow-[0_0_16px_rgba(244,63,94,0.45)] transition-all">
                        <PhoneOff className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-[8px] font-mono font-semibold text-rose-400">End</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
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

