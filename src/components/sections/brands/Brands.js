import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import React from "react";
import brandImage1 from "@/assets/images/brand/brand_1.png";
import brandImage2 from "@/assets/images/brand/brand_2.png";
import brandImage3 from "@/assets/images/brand/brand_3.png";
import brandImage4 from "@/assets/images/brand/brand_4.png";
import brandImage5 from "@/assets/images/brand/brand_5.png";
import brandImage6 from "@/assets/images/brand/brand_6.png";
import brandImage7 from "@/assets/images/brand/brand_7.png";
import brandImage8 from "@/assets/images/brand/brand_8.png";
import brandImage9 from "@/assets/images/brand/brand_9.png";
import Link from "next/link";
import Image from "next/image";

const TechnologyPlatformsWeUse = () => {
  const brands = [
    {
      image: brandImage1,
      name: "WordPress",
      description:
        "Expert dedicated to seamless website development and tailored customization for a unique online presence",
    },
    {
      image: brandImage2,
      name: "React Js",
      description:
        "Crafting dynamic web solutions with expertise in custom development and responsive design",
    },
    {
      image: brandImage3,
      name: "Shopify",
      description:
        "Shopify specialist shaping e-commerce excellence through tailored development and seamless customization",
    },
    {
      image: brandImage4,
      name: "Node Js",
      description: "Pioneering advancements in cybersecurity",
    },
    {
      image: brandImage5,
      name: "Figma",
      description:
        "Bringing creative visions to life through interactive design masterpieces, with a dedicated focus on achieving UX/UI excellence",
    },
    {
      image: brandImage6,
      name: "HTML 5",
      description:
        "Artisan shaping the digital canvas with clean, semantic, and structured brilliances",
    },
    {
      image: brandImage7,
      name: "CSS",
      description:
        "Sorcerer weaving style magic for visually stunning and responsive web experiences",
    },
    {
      image: brandImage8,
      name: "MySQL",
      description:
        "Enhance data management with our secure database solutions, seamlessly integrated with popular SQL tool for optimal efficiency",
    },
    {
      image: brandImage9,
      name: "mongo DB",
      description:
        "Architect pioneering flexible and scalable database solutions for dynamic data ecosystems",
    },
    {
      image: brandImage9,
      name: "Express JS",
      description:
        "Crafting agile and robust backend solutions for streamlined web applications",
    },
    {
      image: brandImage9,
      name: "Amazon RDS",
      description:
        "Optimizing database management, ensuring reliability and scalability in the cloud",
    },
    {
      image: brandImage9,
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
          <p className="dark:text-contentColor-dark">
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
                className="w-250px flex-shrink-0"
                data-aos="fade-up"
              >
                <Link
                  href="#"
                  className="pt-25px pb-45px text-center w-full flex flex-col items-center"
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

export default TechnologyPlatformsWeUse;
