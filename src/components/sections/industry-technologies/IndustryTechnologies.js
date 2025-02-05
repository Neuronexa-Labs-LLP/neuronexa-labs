import React from "react";
import { FaLaptopCode, FaHeartbeat, FaShoppingCart, FaPlane, FaHospital, FaFlask, FaBrain, FaRobot, FaCogs, FaCar } from "react-icons/fa"; // Importing icons
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import Link from "next/link";

const IndustryTechnologies = () => {
  const brands = [
    {
      icon: <FaLaptopCode className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "IT",
      description:
        "Expert solutions for building scalable and efficient IT infrastructure and services.",
    },
    {
      icon: <FaHeartbeat className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Health Care",
      description:
        "Innovative health tech solutions for improving patient care and medical services.",
    },
    {
      icon: <FaShoppingCart className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "eCommerce",
      description:
        "Creating seamless and optimized eCommerce experiences for better sales performance.",
    },
    {
      icon: <FaPlane className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Tourism",
      description:
        "Developing interactive and engaging digital solutions for the travel industry.",
    },
    {
      icon: <FaHospital className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Hospital",
      description:
        "Building secure and scalable solutions for modern hospital management systems.",
    },
    {
      icon: <FaFlask className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Science and Technology",
      description:
        "Advancing research with high-tech solutions for scientific and technological innovations.",
    },
    {
      icon: <FaBrain className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "AI",
      description:
        "Leveraging artificial intelligence to create intelligent systems and automation.",
    },
    {
      icon: <FaRobot className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Machine Learning",
      description:
        "Enabling advanced machine learning algorithms to create smarter applications.",
    },
    {
      icon: <FaCogs className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Software",
      description:
        "Crafting efficient and reliable software solutions to power modern businesses.",
    },
    {
      icon: <FaCogs className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Hardware",
      description:
        "Designing and developing robust hardware solutions for various industries.",
    },
    {
      icon: <FaCar className="mr-2 text-xl text-gray-600 dark:text-white" />,
      name: "Automobiles",
      description:
        "Revolutionizing the automobile industry with cutting-edge digital and software solutions.",
    },
  ];

  return (
    <section className="bg-lightGrey10 dark:bg-lightGrey10-dark">
      <div className="container pb-60px">
        {/* Brands Heading */}
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          <HeadingPrimary
            text="center"
            className="font-bold"
            style={{ fontSize: "4rem", color: "#4A4A4A" }}  // Inline style for larger size and gray color
          >
            Mastering Every Terrain
          </HeadingPrimary>
          <HeadingPrimary text="center">No Industry Unexplored</HeadingPrimary>
          <div className="text-center">
          <p className="dark:text-gray-400">
            At NeuroNexa Labs, we understand that every industry has unique digital requirements and challenges. Our comprehensive web development services cater to a diverse clientele, from startups to established enterprises across various sectors. Whether you are looking to build a brand-new website or enhance an existing web application, our expert team is dedicated to turning your online platform into a robust sales powerhouse.
          </p>
          </div>
        </div>

        {/* Brands Sliding */}
        <div className="overflow-x-hidden">
          <div className="flex animate-marquee gap-5">
            {/* Brands */}
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="w-250px flex-shrink-0"
                data-aos="fade-up"
              >
                <Link
                  href="#"
                  className="pt-25px pb-45px text-center w-full flex flex-col items-center"
                >
                  {/* Brand Icon */}
                  <div className="mb-5">
                    {brand.icon}
                  </div>
                  {/* Brand Name */}
                  <h4 className="text-lg font-bold dark:text-contentColor-dark">{brand.name}</h4>
                  {/* Brand Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">{brand.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Sliding (Repeated) */}
        <div className="overflow-x-hidden">
          <div className="flex animate-marquee gap-5">
            {/* Brands */}
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="w-250px flex-shrink-0"
                data-aos="fade-up"
              >
                <Link
                  href="#"
                  className="pt-25px pb-45px text-center w-full flex flex-col items-center"
                >
                  {/* Brand Icon */}
                  <div className="mb-5">
                    {brand.icon}
                  </div>
                  {/* Brand Name */}
                  <h4 className="text-lg font-bold dark:text-contentColor-dark">{brand.name}</h4>
                  {/* Brand Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">{brand.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTechnologies;
