import React from "react";
// import './BannerCard.css'
const BannerCard = ({ title, content }) => {
  return (
    <div className="features-post">
      <div className="features-content">
        <div className="content-show">
          <h4><i className="cardtitle"></i>{title}</h4>
        </div>
        <div className="content-hide">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};


export default BannerCard;
