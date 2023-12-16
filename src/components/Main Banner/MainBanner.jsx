import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import "./MainBanner.css";


const MainBanner = ({ heading6, heading2a, heading2b, videoSource,buttonText  }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay the video when the component mounts
    videoRef.current.play().catch((error) => {
      // Autoplay failed, handle the error here (e.g., due to browser restrictions)
      console.error("Autoplay failed:", error);
    });
  }, []);

  return (
    <div>
      <section className="section-main-banner" id="top" data-section="section1" style={{height:400}} >
        <div className="bg-video">
          <video ref={videoRef} controls loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-overlay header-text">
          <div className="caption">
            <h6 style={{color:"white", fontSize:35, letterSpacing:"1px", marginBottom:"2rem"}}>{heading6}</h6>
            <h2 style={{color:"white" , fontSize:60}}>
              <em>{heading2a}</em> {heading2b}
            </h2>
            {buttonText && ( 
              <div style={{fontSize:15}} className="main-button">
                <div className="scroll-to-section">
                  <Link to="/freetutorial">{buttonText}</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

// Define PropTypes for validation
MainBanner.propTypes = {
  heading6: PropTypes.string.isRequired,
  heading2a: PropTypes.string.isRequired,
  heading2b: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
};

export default MainBanner;
