import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop type validation
import "./MainBanner.css";
import FeaturesSection from "../FeaturesSection/FeatureSection";

const MainBanner = ({ heading6, heading2a, heading2b, videoSource,buttonText,showFeaturesSection  }) => {
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
      <section className="section-main-banner" id="top" data-section="section1" style={{height:710}} >
        <div className="bg-video">
          <video ref={videoRef} controls loop muted>
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-overlay header-text">
          <div className="caption">
            <h6 style={{color:"white", fontSize:25}}>{heading6}</h6>
            <h2 style={{color:"white" , fontSize:60}}>
              <em>{heading2a}</em> {heading2b}
            </h2>
            {buttonText && ( // Conditionally render the button if buttonText is provided
              <div style={{fontSize:20}} className="main-button">
                <div className="scroll-to-section">
                  <Link to="/about">{buttonText}</Link>
                </div>
              </div>
            )}
          </div>
        {showFeaturesSection && <FeaturesSection />}
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
