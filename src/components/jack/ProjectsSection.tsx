import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Layers } from 'lucide-react';
import FadeIn from './FadeIn';
import { projectsData } from '../../data/projectsData';
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const projects = Object.values(projectsData);

  return (
    <section id="projects" ref={containerRef} className="relative bg-[#FAFBFC] pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn className="mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-[#2AA7D3]/20 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold mb-5 shadow-sm">
            <Layers className="h-3 w-3 text-[#2AA7D3]" />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Solutions we've <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2AA7D3] to-blue-600">engineered</span>
          </h2>
        </FadeIn>

        {/* Sticky Stacking Projects */}
        <div className="mt-10">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - 1 - i) * 0.03;
            return (
              <ProjectCard 
                key={project.id}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * (1 / projects.length), 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>

      </div>
    </section>
  );
};

const ProjectCard: React.FC<{
  project: typeof projectsData[keyof typeof projectsData];
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}> = ({ project, i, progress, range, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Calculate scaling for the sticky stacking effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative w-full max-w-5xl bg-white border border-slate-200 shadow-2xl shadow-[#2AA7D3]/5 rounded-3xl md:rounded-[40px] p-6 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 md:gap-16 transform-origin-top"
      >
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-sm font-extrabold text-[#2AA7D3] uppercase tracking-widest mb-4">
            {project.category}
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1.5 bg-[#FAFBFC] border border-slate-100 rounded-lg text-xs font-bold text-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to={`/projects/${project.id}`}>
              <button className="bg-[#0F172A] hover:bg-[#2AA7D3] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-300">
                View Case Study
              </button>
            </Link>
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 relative aspect-square md:aspect-[4/5] rounded-2xl md:rounded-[32px] overflow-hidden bg-slate-100">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
