import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import TestimonialsSlider2 from "@/components/shared/testimonials/TestimonialsSlider2";
import SectionNameSecondary from "@/components/shared/section-names/SectionNameSecondary";
import HeadingPrimaryXl from "@/components/shared/headings/HeadingPrimaryXl ";

const Testimonials2 = () => {
  return (
    <section>
      <div className="testimonial bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-hidden">
        <div className="container py-50px md:py-70px lg:py-20 2xl:pt-145px 2xl:pb-154px">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px lg:gap-0">
            {/* testimonial Left */}
            <div data-aos="fade-up">
              <HeadingPrimaryXl>
                Ongoing Support and Maintenance
              </HeadingPrimaryXl>

              {/* Swiper */}
              <TestimonialsSlider2 />
            </div>
            {/* testimonial right (Replaced with WhatsApp button) */}
            <div data-aos="fade-up" className="flex justify-center items-center">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/message/JJEEGZUSAFCGA1" // Updated link to the desired WhatsApp message link
                target="_blank" // Open WhatsApp in a new tab
                className="flex items-center text-size-12 2xl:text-size-15 text-whiteColor bg-[#25D366] block border-[#25D366] border hover:bg-[#128C7E] hover:text-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
              >
                {/* WhatsApp Icon */}
                <FaWhatsapp className="mr-2 text-xl" />
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
