import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import React from "react";
import WordPress from "@/assets/images/brand/wordpress.png";
import ReactJS from "@/assets/images/brand/reactjs.png";
import Shopify from "@/assets/images/brand/shopify.png";
import NodeJS from "@/assets/images/brand/nodejs.png";
import Figma from "@/assets/images/brand/figma.png";
import Html5 from "@/assets/images/brand/html5.png";
import Css from "@/assets/images/brand/css.png";
import MySQL from "@/assets/images/brand/mysql.png";
import MongoDb from "@/assets/images/brand/mongoDB.png";
import ExpressJS from "@/assets/images/brand/expressjs.png";
import AmazonRDS from "@/assets/images/brand/amazonRDS.png";
import Aws from "@/assets/images/brand/aws.png";



import Link from "next/link";
import Image from "next/image";

const TechnologyPlatformsWeUse = () => {
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
      image: Shopify,
      name: "Shopify",
      description:
        "Shopify specialist shaping e-commerce excellence through tailored development and seamless customization",
    },
    {
      image: NodeJS,
      name: "Node Js",
      description: "Pioneering advancements in cybersecurity",
    },
    {
      image: Figma,
      name: "Figma",
      description:
        "Bringing creative visions to life through interactive design masterpieces, with a dedicated focus on achieving UX/UI excellence",
    },
    {
      image: Html5,
      name: "HTML 5",
      description:
        "Artisan shaping the digital canvas with clean, semantic, and structured brilliances",
    },
    {
      image: Css,
      name: "CSS",
      description:
        "Sorcerer weaving style magic for visually stunning and responsive web experiences",
    },
    {
      image: MySQL,
      name: "MySQL",
      description:
        "Enhance data management with our secure database solutions, seamlessly integrated with popular SQL tool for optimal efficiency",
    },
    {
      image: MongoDb,
      name: "mongo DB",
      description:
        "Architect pioneering flexible and scalable database solutions for dynamic data ecosystems",
    },
    {
      image: ExpressJS,
      name: "Express JS",
      description:
        "Crafting agile and robust backend solutions for streamlined web applications",
    },
    {
      image: AmazonRDS,
      name: "Amazon RDS",
      description:
        "Optimizing database management, ensuring reliability and scalability in the cloud",
    },
    {
      image: Aws,
      name: "AWS",
      description:
        "Navigating businesses through the cloud, architecting scalable solutions for successs",
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
          <div className="flex animate-marquee gap-5">
            {/* Brands */}
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="w-250px flex-shrink-0 text-center flex flex-col items-center justify-center"
                data-aos="fade-up" 
              >
                  {/* Brand Image */}
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    className="mb-5 w-[120px] h-[120px] object-contain"
                  />
                  {/* Brand Name */}
                  <h4 className="text-lg font-bold dark:text-contentColor-dark">{brand.name}</h4>
                  {/* Brand Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {brand.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatformsWeUse;
