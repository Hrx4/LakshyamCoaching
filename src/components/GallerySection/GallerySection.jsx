import React from "react";
// You can create a SectionHeading component
import GalleryItem from "../GalleryItem/GalleryItem"; // Create a GalleryItem component
import SectionHeading from "../SectionHeading/SectionHeading";
import "./GallerySection.css";
import img_1 from "./img/gallery1.jpg";
import img_2 from "./img/gallery2.jpg";
import img_3 from "./img/gallery3.jpg";
import img_4 from "./img/gallery4.jpg";
const GallerySection = () => {
  return (
    <section className="section-courses" data-section="section4">
      <div className="container-xxl py-5 category">
        <div className="container">
          <SectionHeading title="Students Gallery" />

          <div className="row g-3" style={{justifyContent:"center"}}>
            <div className="component1" style={{width:"38%"}}>
              <div className="component1-1">
                <div className="img-1">
                  <GalleryItem imgSrc={img_1} delay="0.1s" />
                </div>
                <div className="custom">
                  <div className="img-2">
                    <GalleryItem
                      style={{ width: "50%", height: "50%" }}
                      imgSrc={img_2}
                      delay="0.3s"
                      marginTop="10px"
                    />
                  </div>
                  <div className="img-3">
                    <GalleryItem imgSrc={img_3} delay="0.5s" marginTop="10px" />
                  </div>
                </div>
              </div>
            </div>
            <div className="component-2" style={{width:"auto" , marginTop:40}}>
              <div className="img-4">
                {/* <GalleryItem
                imgSrc={img_4}
                delay="0.7s"
                coverImage
              /> */}
                <img src={img_4} alt="jj"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
