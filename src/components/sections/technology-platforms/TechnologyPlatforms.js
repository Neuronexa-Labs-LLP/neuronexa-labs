"use client";

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
import './brandsSlider.css';
import { useRef, useState } from 'react';

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

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

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
        <div
          className="noselect brands-wrapper overflow-hidden cursor-grab active:cursor-grabbing"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="brands-track flex gap-5 w-max animate-marquee">
            {[...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="w-[250px] flex-shrink-0" data-aos="fade-up">
                <div className="pt-[25px] pb-[45px] text-center w-full flex flex-col items-center">
                  <div className="mb-5">
                    <Image src={brand.image} alt={brand.name} width={60} height={60} />
                  </div>
                  <h4 className="text-lg font-bold dark:text-contentColor-dark">{brand.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnologyPlatforms;
