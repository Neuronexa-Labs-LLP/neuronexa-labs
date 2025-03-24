'use client'; // Mark this as a client component

import aiImage1 from "@/assets/images/program/ai_1.png";
import aiImage2 from "@/assets/images/program/ai_2.jpg";
import aiImage3 from "@/assets/images/program/ai_3.jpg";
import aiImage4 from "@/assets/images/program/ai_4.jpg";
import Project from "@/components/sections/projects/Project"; // Import Project component
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary"; // Import HeadingPrimary

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination } from 'swiper/modules';

const Projects = () => {
  // Program data to display
  const programs = [
    {
      projectNumber: 1,
      category: "LMS",
      title: "Vedims",
      link: "vedims.com",
      image: aiImage1,
      description:
        "VEDIMS is an innovative ed-tech platform dedicated to making Mental maths and related ancient subjects engaging and accessible for students of all ages. Vedim combines the timeless techniques of Vedic knowledge with modern technology, creating an interactive platform that makes complex concepts simple, intuitive, and fun. With a user-friendly interface, engaging lessons, and practical exercises, Vedim ensures that students not only excel in academics but also develop a love for mathematics and critical thinking.",
    },
    {
      projectNumber: 2,
      category: "E-Commerce",
      title: "Ag Tech",
      link: "Flutter App",
      image: aiImage2,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
    {
      projectNumber: 3,
      category: "HRMS Tool",
      title: "HRMS Platform",
      link: "ERP",
      image: aiImage3,
      description:
        "Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.",
    },
    {
      projectNumber: 4,
      category: "Health",
      title: "Medblik",
      link: "Flutter App",
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
            {/* Swiper for larger screens (laptop and above), display as horizontal sliding bar */}
            <div className="hidden lg:block">
              <Swiper
                slidesPerView={2} // Number of slides visible at once
                spaceBetween={20} // Space between slides
                centeredSlides={true} // Ensure the selected slide is centered
                loop={true}
                pagination={{
                  clickable: true, // Clickable pagination dots
                }}
                modules={[Pagination]} // Add pagination module
                grabCursor={true} // Make cursor draggable
                draggable={true} // Allow dragging of the slides
                className="mySwiper"
              >
                {programs.map((program, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="w-full p-4">
                      <Project program={program} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>


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
