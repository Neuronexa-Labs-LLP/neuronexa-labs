import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  tags: string[];
}

const ProjectsSection: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<number | null>(null);

  const projects: CaseStudy[] = [
    {
      id: 1,
      title: "Vedims",
      category: "Learning Management System",
      description: "Vedims is a scalable Learning Management System designed to deliver structured, curriculum-driven learning experiences with a strong focus on skill development, assessments, and learner progress tracking.",
      challenge: "Designing a flexible LMS that supports structured courses, assessments, and analytics while keeping learners engaged across different age groups.",
      solution: "We built a full-featured LMS with course management, interactive lessons, quizzes, certifications, and detailed learner analytics, enabling educators to manage content effectively and learners to track their progress seamlessly.",
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: [
        "Learning Management System",
        "Ed-Tech Platform",
        "Course Management",
        "Assessments & Analytics",
        "Progress Tracking"
      ]
    },
    {
      id: 2,
      title: "HRMS Solution",
      category: "Business Solutions",
      description: "Streamline HR operations with our all-in-one solution for smarter workforce management.",
      challenge: "Managing workforce operations efficiently while reducing manual errors and improving employee satisfaction.",
      solution: "We developed a comprehensive HRMS platform with features like payroll management, attendance tracking, and performance evaluation tools.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["HRMS", "Workforce Management", "Payroll", "Employee Satisfaction"]
    },
    {
      id: 3,
      title: "Medblik",
      category: "Healthcare IT",
      description: "A smart app to find nearby hospitals, clinics, and pharmacies across Bangalore in seconds.",
      challenge: "Providing a seamless and accurate way for users to locate healthcare facilities in a bustling city like Bangalore.",
      solution: "We developed a location-based app with real-time data integration, user-friendly search filters, and detailed facility information.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Healthcare", "Location-Based Services", "Real-Time Data", "User-Friendly"]
    },
    {
      id: 4,
      title: "AgTech",
      category: "E-Commerce",
      description: "A scalable e-commerce platform with admin control and secure payment integration.",
      challenge: "Building a robust platform to handle high traffic, secure transactions, and provide comprehensive admin controls.",
      solution: "We developed a scalable e-commerce solution with features like inventory management, secure payment gateways, and an intuitive admin dashboard.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["E-Commerce", "Scalability", "Secure Payments", "Admin Control"]
    },
    {
      id: 5,
      title: "Mentor Recommendation System",
      category: "AI Solutions",
      description: "An Agentic AI-powered system that recommends the right mentors based on user goals and behavior.",
      challenge: "Creating a system that accurately matches users with mentors based on their unique goals and behavioral patterns.",
      solution: "We developed an AI-driven recommendation engine that analyzes user data and preferences to suggest the most suitable mentors.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AI", "Mentor Matching", "Recommendation System", "User Behavior"]
    },
    {
      id: 6,
      title: "Digital Marketing",
      category: "Marketing Solutions",
      description: "Data-driven digital marketing services to boost reach, engagement, and conversions.",
      challenge: "Helping businesses effectively reach their target audience and maximize ROI through digital channels.",
      solution: "We implemented data-driven strategies, including SEO, PPC, and social media campaigns, tailored to client goals.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Digital Marketing", "SEO", "PPC", "Engagement"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Explore how we've helped businesses solve complex challenges with custom technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">{project.description}</p>
                {activeStudy === project.id && (
                  <div className="text-gray-600 space-y-4">
                    <p><strong>Challenge:</strong> {project.challenge}</p>
                    <p><strong>Solution:</strong> {project.solution}</p>
                    <div>
                      <strong>Tags:</strong>
                      <ul className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <li key={index} className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setActiveStudy(activeStudy === project.id ? null : project.id)}
                  className="mt-4 flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  {activeStudy === project.id ? 'Show Less' : 'Read More'}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;