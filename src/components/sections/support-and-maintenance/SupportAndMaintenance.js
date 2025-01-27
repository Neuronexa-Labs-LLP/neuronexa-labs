import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

const SupportMaintenance = () => {
  return (
    <section id="Support&Maintenance">
      <div className="testimonial bg-lightGrey10 dark:bg-lightGrey10-dark relative z-0 overflow-hidden">
        <div className="container py-50px md:py-70px lg:py-20 2xl:pt-145px 2xl:pb-154px">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-30px lg:gap-0">
            {/* testimonial Left */}
            <div data-aos="fade-up">
              <HeadingPrimary>
                Ongoing Support and Maintenance
              </HeadingPrimary>
              <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor text-left">
              The digital world is constantly changing, but our commitment to your success is steadfast. We provide continual support and maintenance post-launch to ensure your web presence remains strong and secure.
            </p>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
            Partner with Neuronexa Labs, where industry knowledge meets web development expertise. Elevate your online presence to reflect the quality and values of your business while harnessing the power of digital technology to thrive in the digital era. Contact us to discuss your industry-specific web solution today.
            </p>
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

export default SupportMaintenance;
