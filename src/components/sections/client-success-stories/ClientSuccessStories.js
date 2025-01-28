'use client'; // Mark this as a client component

import dynamic from 'next/dynamic';
import Image from "next/image";
import teacherImage3 from "@/assets/images/teacher/teacher__3.png";
import teacherImage4 from "@/assets/images/teacher/teacher__4.png";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const client_stories = [
  {
    image: teacherImage3,
    name: "Basith Adka",
    position: "Marketing Head at AMEC UAE",
    heading: "Awesome Experience!",
    description:
      "The level of patience, and knowledge displayed was simply phenomenal throughout the entire process. The product was everything that I imagined it would be."
  },
  {
    image: teacherImage4,
    name: "Akshay P",
    position: "Marketing Director st Snugg A Bear",
    heading: "I Am Overjoyed With The Outcomes",
    description:
      "I am overjoyed with the outcomes WDS delivered with its excellent eCommerce development services. Working with their developers was a breeze, and they brought my vision to life precisely as had envisioned Their expertise and excellent customer service truly stood out"
  },
  {
    image: teacherImage4,
    name: "Akshay P",
    position: "Marketing Director st Snugg A Bear",
    heading: "I Am Overjoyed With The Outcomes",
    description:
      "I am overjoyed with the outcomes WDS delivered with its excellent eCommerce development services. Working with their developers was a breeze, and they brought my vision to life precisely as had envisioned Their expertise and excellent customer service truly stood out"
  },
];

const ClientSuccessStories = () => {
  return (
    <section id='ClientSuccessStories'>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <HeadingPrimary text="center">Client Success Stories</HeadingPrimary>
        <br />
        <br />
        
        {/* Swiper container */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Map over the client_stories and create SwiperSlide for each */}
          {client_stories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-start justify-between p-5 bg-white rounded-lg shadow-md">
                {/* Left Side - Image, Name, Position */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center space-y-3 mb-5 md:mb-0">
                  <Image
                    src={item.image}
                    alt={`Feedback Image ${index + 1}`}
                    width={150}
                    height={150}
                    className="object-contain rounded-lg"
                  />
                  <div className="text-center">
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-2">{item.position}</div>
                  </div>
                </div>

                {/* Right Side - Heading, Description */}
                <div className="w-full md:w-2/3 pl-5 flex flex-col justify-start">
                  <HeadingPrimary className="mb-2">{item.heading}</HeadingPrimary>
                  <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark pl-3 border-l-[3px] border-secondaryColor">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSuccessStories;
