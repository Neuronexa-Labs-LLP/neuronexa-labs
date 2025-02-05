"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroSlide from "./HeroSlide";
import { Pagination } from "swiper/modules";

const HeroSlider = () => {
  const slides = [
    {
      title: (
        <>
          We Always <span className="text-secondaryColor">Deliver</span> More Than{" "}
          <span className="ssecondaryColor">Expected</span>
        </>
      ),
      tag: "NeuroNexa Labs",
    },
  ];
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      modules={[Pagination]}
      className={`ecommerce-slider py-150px md:py-200px lg:py-200px 2xl:py-250px 3xl:py-300px pb-150px`} // Added padding-bottom
    >
      {slides.map((slide, idx) => (
        <SwiperSlide className="px-15px" key={idx}>
          <HeroSlide idx={idx} slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
