import React from "react";
import './TabArticle.css'
const TabArticle = ({ id, imgSrc, title, description }) => {
  return (
    <article id={id}>
      <div className="row">
        <div >
          <img src={imgSrc} alt="" className="img-container"/>
        </div>
        <div className="col-md-6">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
};

export default TabArticle;
