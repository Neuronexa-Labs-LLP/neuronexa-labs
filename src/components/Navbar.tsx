"use client";
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, ChevronDown, Bot, Globe, ShieldCheck, Smartphone, Megaphone, Phone, CalendarCheck, UserCheck, Headset, LayoutDashboard, FileText, BarChart3, ArrowRight, Layout, Briefcase, MapPin, ShoppingBag, Brain, Zap, Mic, Search, Calendar, LifeBuoy, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../assets/nnlabs-logo-hd.png';

import { LucideIcon } from 'lucide-react';

interface ServiceItem {
  label: string;
  icon: LucideIcon;
  desc: string;
  link?: string;
}

interface Category {
  title: string;
  items: ServiceItem[];
}

interface ProjectItem {
  label: string;
  icon: LucideIcon;
  desc: string;
  link: string;
}

const categorizedServices: Category[] = [
  {
    title: 'Autonomous AI Agents',
    items: [
      { label: 'AI Automation', icon: Zap, desc: 'Intelligent workflow automation', link: '/services/ai-automation' },
      { label: 'Voice Assistants', icon: Mic, desc: 'Enterprise AI voice assistants', link: '/services/ai-voice-agent' },
      { label: 'Lead Qualification', icon: Search, desc: 'Smart lead scoring & routing', link: '/services/lead-qualification' },
      { label: 'Appointment Scheduling', icon: Calendar, desc: 'Automated booking & reminders', link: '/services/appointment-scheduling' },
    ]
  },
  {
    title: 'Custom Engineering',
    items: [
      { label: 'Website Development', icon: Layout, desc: 'Custom web applications', link: '/services/website-development' },
      { label: 'Mobile App Development', icon: Smartphone, desc: 'iOS & Android applications', link: '/services/mobile-app-development' },
      { label: 'Solution Support Services', icon: LifeBuoy, desc: '24/7 managed solution support', link: '/services/solution-support' },
    ]
  },
  {
    title: 'Growth & Security',
    items: [
      { label: 'Digital Marketing', icon: TrendingUp, desc: 'SEO, PPC & growth strategies', link: '/services/digital-marketing' },
      { label: 'Content & Marketing', icon: FileText, desc: 'Content strategy & creation', link: '/services/content-marketing' },
      { label: 'Security & Validation', icon: ShieldCheck, desc: 'Security compliance & audits', link: '/services/security-validation' },
      { label: 'Outbound Campaigns', icon: Megaphone, desc: 'Multi-channel outreach at scale', link: '/services/outbound-campaigns' },
    ]
  }
];

const projectsList: ProjectItem[] = [
  { label: 'Vedims LMS', icon: Layout, desc: 'Scalable learning management', link: '/projects/vedims' },
  { label: 'HRMS Solution', icon: Briefcase, desc: 'All-in-one workforce portal', link: '/projects/hrms' },
  { label: 'Medblik Locator', icon: MapPin, desc: 'Real-time emergency facility finder', link: '/projects/medblik' },
  { label: 'AgTech E-Commerce', icon: ShoppingBag, desc: 'Agricultural tech themed store', link: '/projects/agtech' },
  { label: 'Mentor AI Matcher', icon: Brain, desc: 'AI-powered network routing', link: '/projects/mentor-ai' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (projectsRef.current && !projectsRef.current.contains(target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const handleProjectsEnter = () => {
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setProjectsOpen(true);
  };

  const handleProjectsLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => setProjectsOpen(false), 200);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9110435020', '_blank');
  };

  const navLinks: any[] = [];

  return (
    <nav className={`fixed top-4 left-4 right-4 md:top-6 md:left-24 md:right-24 z-50 transition-all duration-300 rounded-2xl border ${
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md border-slate-200/80'
        : 'bg-white/70 backdrop-blur-sm border-slate-100/50 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-2 md:px-4 flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="flex items-center">
          <img src={logo.src} alt="NeuroNexa Labs" width={200} height={56} className="h-12 md:h-14 w-auto object-contain cursor-pointer" fetchPriority="high" loading="eager" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isHomePage && (
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors cursor-pointer"
            >
              Home
            </Link>
          )}

          {/* Services Dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              href="/services"
              className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors flex items-center gap-1"
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full right-[-180px] mt-4 w-[840px] bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 z-50 bg-gradient-to-b from-white to-slate-50/50"
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 right-[205px] w-4 h-4 bg-white border-l border-t border-slate-200/80 rotate-45" />

                  <div className="grid grid-cols-3 gap-6">
                    {categorizedServices.map((category) => (
                      <div key={category.title} className="flex flex-col">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-3 border-b border-slate-100 pb-2 px-1">
                          {category.title}
                        </p>
                        <div className="flex flex-col gap-1">
                          {category.items.map((item) => {
                            const linkClass = "flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer";
                            const content = (
                              <>
                                <div className="h-7 w-7 rounded-lg bg-[#EEF8FF] group-hover:bg-brand-navy flex items-center justify-center shrink-0 transition-colors">
                                  <item.icon className="h-3.5 w-3.5 text-brand-navy group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <p className="text-[12.5px] font-bold text-slate-800 group-hover:text-brand-navy transition-colors leading-tight">
                                    {item.label}
                                  </p>
                                  <p className="text-[9.5px] text-slate-400 font-medium mt-0.5 leading-snug">
                                    {item.desc}
                                  </p>
                                </div>
                              </>
                            );
                            return item.link ? (
                              <Link
                                key={item.label}
                                href={item.link}
                                onClick={() => setServicesOpen(false)}
                                className={linkClass}
                              >
                                {content}
                              </Link>
                            ) : (
                              <div
                                key={item.label}
                                className="flex items-start gap-2.5 p-2 rounded-xl text-slate-400 cursor-default"
                              >
                                <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                                  <item.icon className="h-3.5 w-3.5 text-slate-400" />
                                </div>
                                <div>
                                  <p className="text-[12.5px] font-bold text-slate-400 leading-tight">
                                    {item.label}
                                  </p>
                                  <p className="text-[9.5px] text-slate-300 font-medium mt-0.5 leading-snug">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between px-1">
                    <p className="text-[11px] text-slate-400 font-medium">Need a customized integration for your workspace?</p>
                    <a
                      href="/#contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-[11px] font-bold text-brand-navy hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      Contact Us <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Projects Dropdown */}
          <div
            ref={projectsRef}
            className="relative"
            onMouseEnter={handleProjectsEnter}
            onMouseLeave={handleProjectsLeave}
          >
            <button
              type="button"
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-1"
            >
              Projects
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {projectsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full right-[-80px] mt-4 w-[360px] bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-4 z-50 bg-gradient-to-b from-white to-slate-50/50"
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 right-[105px] w-4 h-4 bg-white border-l border-t border-slate-200/80 rotate-45" />

                  <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-3 border-b border-slate-100 pb-2 px-1">
                    Featured Case Studies
                  </p>

                  <div className="flex flex-col gap-1">
                    {projectsList.map((project) => (
                      <Link
                        key={project.label}
                        href={project.link}
                        onClick={() => setProjectsOpen(false)}
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="h-7 w-7 rounded-lg bg-[#EEF8FF] group-hover:bg-brand-navy flex items-center justify-center shrink-0 transition-colors">
                          <project.icon className="h-3.5 w-3.5 text-brand-navy group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-bold text-slate-800 group-hover:text-brand-navy transition-colors leading-tight">
                            {project.label}
                          </p>
                          <p className="text-[9.5px] text-slate-400 font-medium mt-0.5 leading-snug">
                            {project.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-end px-1">
                    <a
                      href="/#projects"
                      onClick={() => setProjectsOpen(false)}
                      className="text-[11px] font-bold text-brand-navy hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1"
                    >
                      View Portfolio <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            link.path ? (
              <Link
                key={link.id}
                href={link.path}
                className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.id}
                href={`/#${link.id}`}
                className="text-sm font-semibold text-slate-700 hover:text-brand-teal transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            )
          ))}



          <button
            onClick={handleWhatsAppClick}
            className="bg-brand-navy hover:bg-brand-teal text-white px-5 py-2 rounded-xl text-sm font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            Let's Talk <MessageCircle className="h-4 w-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 cursor-pointer" aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 overflow-hidden rounded-b-2xl"
          >
            <div className="px-5 py-6 flex flex-col gap-2">
              {!isHomePage && (
                <Link
                  href="/"
                  className="text-base font-semibold text-slate-800 hover:text-brand-teal transition-colors py-2.5 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}

              {/* Mobile Services Accordion */}
              <div>
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between text-base font-semibold text-slate-800 hover:text-brand-teal transition-colors py-2.5 cursor-pointer"
                >
                  Services
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); setMobileServicesOpen(!mobileServicesOpen); }}
                    className="p-2"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </Link>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-2 pb-2 flex flex-col gap-4">
                        {categorizedServices.map((category) => (
                          <div key={category.title} className="flex flex-col gap-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400 border-b border-slate-100 pb-1.5 mb-1">
                              {category.title}
                            </p>
                            {category.items.map((item) => {
                              const mobileClass = "flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer";
                              const mobileContent = (
                                <>
                                  <div className="h-7 w-7 rounded-lg bg-[#EEF8FF] flex items-center justify-center shrink-0">
                                    <item.icon className="h-3.5 w-3.5 text-brand-navy" />
                                  </div>
                                  <span className="text-[13px] font-semibold text-slate-700">{item.label}</span>
                                </>
                              );
                              return item.link ? (
                                <Link
                                  key={item.label}
                                  href={item.link}
                                  onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                  className={mobileClass}
                                >
                                  {mobileContent}
                                </Link>
                              ) : (
                                <div
                                  key={item.label}
                                  className="flex items-center gap-3 px-2 py-2 rounded-xl cursor-default"
                                >
                                  <div className="h-7 w-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                                    <item.icon className="h-3.5 w-3.5 text-slate-400" />
                                  </div>
                                  <span className="text-[13px] font-semibold text-slate-400">{item.label}</span>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Projects Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="w-full flex items-center justify-between text-base font-semibold text-slate-800 hover:text-brand-teal transition-colors py-2.5 cursor-pointer"
                >
                  Projects
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileProjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-2 pb-2 flex flex-col gap-2">
                        {projectsList.map((project) => (
                          <Link
                            key={project.label}
                            href={project.link}
                            onClick={() => { setIsOpen(false); setMobileProjectsOpen(false); }}
                            className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            <div className="h-7 w-7 rounded-lg bg-[#EEF8FF] flex items-center justify-center shrink-0">
                              <project.icon className="h-3.5 w-3.5 text-brand-navy" />
                            </div>
                            <span className="text-[13px] font-semibold text-slate-700">{project.label}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                link.path ? (
                  <Link
                    key={link.id}
                    href={link.path}
                    className="text-base font-semibold text-slate-800 hover:text-brand-teal transition-colors py-2.5 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    className="text-base font-semibold text-slate-800 hover:text-brand-teal transition-colors py-2.5 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}



              <button
                onClick={() => { setIsOpen(false); handleWhatsAppClick(); }}
                className="bg-brand-navy hover:bg-brand-teal text-white px-5 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                Let's Talk <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

