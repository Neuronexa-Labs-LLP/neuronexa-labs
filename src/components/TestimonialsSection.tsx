import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Praveen Kulkarni",
      position: "Founder",
      company: "Vedims",
      quote: "The platform Neuronexa Labs built for us has transformed how students engage with Mental Maths. The gamified approach has made learning fun and effective!",
      rating: 5
    },
    {
      id: 2,
      name: "Rohit Mehta",
      position: "HR Manager",
      company: "India",
      quote: "Neuronexa Labs streamlined our HR operations with their comprehensive platform. It has significantly reduced manual errors and improved employee satisfaction.",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Sangmesh",
      position: "Healthcare Consultant",
      company: "Medblik",
      quote: "The Medblik app has been a game-changer for healthcare accessibility in Bangalore. Finding nearby facilities is now effortless!",
      rating: 5
    },
    {
      id: 4,
      name: "Arun Rajpurohit",
      position: "Founder",
      company: "AgTech",
      quote: "Our e-commerce platform is now scalable and secure, thanks to Neuronexa Labs. The admin controls are intuitive and efficient.",
      rating: 5
    },
    {
      id: 5,
      name: "Sneha Kapoor",
      position: "Product Manager",
      company: "India",
      quote: "The AI-powered recommendation system has been a huge success. It accurately matches users with mentors, enhancing their learning journey.",
      rating: 5
    },
    {
      id: 6,
      name: "Amit Roy",
      position: "Owner",
      company: "Gokarna Resort",
      quote: "Neuronexa Labs' data-driven strategies have boosted our online engagement and conversions. Their expertise in digital marketing is commendable!",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // ... existing code ...

  return (
    <section className="py-24 bg-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Don't take our word for it. Hear from the businesses we've helped transform with our technical solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="relative h-auto overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 flex flex-col items-center p-6"
                >
                  <blockquote className="bg-white rounded-xl shadow-lg p-8 relative w-full">
                    <p className="text-gray-700 text-lg relative z-10 mb-6 text-center italic">
                      “{testimonial.quote}”
                    </p>
                    <footer className="text-center">
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.position}, {testimonial.company}
                      </p>
                      <div className="mt-4 flex justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 text-yellow-400 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                          </svg>
                        ))}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-indigo-600 w-8' : 'bg-indigo-300'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-white rounded-full shadow-lg p-3 text-gray-800 hover:bg-indigo-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-white rounded-full shadow-lg p-3 text-gray-800 hover:bg-indigo-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;