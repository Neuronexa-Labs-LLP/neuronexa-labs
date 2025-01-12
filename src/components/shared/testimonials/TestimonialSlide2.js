import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialSlide2 = ({ testimonial }) => {
  const { name, image, desig, desc1, desc2 } = testimonial;
  return (
    <div>
      <p className="md:text-xl md:leading-10 text-lightGrey dark:text-whiteColor">
        <br></br>
        {desc1}
        <br></br>
        <br></br>
        {desc2}
      </p>
    </div>
  );
};

export default TestimonialSlide2;
