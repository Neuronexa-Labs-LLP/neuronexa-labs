import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../pages/ProductDetail';

const ProjectsSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  // Measure dynamic DOM bounds on mount and resize to perfectly hit the container edge
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (trackRef.current && window.innerWidth >= 768) {
        // We translate the container exactly its overflown amount so its right edge hits the right viewport edge
        setScrollRange(trackRef.current.scrollWidth - window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Apply heavily damped spring physics to scrollYProgress to completely mask mouse-wheel notch stepping ("skipping")
  const springScroll = useSpring(scrollYProgress, { stiffness: 400, damping: 90, mass: 0.1 });

  const projects = Object.values(projectsData);
  
  // Interpolate exactly to the pixel bounds
  const x = useTransform(springScroll, [0, 1], [0, -scrollRange]);

  // Mobile Native Stack Return
  if (isMobile) {
    return (
      <section id="projects" className="relative bg-black py-24 border-t border-white/5">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-[#00A7E1] tracking-[0.3em] text-sm font-bold uppercase mb-4">
             Portfolio // Systems Enabled
          </h2>
        </div>
        
        <div className="flex flex-col gap-10 px-4">
          {projects.map((project) => (
             <motion.div 
               key={project.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-10%" }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="w-full relative rounded-[2rem] overflow-hidden group h-[50vh] min-h-[400px] border border-white/10"
             >
               <Link to={`/projects/${project.id}`} className="block h-full w-full relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover filter brightness-50" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>
                 <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <span className="text-[#00A7E1] text-xs font-mono tracking-widest block mb-2">
                       CLICK TO VIEW ARCHIVE
                    </span>
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tight leading-none">
                       {project.title}
                    </h3>
                    <p className="text-gray-400 font-light text-base line-clamp-2">
                       {project.description}
                    </p>
                 </div>
               </Link>
             </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Cinematic Horizontal Track
  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-black">
        
        {/* Background ambient glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
           <div className="w-[100vw] h-[50vh] bg-gradient-to-r from-[#003A4F] to-[#00A7E1] blur-[200px] mix-blend-screen"></div>
        </div>

        {/* Section Title indicator fixed to center tracking */}
        <div className="absolute top-24 md:top-32 left-8 md:left-24 z-20">
           <h2 className="text-[#00A7E1] tracking-[0.3em] text-sm md:text-base font-bold uppercase">
              Portfolio // Systems Enabled
           </h2>
        </div>

        {/* The horizontal scrolling track */}
        <motion.div 
          ref={trackRef}
          style={{ x }} 
          className="flex w-max h-[70vh] items-center relative z-10 shrink-0 px-[10vw]"
        >
          {projects.map((project) => {
            return (
              <div 
                key={project.id} 
                className="w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 h-full mx-4 md:mx-8 relative group"
              >
                <Link to={`/projects/${project.id}`} className="block h-full w-full relative overflow-hidden rounded-3xl cursor-none">
                  {/* Image with extreme parallax zoom effect on hover */}
                  <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-110">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700" />
                  </div>
                  
                  {/* Film gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-[#00A7E1] text-xs md:text-sm font-mono tracking-widest block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        CLICK TO VIEW ARCHIVE
                     </span>
                     <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-none">
                        {project.title}
                     </h3>
                     <p className="text-gray-400 font-light text-lg md:text-xl line-clamp-2 max-w-xl">
                        {project.description}
                     </p>
                  </div>

                  {/* Aesthetic borders */}
                  <div className="absolute top-8 right-8 border-t-2 border-r-2 border-[#00A7E1] w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-[#00A7E1] w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                </Link>
              </div>
            );
          })}
        </motion.div>

        {/* Right side fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      </div>
    </section>
  );
};

export default ProjectsSection;