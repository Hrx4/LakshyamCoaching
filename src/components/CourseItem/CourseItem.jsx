import React from "react";
import './CourseItem.css';
const CourseItem = ({ imgSrc, title, description }) => {
  return (
    <div className="item">
      <img src={imgSrc} alt={title} />
      <div className="down-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="text-button-pay">
          <a href="/#">More Details <i className="fa fa-angle-double-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
