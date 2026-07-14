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
