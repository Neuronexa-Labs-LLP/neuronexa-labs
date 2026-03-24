import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle2, Server, Smartphone, Monitor } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Project Data interface matching our needs
export interface ProjectDetails {
    id: string;
    title: string;
    category: string;
    description: string;
    challenge: string;
    solution: string;
    results: string[];
    techStack: string[];
    image: string;
    bannerImage: string;
    tags: string[];
}

export const projectsData: Record<string, ProjectDetails> = {
    "vedims": {
        id: "vedims",
        title: "Vedims LMS",
        category: "Learning Management System",
        description: "Vedims is a scalable Learning Management System designed to deliver structured, curriculum-driven learning experiences with a strong focus on skill development, assessments, and learner progress tracking.",
        challenge: "Designing a flexible LMS that supports structured courses, assessments, and analytics while keeping learners engaged across different age groups. Existing platforms were too rigid or overly complex for their target audience.",
        solution: "We built a full-featured, AI-powered LMS with clean UI. Features include course management, interactive lessons, quizzes, certifications, and detailed learner analytics. The platform enables educators to manage content effectively and track real-time progress.",
        results: [
            "Significantly boosted student engagement and interactive participation",
            "Streamlined administrative workflows and reduced manual overhead",
            "Successfully scaled infrastructure to support a massive active learner base"
        ],
        techStack: ["React", "Node.js", "AI Recommendation Engine", "MongoDB", "AWS"],
        image: "/projects/vedims.png",
        bannerImage: "/projects/vedims.png",
        tags: ["Ed-Tech", "Course Management", "Analytics", "Progress Tracking"]
    },
    "hrms": {
        id: "hrms",
        title: "HRMS Solution",
        category: "Business Solutions",
        description: "Streamline HR operations with our all-in-one solution for smarter workforce management.",
        challenge: "Managing workforce operations efficiently while reducing manual errors and improving employee satisfaction in a rapidly scaling enterprise.",
        solution: "We developed a comprehensive HRMS platform with an elegant dark-mode dashboard featuring payroll management, attendance tracking, and AI-driven performance evaluation tools.",
        results: [
            "Automated core HR tasks for seamless daily operations",
            "Enhanced payroll accuracy and processing efficiency",
            "Empowered employees with intuitive self-service portals"
        ],
        techStack: ["Vue.js", "Python", "PostgreSQL", "Docker"],
        image: "/projects/hrms.png",
        bannerImage: "/projects/hrms.png",
        tags: ["HRMS", "Workforce Management", "Payroll", "Automation"]
    },
    "medblik": {
        id: "medblik",
        title: "Medblik Locator",
        category: "Healthcare IT",
        description: "A smart app to find nearby hospitals, clinics, and pharmacies across the city in seconds.",
        challenge: "Providing a seamless and highly accurate way for users to locate healthcare facilities during emergencies or regular checkups in a bustling urban environment.",
        solution: "We developed a high-performance location-based app with real-time data integration, advanced mapping UI, user-friendly search filters, and detailed facility information including current wait times.",
        results: [
            "Attracted a large, active user base immediately upon launch",
            "Drastically reduced the time required to search for emergency facilities",
            "Successfully integrated with hundreds of healthcare providers citywide"
        ],
        techStack: ["React Native", "Google Maps API", "Node.js", "Redis"],
        image: "/projects/medblik.png",
        bannerImage: "/projects/medblik.png",
        tags: ["Healthcare", "Location-Based", "Real-Time Data", "Mobile App"]
    },
    "agtech": {
        id: "agtech",
        title: "AgTech E-Commerce",
        category: "E-Commerce",
        description: "A scalable e-commerce platform with agricultural tech theme, admin control, and secure payment integration.",
        challenge: "Building a robust platform tailored for agricultural products, capable of handling high traffic, secure transactions, and providing comprehensive admin inventory controls.",
        solution: "We developed a scalable e-commerce solution with features like IoT inventory management integration, secure payment gateways, and an intuitive dark-themed admin dashboard for farm-to-table logistics.",
        results: [
            "Processed high-volume transactions securely and reliably",
            "Maintained perfect uptime during peak seasonal demand",
            "Optimized complex supply chain and logistics workflows"
        ],
        techStack: ["Next.js", "Stripe", "GraphQL", "PostgreSQL"],
        image: "/projects/agtech.png",
        bannerImage: "/projects/agtech.png",
        tags: ["E-Commerce", "AgTech", "Secure Payments", "Admin Control"]
    },
    "mentor-ai": {
        id: "mentor-ai",
        title: "Mentor Recommendation System",
        category: "AI Solutions",
        description: "An Agentic AI-powered system that recommends the right mentors based on user goals and behavior.",
        challenge: "Creating a system that accurately matches users with mentors based on their unique, complex goals and behavioral patterns over time, outperforming simple tag-based matching.",
        solution: "We developed a sophisticated node-graph based AI recommendation engine that analyzes deep user data, soft skills, and preferences to dynamically suggest the most suitable long-term mentors.",
        results: [
            "Substantially improved the success rate of mentor-mentee pairings",
            "Accelerated the matching process from weeks to mere seconds",
            "Achieved overwhelmingly positive feedback from enterprise users"
        ],
        techStack: ["Python", "TensorFlow", "React", "Neo4j Graph Database"],
        image: "/projects/mentor.png",
        bannerImage: "/projects/mentor.png",
        tags: ["AI", "Mentor Matching", "Neural Network", "Recommendation System"]
    },
    "digital-marketing": {
        id: "digital-marketing",
        title: "Digital Marketing Analytics",
        category: "Marketing Solutions",
        description: "Data-driven digital marketing services dashboard to boost reach, engagement, and conversions.",
        challenge: "Helping businesses effectively track and maximize their ROI across multiple digital channels through disjointed data sources.",
        solution: "We implemented a premium analytics dashboard consolidating SEO, PPC, and social media data into actionable, glowing charts that give real-time marketing pulse.",
        results: [
            "Delivered a measurable, substantial increase in client return on investment",
            "Unified complex reporting from multiple networks into a cohesive dashboard",
            "Enabled proactive budget allocation leveraging machine learning models"
        ],
        techStack: ["React", "D3.js", "Snowflake", "AWS Lambda"],
        image: "/projects/digital-marketing.png",
        bannerImage: "/projects/digital-marketing.png",
        tags: ["Analytics", "Big Data", "SEO", "Dashboard"]
    }
};

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<ProjectDetails | null>(null);

    useEffect(() => {
        if (id && projectsData[id]) {
            setProject(projectsData[id]);
            document.title = `${projectsData[id].title} | Neuronexa Labs`;
        }
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-[#002231] flex items-center justify-center transition-colors">
                <div className="text-gray-900 dark:text-white text-2xl font-semibold">Project not found.</div>
            </div>
        );
    }

    // Animation variants
    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-[#00A7E1] selection:text-white transition-colors duration-300">
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

            {/* Hero Banner Area */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#003A4F]">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#002231] to-transparent z-10"></div>
                    <img src={project.bannerImage} alt={`${project.title} Banner Background`} className="w-full h-full object-cover blur-sm scale-105" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <Link to="/#projects" className="inline-flex items-center text-[#00A7E1] hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#00A7E1]/10 dark:bg-[#00A7E1]/20 text-[#00A7E1] dark:text-[#E6F7FC] border border-[#00A7E1]/30 rounded-full text-sm font-medium tracking-wide">
                                {project.category}
                            </span>
                            {project.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/80 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent dark:border-white/10 rounded-full text-sm font-medium tracking-wide shadow-sm dark:shadow-none">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-200 dark:text-gray-300 max-w-2xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16 -mt-10 relative z-30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Image and Details */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#003A4F]/40 backdrop-blur-xl mb-12 group"
                        >
                            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#003A4F] to-transparent opacity-60"></div>
                            </div>
                        </motion.div>

                        {/* Challenge & Solution */}
                        <div className="space-y-12">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Challenge</h2>
                                <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#002231] shadow-lg border border-gray-100 dark:border-[#00A7E1]/20">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{project.challenge}</p>
                                </div>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Solution</h2>
                                <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#00A7E1]/10 to-[#003A4F]/10 dark:from-[#00A7E1]/20 dark:to-[#003A4F]/40 border border-[#00A7E1]/30">
                                    <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">{project.solution}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Meta Info */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                            className="p-8 rounded-2xl bg-white dark:bg-[#003A4F]/80 shadow-xl border border-gray-100 dark:border-white/10 backdrop-blur-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Server className="w-5 h-5 mr-3 text-[#00A7E1]" /> Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1.5 bg-[#F5F9FB] dark:bg-[#002231] text-[#003A4F] dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-white/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Key Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                            className="p-8 rounded-2xl bg-white dark:bg-[#003A4F]/80 shadow-xl border border-gray-100 dark:border-white/10 backdrop-blur-md"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                                <Monitor className="w-5 h-5 mr-3 text-[#00A7E1]" /> Key Outcomes
                            </h3>
                            <ul className="space-y-4">
                                {project.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-[#00A7E1] mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-[#00A7E1] to-[#003A4F] shadow-2xl relative overflow-hidden group"
                        >
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500"></div>

                            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to build something similar?</h3>
                            <p className="text-[#E6F7FC] mb-8 relative z-10 opacity-90">Let's discuss how we can engineer a custom solution for your enterprise.</p>
                            <a href="https://wa.me/9110435020" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full py-3 px-6 bg-white text-[#003A4F] font-bold rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl relative z-10">
                                Discuss Your Project
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
