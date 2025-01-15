"use client";
import React, { useState } from "react";
import Image from "next/image";
import aboutImage from "@/assets/images/about/about_ai.jpg";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import emailjs from "emailjs-com"; // Import EmailJS

const About6 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: "",
    company: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Custom validation for email field
    if (name === "email") {
      const emailInput = e.target;
      if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please match the requested format.");
      } else {
        emailInput.setCustomValidity("");
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const { fullName, phone, email, services, company, message } = formData;

    // Prepare template parameters to send to EmailJS
    const templateParams = {
      fullName,
      phone,
      email,
      services,
      company,
      message,
    };

    // Use EmailJS to send the email
    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_user_id")
      .then(
        (response) => {
          // On successful submission
          alert("Your message has been sent!");
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            services: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          // On error, log the error details for debugging
          console.error("EmailJS error:", error);
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <section id="Feedback">
      <HeadingPrimary text="center">We’d Love to Hear From You</HeadingPrimary>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* Left section: Form with Box and Shadow */}
          <div data-aos="fade-up" className="2xl:mr-65px">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              {/* New Heading */}
              <h2 className="text-2xl font-semibold text-center mb-6 text-primaryColor">
                Let's Make Something Great Together
              </h2>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Full Name Input */}
                <div className="form-group mb-4">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                {/* Phone Input */}
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                {/* Email Input */}
                <div className="form-group mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                {/* Services Input */}
                <div className="form-group mb-4">
                  <input
                    type="text"
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder="Services Interested In"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                {/* Company Name Input */}
                <div className="form-group mb-4">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>

                {/* Message Input */}
                <div className="form-group mb-4">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primaryColor text-white font-bold rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right section: Image */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt">
                <Image
                  className="w-full rounded-lg2"
                  src={aboutImage}
                  alt="About Us"
                  placeholder="blur"
                />
              </div>
            </TiltWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
