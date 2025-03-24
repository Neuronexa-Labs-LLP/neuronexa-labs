import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import React from "react";
import WordPress from "@/assets/images/brand/wordpress.png";
import ReactJS from "@/assets/images/brand/reactjs.png";
import Aws from "@/assets/images/brand/aws.png";
import PowerBI from "@/assets/images/brand/powerbi.png";
import NodeJS from "@/assets/images/brand/nodejs.png";
import Flutter from "@/assets/images/brand/flutter.png";
import IOS from "@/assets/images/brand/ios.png";
import Figma from "@/assets/images/brand/figma.png";



import Link from "next/link";
import Image from "next/image";

const TechnologyPlatforms = () => {
  const brands = [
    {
      image: WordPress,
      name: "WordPress",
      description:
        "Expert dedicated to seamless website development and tailored customization for a unique online presence",
    },
    {
      image: ReactJS,
      name: "React Js",
      description:
        "Crafting dynamic web solutions with expertise in custom development and responsive design",
    },
    {
      image: Aws,
      name: "AWS",
      description:
        "Navigating businesses through the cloud, architecting scalable solutions for successs",
    },
    {
      image: PowerBI,
      name: "Power BI",
      description: "Transforming raw data into actionable insights with intuitive visual analytics.",
    },

    {
      image: NodeJS,
      name: "Node Js",
      description: "Building scalable and high-performance backend solutions.",
    },
    {
      image: Flutter,
      name: "Flutter",
      description:
        "Building natively compiled, beautiful mobile apps with a single codebase.",
    },
    {
      image: IOS,
      name: "iOS",
      description:
        "Engineering seamless and high-performance applications for the Apple ecosystem.",
    },
    {
      image: Figma,
      name: "Figma",
      description:
        "Bringing creative visions to life through interactive design masterpieces, with a dedicated focus on achieving UX/UI excellence",
    },
  ];

  return (
    <section className="bg-lightGrey10 dark:bg-lightGrey10-dark">
      <div className="container pb-60px">
        {/* Brands Heading */}
        <div className="mb-5 md:mb-10" data-aos="fade-up">
          <HeadingPrimary text="center">Technology Platforms We Use</HeadingPrimary>
          <p className="dark:text-contentColor-dark text-center">
            Our tech stack is carefully selected to ensure reliability,
            scalability, and security, catering to the diverse needs of our
            clients across various industries.
          </p>
        </div>

        {/* Brands Sliding */}
        <div className="overflow-x-hidden">
          <div className="flex animate-marquee gap-5 w-[200%]">
            {/* Duplicate items for smooth infinite scrolling */}
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="w-250px flex-shrink-0" data-aos="fade-up">
                <Link
                  href="#"
                  className="pt-25px pb-45px text-center w-full flex flex-col items-center"
                >
                  {/* Brand Icon */}
                  <div className="mb-5">{brand.icon}</div>
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

export default TechnologyPlatforms;
