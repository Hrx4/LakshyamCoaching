import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./GallerySection.css";
import img_1 from "./img/img1.jpeg"
import img_2 from "./img/img2.jpeg";
import img_3 from "./img/img3.jpeg";
import img_4 from "./img/img4.jpeg";
const GallerySection = () => {
  return (
    <section className="Gsection-courses" data-section="section4">
      <div className="container-xxl py-5 category">
        <div className="container">
          <SectionHeading title="Students Gallery" />
          <div style={{height:700 , width:"100%"}}>
            <div className="gallery__container" style={{width:"95%",height:"100%" , margin:"auto" , display:"flex", justifyContent:"space-between" }}>
              <div className="image__right" style={{ height:"100%"  , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }}>
                <div  style={{height:"60%" , width:"100%", overflow:"hidden" }}>
                <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_1} alt="" />
                </div>
                <div style={{height:"39%" , width:"100%" , display:"flex" , justifyContent:"space-between"}}>
                  <div style={{width:"49%" , height:"100%", overflow:"hidden"  }}>
                  <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_2} alt="" />
                  </div>
                  <div style={{width:"49%" , height:"100%", overflow:"hidden" }}>
                  <img  className="image__grow"style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_3} alt="" />
                  </div>
                </div>
              </div>
              <div className="image__left" style={{ height:"100%"  , overflow:"hidden" }}>
                <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_4} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
