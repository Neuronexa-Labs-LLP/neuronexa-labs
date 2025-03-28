"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import aboutImage from "@/assets/images/about/about_ai.jpg";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import emailjs from "emailjs-com"; // Import EmailJS
import { DotLottie } from "@lottiefiles/dotlottie-web"; // Import DotLottie

const UserFeedback = () => {
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

    // Log form data to the console to make sure it's being collected
    console.log("Form data:", formData);

    // Prepare template parameters to send to EmailJS
    const templateParams = {
      fullName,   // Matches {{fullName}} in the template
      phone,      // Matches {{phone}} in the template
      email,      // Matches {{email}} in the template
      services,   // Matches {{services}} in the template
      company,    // Matches {{company}} in the template
      message,    // Matches {{message}} in the template
    };

    // Use EmailJS to send the email
    emailjs
      .send("service_ruehvaj", "template_86emdi2", templateParams, "I3ghLf1eskQ5JuHPi")
      .then(
        (response) => {
          // Log success message to console
          console.log("Email sent successfully", response);
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
          // Log error details to console for debugging
          console.error("EmailJS error:", error);
          alert("An error occurred. Please try again.");
        }
      );
  };

  // Reference to the canvas element
  const canvasRef = useRef(null);

  // Initialize Lottie animation
  useEffect(() => {
    if (canvasRef.current) {
      const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvasRef.current,
        src: "https://lottie.host/750d02bb-2afc-4b7e-997b-663dfbf667bb/JqN0BS1gDk.lottie", // Replace with your .lottie or .json file URL
      });

      // Cleanup on unmount
      return () => {
        dotLottie.destroy();
      };
    }
  }, []);



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

          {/* Right section: Lottie Animation */}
          <div data-aos="fade-up">
            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
            ></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
