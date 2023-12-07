import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./GalleryPage.css";
import img_1 from "./pics/img11.jpeg"
import img_2 from "./pics/img2.jpeg";
import img_3 from "./pics/img3.jpeg";
import img_4 from "./pics/img4.jpeg";
import img_5 from "./pics/img10.jpeg";
import img_6 from "./pics/img6.jpeg";
import img_7 from "./pics/img7.jpeg";
import img_8 from "./pics/img8.jpeg";

const GalleryPage = () => {
  return (
    <section className="GPsection-courses" data-section="section4">
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
          <div style={{height:700 , width:"100%" , marginTop:20}}>
            <div className="gallery__container" style={{width:"95%",height:"100%" , margin:"auto" , display:"flex", justifyContent:"space-between" }}>
              <div className="image__right" style={{ height:"100%"  , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }}>
                <div  style={{height:"60%" , width:"100%", overflow:"hidden" }}>
                <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_5} alt="" />
                </div>
                <div style={{height:"39%" , width:"100%" , display:"flex" , justifyContent:"space-between"}}>
                  <div style={{width:"49%" , height:"100%", overflow:"hidden"  }}>
                  <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_6} alt="" />
                  </div>
                  <div style={{width:"49%" , height:"100%", overflow:"hidden" }}>
                  <img  className="image__grow"style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_7} alt="" />
                  </div>
                </div>
              </div>
              <div className="image__left" style={{ height:"100%"  , overflow:"hidden" }}>
                <img className="image__grow" style={{height:"100%" , width:"100%" , objectFit:"cover" , transition:".3s all ease-in-out" }} src={img_8} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
