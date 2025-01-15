import React from "react";
import Service from "./Service";

const Services = ({ subjects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-30px">
      {subjects.map((subject, idx) => (
        <Service key={idx} subject={subject} />
      ))}
    </div>
  );
};

export default Services;
