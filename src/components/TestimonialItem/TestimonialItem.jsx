import React from "react";

const TestimonialItem = ({ imgSrc, name, role, text }) => {
  return (
    <div className="testimonial-item text-center">
      <img
        className="border rounded-circle p-2 mx-auto mb-3"
        src={imgSrc}
        style={{ width: "80px", height: "80px" }}
        alt=""
      />
      <h5 className="mb-0">{name}</h5>
      <p>{role}</p>
      <div className="testimonial-text bg-light text-center p-4">
        <p className="mb-0">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;
