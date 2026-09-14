import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { 
  Building2, 
  Stethoscope, 
  Dumbbell, 
  Salad, 
  Car, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  CalendarCheck, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  MessageSquare,
  Clock,
  Database,
  ExternalLink,
  Users
} from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  role: string;
  badge: string;
  inboundCapabilities: string[];
  outboundCapabilities: string[];
  dialogue: {
    speaker: 'Caller' | 'AI Voice Assistant';
    text: string;
  }[];
  crmOutcome: {
    status: string;
    action: string;
    timestamp: string;
  };
}

const industries: Industry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    tagline: 'Property Sales & 24/7 Front-Desk Concierge',
    icon: Building2,
    role: 'AI Property Sales Agent & Virtual Receptionist',
    badge: 'Sales & Site Visits',
    inboundCapabilities: [
      'Answers calls 24/7 for night & weekend buyers',
      'Shares prices, carpet areas, and amenity details',
      'Pre-qualifies buyers by budget and timeline',
      'Sends instant brochures & locations on WhatsApp'
    ],
    outboundCapabilities: [
      'Calls back new portal leads within 60 seconds',
      'Schedules physical & virtual site visit tours',
      'Sends friendly tour reminder calls before visits',
      'Re-engages older inactive buyer lists'
    ],
    dialogue: [
      {
        speaker: 'Caller',
        text: 'Hi, are 3BHK flats still available at Emerald Terraces, and what is the price?'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Yes! Starting at ₹1.45 Cr with private balconies. Can I book a site tour for you this Saturday at 11 AM or Sunday at 3 PM?'
      },
      {
        speaker: 'Caller',
        text: 'Saturday at 11 AM works for us.'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Confirmed for Saturday at 11 AM! I just sent the floor plans and location map to your WhatsApp.'
      }
    ],
    crmOutcome: {
      status: 'Site Visit Confirmed',
      action: 'Sales calendar booked · WhatsApp brochure sent',
      timestamp: 'Logged in CRM via Webhook'
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Hospitals',
    tagline: '24/7 Patient Concierge & Doctor Booking Desk',
    icon: Stethoscope,
    role: 'Hospital Desk & Clinical Appointment Assistant',
    badge: 'Patient Care & OPD',
    inboundCapabilities: [
      'Books, reschedules & cancels doctor appointments',
      'Answers 24/7 FAQs on clinic hours & doctor timings',
      'Gives clear pre-test instructions (like fasting rules)',
      'Directly transfers emergency callers to human staff'
    ],
    outboundCapabilities: [
      'Sends appointment reminder calls to stop no-shows',
      'Follows up with patients on recovery & medicine delivery',
      'Calls chronic patients for routine checkup reminders',
      'Notifies patients the moment test lab reports are ready'
    ],
    dialogue: [
      {
        speaker: 'Caller',
        text: 'Hello, can I book an appointment with Dr. Mehta for tomorrow morning?'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Dr. Mehta has an opening tomorrow at 10:30 AM. Shall I book that slot for you?'
      },
      {
        speaker: 'Caller',
        text: 'Yes please, for Ramesh Sharma.'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Booked for 10:30 AM tomorrow. Please arrive 10 minutes early. We just sent your confirmation SMS!'
      }
    ],
    crmOutcome: {
      status: 'OPD Slot Confirmed',
      action: 'Doctor calendar updated · SMS notification sent',
      timestamp: 'Hospital System Synced'
    }
  },
  {
    id: 'fitness',
    name: 'Gyms & Fitness Studios',
    tagline: 'Studio Concierge & Trial Session Booking',
    icon: Dumbbell,
    role: 'Studio Concierge & Membership Sales Assistant',
    badge: 'Members & Training',
    inboundCapabilities: [
      'Answers questions on gym hours, classes & equipment',
      'Books free 1-day passes & VIP trial workouts',
      'Explains trainer packages and membership plans',
      'Reserves spots in popular group fitness classes'
    ],
    outboundCapabilities: [
      'Calls back incoming trial pass leads within minutes',
      'Checks in on members absent for more than 14 days',
      'Schedules free personal trainer review sessions',
      'Calls members to renew memberships before expiry'
    ],
    dialogue: [
      {
        speaker: 'Caller',
        text: 'Hey, do you offer free trial workouts with a personal trainer?'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Yes! We have a free 1-on-1 trainer session open this Thursday at 6 PM. Would you like me to reserve it?'
      },
      {
        speaker: 'Caller',
        text: 'Yes, Thursday at 6 PM sounds great.'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'You are all set for Thursday at 6 PM with Coach David. Your free guest pass has been sent to your phone!'
      }
    ],
    crmOutcome: {
      status: 'Trial Session Booked',
      action: 'Coach David assigned · Digital pass sent to phone',
      timestamp: 'Gym CRM Updated'
    }
  },
  {
    id: 'nutrition',
    name: 'Nutrition & Wellness',
    tagline: 'Diet Consultations & Wellness Health Advice',
    icon: Salad,
    role: 'Nutrition Advisor & Practice Booking Coordinator',
    badge: 'Diet & Wellness',
    inboundCapabilities: [
      'Books video consultations with clinical dietitians',
      'Notes food preferences, health goals & allergies',
      'Answers basic questions on meal plan guidelines',
      'Manages routine rescheduling without human hassle'
    ],
    outboundCapabilities: [
      'Weekly check-in calls to record weight & energy progress',
      'Friendly reminders for daily water & meal tracking',
      'Books follow-up reviews after 30-day meal programs',
      'Re-engages past clients with fresh seasonal diet plans'
    ],
    dialogue: [
      {
        speaker: 'Caller',
        text: 'Hi, I need a meal plan for healthy weight loss. Can I book a consultation?'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Certainly! Dr. Priya has video consultation slots open this Friday at 4 PM or Saturday at 11 AM. Which works best for you?'
      },
      {
        speaker: 'Caller',
        text: 'Friday at 4 PM works great.'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Booked for Friday at 4:00 PM. We just sent your video link and a quick 1-minute questionnaire on WhatsApp!'
      }
    ],
    crmOutcome: {
      status: 'Consultation Confirmed',
      action: 'Google Meet link sent · WhatsApp intake link texted',
      timestamp: 'Practice Records Synced'
    }
  },
  {
    id: 'automotive',
    name: 'Automotive & Dealerships',
    tagline: 'Service Booking & Test Drive Dispatch',
    icon: Car,
    role: 'Dealership Concierge & Service Booking Specialist',
    badge: 'Service & Test Drives',
    inboundCapabilities: [
      'Books maintenance & oil change service bay slots',
      'Schedules 24/7 test drives for new and pre-owned cars',
      'Provides real-time vehicle repair status updates',
      'Explains warranty terms and roadside help options'
    ],
    outboundCapabilities: [
      'Calls car owners when service is due by mileage',
      'Follows up with customers after repairs for feedback',
      'Calls test drive visitors to discuss finance offers',
      'Sends safety recall notifications with priority booking'
    ],
    dialogue: [
      {
        speaker: 'Caller',
        text: 'Hi, my car is due for its 20,000 km service this weekend. Can I book a slot?'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Yes! We have morning drop-off slots open this Saturday at 9:00 AM or 10:30 AM. Would you like free home pick-up?'
      },
      {
        speaker: 'Caller',
        text: 'Yes, pick up at 9:00 AM from my home.'
      },
      {
        speaker: 'AI Voice Assistant',
        text: 'Confirmed for Saturday at 9:00 AM. Our service driver will call 30 minutes before arrival. Booking ID #SRV-4089.'
      }
    ],
    crmOutcome: {
      status: 'Service Bay Reserved',
      action: 'Pick-up driver assigned · Ticket #SRV-4089 created',
      timestamp: 'Dealer Management Synced'
    }
  }
];

const enterpriseProblems = [
  {
    number: '01',
    problemTitle: 'Missed Calls After Hours & Weekends',
    problemDesc: 'Over 67% of buyers and patients call after 6 PM or on weekends. Sending them to voicemail sends them straight to competitors.',
    solutionTitle: '24/7 Inbound Voice Assistant',
    solutionDesc: 'Picks up on the 1st ring in under half a second. Answers questions warmly, qualifies intent, and books meetings 24 hours a day.',
    badge: 'Inbound Answering',
    metric: '100% Answer Rate',
    metricDesc: 'Zero missed calls after hours'
  },
  {
    number: '02',
    problemTitle: 'Phone Line Traffic & Busy Signals',
    problemDesc: 'Ad campaigns, seasonal promotions, and traffic surges jam phone lines. Callers wait over 10 minutes on hold and hang up frustrated.',
    solutionTitle: 'Massive Concurrent Call Handling',
    solutionDesc: 'Handles 1 call or 10,000+ simultaneous calls at the exact same second without a single busy tone, dropped call, or hold time.',
    badge: 'Concurrent Scaling',
    metric: 'Thousands in Parallel',
    metricDesc: 'Zero queue hold times'
  },
  {
    number: '03',
    problemTitle: 'Slow Outbound Dialing & Rep Burnout',
    problemDesc: 'Human staff manually dial only 40–60 numbers a day, wasting 75% of their working hours on ringtones and voicemails.',
    solutionTitle: 'High-Velocity Outbound Dialing',
    solutionDesc: 'Instantly calls fresh leads within seconds of signup. Overcomes objections with human nuance and delivers booked meetings.',
    badge: 'Outbound Dialing',
    metric: '10x Faster Outreach',
    metricDesc: 'Natural human cadence'
  },
  {
    number: '04',
    problemTitle: 'Endless Phone Tag & Rescheduling',
    problemDesc: 'It takes 4 to 6 back-and-forth messages and calls just to agree on a single 30-minute consultation or property tour.',
    solutionTitle: 'Smart Collaborative Calendar Booking',
    solutionDesc: 'Checks Google Calendar or Outlook live, negotiates agreeable slots in polite, natural speech, and auto-dispatches calendar invites.',
    badge: 'Smart Scheduling',
    metric: '95%+ Attendance',
    metricDesc: 'Zero manual phone tag'
  },
  {
    number: '05',
    problemTitle: 'Sloppy Call Notes & CRM Desync',
    problemDesc: 'Busy reps forget call details, delay logging notes, or misspell contact info, leaving your team\'s sales pipeline invisible.',
    solutionTitle: 'Instant Speech-to-JSON CRM Sync',
    solutionDesc: 'Every conversation is automatically transcribed and distilled into structured CRM data with zero manual typing or delay.',
    badge: 'Data Integrity',
    metric: '100% Automated',
    metricDesc: 'Zero manual data entry'
  },
  {
    number: '06',
    problemTitle: 'Slow Manual Dispatch & Callback Delays',
    problemDesc: 'Manual callbacks take hours or days, causing high lead drop-off and lost customer interest before a human rep connects.',
    solutionTitle: 'Subsecond Instant Outbound Trigger',
    solutionDesc: 'Initiates immediate conversational outreach the moment a lead or ticket registers in your system.',
    badge: 'Instant Dispatch',
    metric: 'Instant Trigger',
    metricDesc: 'Subsecond response'
  }
];

const IndustrySolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('real-estate');
  const containerRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (isClickScrolling.current) return;
    const numTabs = industries.length;
    // Map scroll progress across the 5 industry tabs
    const rawIndex = Math.floor(latest * numTabs);
    const clampedIndex = Math.max(0, Math.min(numTabs - 1, rawIndex));
    const targetId = industries[clampedIndex]?.id;
    if (targetId && targetId !== activeTab) {
      setActiveTab(targetId);
    }
  });

  const activeIndex = industries.findIndex((ind) => ind.id === activeTab);
  const currentIndustry = industries[activeIndex] !== undefined ? industries[activeIndex] : industries[0];

  const handleTabClick = (index: number) => {
    const target = industries[index];
    if (!target) return;
    setActiveTab(target.id);

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const containerTop = rect.top + currentScrollY;
    const scrollableDistance = rect.height - window.innerHeight;

    if (scrollableDistance > 0) {
      isClickScrolling.current = true;
      const targetFraction = (index + 0.5) / industries.length;
      const targetY = containerTop + targetFraction * scrollableDistance;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 700);
    }
  };

  return (
    <section id="solutions" className="relative bg-gradient-to-b from-white via-sky-50/25 to-white border-b border-slate-200/80">
      
      {/* Scroll-Driven Sticky Industry Verticals Track */}
      <div ref={containerRef} className="relative h-[280vh] lg:h-[320vh]">
        <div className="sticky top-20 lg:top-24 z-20 pt-2 pb-4 sm:pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header - Compact Pacing */}
            <div className="text-center mx-auto max-w-3xl mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-xs font-semibold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#2AA7D3]" />
                Industry Solutions &amp; Use Cases
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
                AI Voice Assistants Built for Your Business
              </h2>
            </div>

            {/* Industry Switcher Tabs - Tighter Pacing */}
            <div className="flex items-center justify-start lg:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1.5 mb-4 sm:mb-5 no-scrollbar snap-x">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = ind.id === activeTab;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleTabClick(idx)}
                    className={`group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl font-semibold text-xs whitespace-nowrap transition-all duration-200 snap-start cursor-pointer border ${
                      isActive
                        ? 'bg-[#0F6F94] text-white border-[#0F6F94] shadow-sm shadow-[#0F6F94]/20 ring-2 ring-[#0F6F94]/20'
                        : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border-slate-200 shadow-2xs'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-[#0F6F94] group-hover:scale-110 transition-transform'}`} />
                    <span>{ind.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      0{idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Industry Card - Compact & Snappy */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndustry.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 lg:p-5.5 shadow-[0_4px_24px_rgba(15,111,148,0.05)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                    
                    {/* Left Column: Role & Capabilities */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div className="flex-1 flex flex-col">
                        {/* Role Header */}
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0F6F94] text-[11px] font-mono font-bold uppercase">
                            {currentIndustry.badge}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Inbound + Outbound Ready
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-0.5 tracking-tight">
                          {currentIndustry.role}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-3">
                          {currentIndustry.tagline}
                        </p>

                        {/* Inbound & Outbound Capabilities Grid - Occupies Full Height */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3 flex-1">
                          {/* Inbound Box */}
                          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-1.5 mb-2 text-xs font-bold uppercase tracking-wider text-sky-800">
                              <PhoneIncoming className="w-3.5 h-3.5 text-[#0F6F94]" />
                              <span>24/7 Inbound Answering</span>
                            </div>
                            <ul className="space-y-1.5 flex-1 flex flex-col justify-around">
                              {currentIndustry.inboundCapabilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Outbound Box */}
                          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between h-full">
                            <div className="flex items-center gap-1.5 mb-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
                              <PhoneOutgoing className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Concurrent Outbound Dialing</span>
                            </div>
                            <ul className="space-y-1.5 flex-1 flex flex-col justify-around">
                              {currentIndustry.outboundCapabilities.map((item, i) => (
                                <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700 leading-snug">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Enterprise Core Badges - Fills space with valuable architectural proof points */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-sky-50/70 border border-sky-100 text-slate-700">
                            <Zap className="w-3 h-3 text-[#0F6F94] shrink-0" />
                            <div className="min-w-0">
                              <span className="font-bold text-slate-900 block leading-tight text-[10px] truncate">Instant Answer</span>
                              <span className="text-[9px] text-slate-500 font-mono block leading-none mt-0.5">Instant Response</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-slate-700">
                            <CalendarCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                            <div className="min-w-0">
                              <span className="font-bold text-slate-900 block leading-tight text-[10px] truncate">Calendar Sync</span>
                              <span className="text-[9px] text-slate-500 block leading-none mt-0.5">Google / Outlook</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-teal-50/70 border border-teal-100 text-slate-700">
                            <Database className="w-3 h-3 text-teal-600 shrink-0" />
                            <div className="min-w-0">
                              <span className="font-bold text-slate-900 block leading-tight text-[10px] truncate">CRM Auto-Sync</span>
                              <span className="text-[9px] text-slate-500 block leading-none mt-0.5">Webhook / REST</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>TRAI / DNC Compliant · Enterprise SLA</span>
                        </div>

                      </div>
                    </div>

                    {/* Right Column: Live Simulated Dialogue Card */}
                    <div className="lg:col-span-5 w-full">
                      <div className="rounded-xl border border-slate-200 bg-slate-900 text-slate-100 p-3 sm:p-3.5 shadow-lg relative overflow-hidden">
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[#2AA7D3]/10 rounded-full blur-xl pointer-events-none" />

                        {/* Dialogue Header */}
                        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                            <span className="font-mono text-xs font-bold text-slate-200">
                              Live Voice Interaction
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/80 px-2 py-0.5 rounded">
                            Instant Response
                          </span>
                        </div>

                        {/* Dialogue Exchange */}
                        <div className="space-y-1.5 mb-2 font-sans">
                          {currentIndustry.dialogue.map((turn, idx) => (
                            <div
                              key={idx}
                              className={`p-2 rounded-lg text-xs leading-relaxed ${
                                turn.speaker === 'Caller'
                                  ? 'bg-slate-800/90 text-slate-200 border border-slate-700/60 ml-0 mr-2'
                                  : 'bg-[#0F6F94]/30 text-cyan-100 border border-[#2AA7D3]/40 ml-2 mr-0'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-0.5 font-mono text-[9px] uppercase font-bold text-slate-400">
                                <span>{turn.speaker}</span>
                                {turn.speaker === 'AI Voice Assistant' && (
                                  <span className="text-[#2AA7D3] flex items-center gap-1">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                                    Neural Voice
                                  </span>
                                )}
                              </div>
                              <p>{turn.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* CRM Outcome Summary */}
                        <div className="pt-1.5 border-t border-slate-800 font-mono text-[11px] text-slate-400">
                          <div className="flex items-center justify-between text-emerald-400 font-semibold mb-0.5">
                            <span>Outcome: {currentIndustry.crmOutcome.status}</span>
                            <span className="text-[9px] text-slate-500">Auto-Written</span>
                          </div>
                          <p className="text-[10px] text-slate-300">
                            {currentIndustry.crmOutcome.action}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* The rest of the section: Problems Solved, 6 Cards Grid, Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 sm:py-14 md:py-16">

        {/* Section Transition: Problems Solved - Compact Pacing */}
        <div className="text-center mx-auto max-w-3xl mb-8 sm:mb-10 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            Proven Operational Resolutions
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            The 6 Critical Problems Our Voice Assistant Solves
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Engineered to replace manual call center friction, eliminate unanswered leads, and slash operational overhead.
          </p>
        </div>

        {/* 6 Problems & Solutions Grid - Tight Pacing & Perfectly Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10 items-stretch">
          {enterpriseProblems.map((item) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-slate-200/90 bg-white p-4.5 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group h-full"
            >
              <div className="flex flex-col flex-1">
                {/* Header with Number & Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    PROBLEM {item.number}
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-50 text-[#0F6F94] border border-sky-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Problem Statement - Fixed height ensures divider is identically aligned */}
                <div className="mb-3.5 pb-3.5 border-b border-slate-100 flex flex-col justify-between min-h-[120px] sm:min-h-[124px]">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-600 uppercase tracking-wide mb-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Current Enterprise Pain</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                      {item.problemTitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.problemDesc}
                  </p>
                </div>

                {/* AI Solution Highlighted Box - Flex-1 so all boxes are identical height */}
                <div className="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-slate-50/30 border border-emerald-200/90 shadow-[0_2px_12px_rgba(16,185,129,0.08)] relative overflow-hidden">
                  <div className="relative z-10 flex flex-col justify-between h-full pt-0.5">
                    <div>
                      <div className="inline-flex items-center gap-1.5  py-0.5 rounded-full text-slate-800 text-[10px] font-bold uppercase tracking-wider mb-2 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 shrink-0 stroke-[2.5]" />
                        <span>Our AI Voice Solution</span>
                      </div>
                      <h5 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1 leading-snug tracking-tight">
                        {item.solutionTitle}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal mt-1">
                      {item.solutionDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Card Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-4.5 -mb-4.5 sm:-mx-5 sm:-mb-5 p-3 px-4.5 sm:px-5">
                <span className="text-xs sm:text-sm font-extrabold text-[#0F6F94] block">
                  {item.metric}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {item.metricDesc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
