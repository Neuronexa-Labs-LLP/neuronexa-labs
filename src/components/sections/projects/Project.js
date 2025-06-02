import Image from "next/image";
import React from "react";

const Project = ({ program }) => {
  const { projectNumber, category, title, link, image, description } = program;

  return (
    <div className="shadow-dropdown-secodary p-6 mb-4 border border-gray-200 w-full rounded-xl" data-aos="fade-up">
      {/* Project Number */}
      <p className="text-6xl font-semibold text-gray-200 mb-4 pb-6">
        {projectNumber}
      </p>

      {/* Category */}
      <p className="text-gray-600 font-bold uppercase mb-4">
        {category}
      </p>

      {/* Project Title */}
      <h4 className="text-2xl md:text-size-34 lg:text-2xl 2xl:text-xl 3xl:text-size-34 font-bold mb-4">
        {title}
      </h4>

      {/* Project Link */}
      <p className="text-gray-600 font-bold uppercase mb-4">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {link}
        </a>
      </p>

      {/* Project Image */}
      <div className="p-2 mb-4">
        <Image src={image} alt={title} className="w-full rounded-lg" />
      </div>

      {/* Project Description */}
      <p className="text-sm text-gray-800 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Project;   