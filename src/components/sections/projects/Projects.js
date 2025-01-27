'use client'; // Add this at the top to indicate a Client Component

import { useState } from "react"; // Import useState
import Image from "next/image";
import aiImage1 from "@/assets/images/program/ai_1.jpg";
import aiImage2 from "@/assets/images/program/ai_2.jpg";
import aiImage3 from "@/assets/images/program/ai_3.jpg";
import aiImage4 from "@/assets/images/program/ai_4.jpg";
import Project from "@/components/sections/projects/Project"; // Import Project component
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary"; // Import HeadingPrimary

const Projects = () => {
  // Program data to display
  const programs = [
    {
      projectNumber: 1,
      category: "IT",
      title: "TECHNOLOGY",
      link: "abc.com",
      image: aiImage1,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
    {
      projectNumber: 2,
      category: "IT",
      title: "Classifying Best Intelligence Photos",
      link: "abc.com",
      image: aiImage2,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
    {
      projectNumber: 3,
      category: "IT",
      title: "Industry Labor Machine",
      link: "abc.com",
      image: aiImage3,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
    {
      projectNumber: 4,
      category: "IT",
      title: "Education Super AI Studies",
      link: "abc.com",
      image: aiImage4,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
  ];

  // State to manage which projects are displayed
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Handle "Explore More" button click
  const handleExploreMore = () => {
    setShowAllProjects(true);
  };

  // Handle "Show Less" button click
  const handleShowLess = () => {
    setShowAllProjects(false);
  };

  return (
    <section id="OurProjects">
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left side with Heading and Description (30%) */}
          <div data-aos="fade-up" className="lg:col-span-4">
            <HeadingPrimary>
              Get a Glimpse of the Amazing Projects We Have Worked on
            </HeadingPrimary>
          </div>

          {/* Right side with Programs Grid (70%) */}
          <div data-aos="fade-up" className="lg:col-span-8">
            {/* For larger screens (laptop and above), display as horizontal sliding bar */}
            <div className="hidden lg:block overflow-x-auto">
              {/* Flex box with wrapping cards for large screens */}
              <div className="flex space-x-6">
                {programs.map((program, idx) => (
                  <div key={idx} className="w-[300px] p-4 flex-none">
                    <Project program={program} />
                  </div>
                ))}
              </div>
            </div>

            {/* For smaller screens (mobile), initially show 2 projects */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {programs.slice(0, 2).map((program, idx) => (
                <div key={idx} className="w-full p-4">
                  <Project program={program} />
                </div>
              ))}
            </div>

            {/* Show the remaining projects when "Explore More" is clicked */}
            {showAllProjects && (
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {programs.slice(2).map((program, idx) => (
                  <div key={idx} className="w-full p-4">
                    <Project program={program} />
                  </div>
                ))}
              </div>
            )}

            {/* Explore More button */}
            {!showAllProjects && (
              <div className="lg:hidden text-center mt-6">
                <button
                  onClick={handleExploreMore}
                  className="px-8 py-3 bg-primaryColor text-white font-semibold rounded-md hover:bg-primaryColorDark transition-colors duration-300"
                >
                  Show More
                </button>
              </div>
            )}

            {/* Show Less button when all projects are displayed */}
            {showAllProjects && (
              <div className="lg:hidden text-center mt-6">
                <button
                  onClick={handleShowLess}
                  className="px-8 py-3 bg-primaryColor text-white font-semibold rounded-md hover:bg-primaryColorDark transition-colors duration-300"
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
