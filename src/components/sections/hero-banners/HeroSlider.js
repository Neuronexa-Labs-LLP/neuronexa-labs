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
      className={`ecommerce-slider py-50px md:py-100px lg:pt-100px lg:pb-150px 2xl:pt-155px 2xl:pb-180px 3xl:pb-250px`}
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
