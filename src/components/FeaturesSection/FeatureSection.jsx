import React from "react";
import "./FeatureSection.css";
import data from "./bannerData.json";


// import BannerCard from "../BannerCard/BannerCard";

const FeaturesSection = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="feature-main-container" style={{width:800}}>
        {data.map((card) => (
          <div className="feature-main-container-sub" style={{padding:5}} key={card.id}>
            <div style={{ height: "30px", display:'flex' }}>
              <div style={{ }}>
                <i className={card?.iconClass}></i>
              </div>
              <p style={{fontSize:25}} className="feature-main-container-sub-p1">{card?.title}</p>
            </div>
            <div>
              <p style={{ fontSize:12 , marginTop:10}} className="feature-main-container-sub-p2">{card?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
