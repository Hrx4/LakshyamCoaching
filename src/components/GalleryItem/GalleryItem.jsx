import React from "react";
import './GalleryItem.css'
const GalleryItem = ({ imgSrc, delay, marginTop, coverImage }) => {
  const imageStyle = {
    objectFit: coverImage ? "cover" : "initial",
  };

  return (
    <div className="ddd" data-wow-delay={delay}>
      <a
        className={` ${marginTop}`}
        href="/"
      >
        <img className="img-fluid" src={imgSrc} alt="" style={imageStyle} />
      </a>
    </div>
  );
};

export default GalleryItem;
