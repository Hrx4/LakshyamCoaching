import React from "react";
import './SectionHeading.css'
const SectionHeading = ({ title }) => {
  return (
    <div className="sec-heading-container">
      <div className="section-heading">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default SectionHeading;
