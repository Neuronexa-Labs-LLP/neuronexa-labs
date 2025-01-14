"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import TestimonialSlide2 from "./TestimonialSlide2";
import { Navigation } from "swiper/modules";
import testimonialImage2 from "@/assets/images/testimonial/testi_2.png";
const TestimonialsSlider2 = () => {
  const testimonials = [
    {
      name: "Mirnsdo Jons",
      image: testimonialImage2,
      desig: "Ui/Ux Designer",
      desc1: "The digital world is constantly changing, but our commitment to your success is steadfast. We provide continual support and maintenance post-launch to ensure your web presence remains strong and secure.",
      desc2: "Partner with Neuronexa Labs, where industry knowledge meets web development expertise. Elevate your online presence to reflect the quality and values of your business while harnessing the power of digital technology to thrive in the digital era. Contact us to discuss your industry-specific web solution today."
    },
  ];
  return (
    <Swiper
      className="testimonial2 "
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      {testimonials.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialSlide2 testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TestimonialsSlider2;
