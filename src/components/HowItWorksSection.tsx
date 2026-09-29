"use client";

import React from "react";

export interface StepItem {
  id: string;
  stepNumber?: string;
  title: string;
  description: string;
  color?: string;
  desktopCoords: { left: number; top: number }; // In pixels relative to 1200x440 canvas
}

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    id: "understand",
    stepNumber: "1",
    title: "Understand your business",
    description:
      "We look at your calls, leads, customer questions, and daily workflows to identify where your team is losing the most time or opportunities.",
    color: "#2AA7D3",
    desktopCoords: { left: 20, top: 110 },
  },
  {
    id: "build",
    stepNumber: "2",
    title: "Build your AI assistant",
    description:
      "We train your assistant on your services, FAQs, processes, and brand voice so it knows what to say, what to ask, and what to do.",
    color: "#1E3A5F",
    desktopCoords: { left: 260, top: 225 },
  },
  {
    id: "connect",
    stepNumber: "3",
    title: "Connect everything",
    description:
      "Connect your CRM, calendar, website, and business systems so the assistant can do more than talk — it can actually take action.",
    color: "#10B981",
    desktopCoords: { left: 500, top: 45 },
  },
  {
    id: "calls",
    stepNumber: "4",
    title: "Start handling calls",
    description:
      "Go live with inbound calls. Your assistant can answer questions, qualify leads, follow up, book appointments, and transfer calls to your team when needed.",
    color: "#0284C7",
    desktopCoords: { left: 740, top: 225 },
  },
  {
    id: "telemetry",
    stepNumber: "5",
    title: "See what happens",
    description:
      "Track every call, conversation, lead, appointment, and outcome from one place. Use the data to improve performance and grow.",
    color: "#7C3AED",
    desktopCoords: { left: 980, top: 110 },
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative pt-12 md:pt-16 bg-slate-50 border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================================================================= */}
        {/* Section Header                                                    */}
        {/* ================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            How It Works
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Five steps from first consultation to a live, automated voice assistant
            — answering calls, qualifying leads, and booking appointments for your
            business.
          </p>
        </div>

        {/* ================================================================= */}
        {/* Master Flow Container (Desktop: >= 1024px)                        */}
        {/* ================================================================= */}
        <div className="hidden lg:block relative w-full h-[450px] overflow-hidden">
          {/* Connected SVG Signal Wave Underneath Cards */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 440"
            preserveAspectRatio="none"
          >
            {/* Simple Clean Color Track Line */}
            <path
              d="M 125 190 C 245 190, 245 305, 365 305 C 485 305, 485 125, 605 125 C 725 125, 725 305, 845 305 C 965 305, 965 190, 1085 190"
              fill="none"
              stroke="#0F6F94"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* 5 Step Cards Layered along the Wave */}
          <div className="relative w-full h-full">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.id}
                style={{
                  left: `${(step.desktopCoords.left / 1200) * 100}%`,
                  top: `${step.desktopCoords.top}px`,
                  width: "216px",
                }}
                className="absolute z-10 p-5 rounded-2xl transition-all duration-300 select-none group bg-[#1E3A5F] text-white border-2 border-[#1E3A5F] hover:border-[#0F6F94]/60 shadow-md shadow-slate-900/10 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Subtle Large Watermark Number: 1, 2, 3, 4, 5 */}
                <span className="absolute top-2.5 right-3.5 text-3xl font-black pointer-events-none select-none text-white/10 group-hover:text-white/20 transition-colors duration-300">
                  {step.stepNumber}
                </span>

                {/* Step Title */}
                <h3 className="text-[13.5px] font-bold leading-snug mb-1.5 transition-colors relative z-10 pr-6 text-white">
                  {step.title}
                </h3>

                {/* Full Step Description */}
                <p className="text-[11px] leading-relaxed font-normal transition-colors relative z-10 text-slate-200">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* Responsive Mobile / Tablet Layout (< 1024px)                     */}
        {/* ================================================================= */}
        <div className="lg:hidden relative py-2">
          {/* Vertical Zig-Zag SVG Wave in Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
          >
            {/* Clean Color Vertical Zig-Zag Track */}
            <path
              d="M 28 48 C 28 98, 72 98, 72 148 C 72 198, 28 198, 28 248 C 28 298, 72 298, 72 348 C 72 398, 28 398, 28 448"
              fill="none"
              stroke="#0F6F94"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Alternating Zig-Zag Cards */}
          <div className="flex flex-col space-y-5 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative w-[86%] sm:w-[80%] p-5 rounded-2xl transition-all duration-300 overflow-hidden select-none bg-[#1E3A5F] text-white border-2 border-[#1E3A5F] shadow-md shadow-slate-900/10 ${isEven ? "self-start mr-auto" : "self-end ml-auto"
                    }`}
                >
                  {/* Subtle Large Watermark Number: 1, 2, 3, 4, 5 */}
                  <span className="absolute top-2.5 right-3.5 text-3xl font-black pointer-events-none select-none text-white/10">
                    {step.stepNumber}
                  </span>

                  <h3 className="text-base font-bold leading-snug mb-1.5 transition-colors relative z-10 pr-6 text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed font-normal transition-colors relative z-10 text-slate-200">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
