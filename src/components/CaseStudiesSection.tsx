import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import AnimatedText from './jack/AnimatedText';
import Magnet from './jack/Magnet';

const ProjectsSection: React.FC = () => {
  const projects = Object.values(projectsData);

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#FAFBFC] overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[#2AA7D3]/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-[#2AA7D3]/20 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-5 shadow-sm"
          >
            <Layers className="h-3 w-3 text-[#2AA7D3]" />
            Our Portfolio
          </motion.div>

          <AnimatedText 
            text="Solutions we've engineered"
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-700 text-base font-medium mt-3 max-w-xl"
          >
            Real projects. Real impact. Here's how we've helped businesses transform with technology.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                variants={{ hover: { y: -10, scale: 1.02 } }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ type: "spring", stiffness: 200, duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 hover:border-[#2AA7D3]/30 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_48px_rgba(42,167,211,0.08)] transition-shadow duration-500 flex flex-col h-full"
              >
                {/* Image */}
                <Link to={`/projects/${project.id}`} className="block relative h-52 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-[10px] font-extrabold text-slate-900 border border-white/50 shadow-sm uppercase tracking-wider z-10">
                    {project.category}
                  </span>

                  {/* Hover external link icon */}
                  <Magnet padding={20} disabled={false} magnetStrength={2}>
                    <div className="absolute top-4 right-4 h-8 w-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 z-10">
                      <ExternalLink className="h-3.5 w-3.5 text-slate-800" />
                    </div>
                  </Magnet>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-800 rounded-md text-[10px] font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#2AA7D3] transition-colors duration-300 leading-snug">
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-700 text-sm leading-relaxed font-medium line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-1 mt-4 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[9px] font-bold text-[#2AA7D3] bg-[#2AA7D3]/[0.06] rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[9px] font-bold text-slate-500 bg-slate-50 rounded-md">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-xs font-bold text-[#2AA7D3] hover:text-[#0F172A] transition-colors duration-300 gap-1.5"
                    >
                      View Case Study
                      <motion.div variants={{ hover: { x: 5 } }} transition={{ type: "spring" }}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 md:mt-16 bg-white border border-slate-200/60 rounded-2xl p-5 md:p-8 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900">{projects.length}+</p>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-0.5">Projects Delivered</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900">98%</p>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-0.5">Client Satisfaction</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block" />
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-extrabold text-slate-900">5+</p>
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-0.5">Industries Served</p>
            </div>
          </div>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#0F172A] hover:bg-[#2AA7D3] text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors duration-300 flex items-center gap-2 shadow-sm cursor-pointer"
          >
            Start Your Project <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;