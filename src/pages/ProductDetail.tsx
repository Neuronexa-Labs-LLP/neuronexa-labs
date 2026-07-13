import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, Server, MessageCircle, Cpu, Star, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ProjectDetails, projectsData } from '../data/projectsData';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<ProjectDetails | null>(null);

    useEffect(() => {
        if (id && projectsData[id]) {
            setProject(projectsData[id]);
            document.title = `${projectsData[id].title} | Neuronexa Labs`;
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-slate-900 text-2xl font-bold">Project not found.</div>
            </div>
        );
    }

    // Animation variants
    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-brand-teal selection:text-white transition-colors duration-300">
            <Helmet>
                <title>{project.title} | Neuronexa Labs Case Study</title>
                <meta name="description" content={project.description} />
                <meta property="og:title" content={`${project.title} - Enterprise Automation Case Study`} />
                <meta property="og:description" content={project.description} />
                <meta property="og:image" content={project.bannerImage} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar />

            {/* Premium Header Banner Area */}
            <div className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-900 border-b border-slate-800">
                {/* Background glow effects */}
                <div className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-[#2AA7D3]/10 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[80px]" />

                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                    <img src={project.bannerImage} alt={`${project.title} Banner`} className="w-full h-full object-cover blur-sm scale-105" />
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20">
                    <Link to="/#projects" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6 group text-xs font-bold uppercase tracking-wider">
                        <ArrowLeft className="w-3.5 h-3.5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="bg-[#E8F4FA]/10 text-[#2AA7D3] border border-[#2AA7D3]/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider block">
                              {project.category}
                          </span>
                          {project.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="px-3 py-1 bg-white/5 text-slate-300 border border-white/5 rounded-full text-[10px] font-bold tracking-wide uppercase">
                                  {tag}
                              </span>
                          ))}
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-semibold">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: Image and Details */}
                    <div className="lg:col-span-8 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-3xl overflow-hidden border border-slate-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.02)] group"
                        >
                            <div className="relative h-[250px] md:h-[400px] overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102" />
                            </div>
                        </motion.div>

                        {/* Challenge & Solution details side by side/stacked */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-2.5 mb-4">
                                  <div className="h-8 w-8 rounded-lg bg-red-50 flex items-center justify-center">
                                    <Cpu className="h-4.5 w-4.5 text-red-500" />
                                  </div>
                                  <h2 className="text-lg font-bold text-slate-900">The Challenge</h2>
                                </div>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">{project.challenge}</p>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                                <div className="flex items-center gap-2.5 mb-4">
                                  <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                                  </div>
                                  <h2 className="text-lg font-bold text-slate-900">Our Solution</h2>
                                </div>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">{project.solution}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Meta Info */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-6 md:p-8 rounded-[24px] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                        >
                            <h3 className="text-sm font-bold text-slate-950 mb-4 flex items-center uppercase tracking-wider">
                                <Server className="w-4 h-4 mr-2 text-[#2AA7D3]" /> Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-1.5">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-2.5 py-1 bg-slate-50 text-slate-800 rounded-lg text-xs font-bold border border-slate-200/60">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Key Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                            className="p-6 md:p-8 rounded-[24px] bg-white border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                        >
                            <h3 className="text-sm font-bold text-slate-950 mb-4 flex items-center uppercase tracking-wider">
                                <BarChart className="w-4 h-4 mr-2 text-[#2AA7D3]" /> Key Outcomes
                            </h3>
                            <ul className="space-y-3.5">
                                {project.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                                          <Star className="w-3 h-3 text-emerald-500 fill-emerald-500" />
                                        </div>
                                        <span className="text-slate-600 font-bold text-xs md:text-sm leading-relaxed">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Custom CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                            className="p-6 md:p-8 rounded-[24px] bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group text-white"
                        >
                            {/* Subtle Glow background */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-[#2AA7D3]/10 rounded-full blur-2xl group-hover:bg-[#2AA7D3]/20 transition-all duration-500"></div>

                            <h3 className="text-base font-bold mb-2 relative z-10 tracking-tight">Need a custom dashboard like this?</h3>
                            <p className="text-slate-400 mb-6 relative z-10 text-xs font-semibold leading-relaxed">Let's discuss how we can engineer a custom solution tailored for your team.</p>
                            <a href="https://wa.me/9110435020" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#2AA7D3] hover:bg-[#1890B8] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg relative z-10 hover:-translate-y-0.5 cursor-pointer text-xs uppercase tracking-wider">
                                Let's Discuss <MessageCircle className="h-4 w-4" />
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetail;
