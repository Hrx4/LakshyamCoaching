import React from "react";
import VideoContent from "../VideoContent/VideoContent";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import './VideoSection.css'


const VideoSection = () => {
  return (
    <section className="section video" data-section="section5" style={{paddingTop:80 , paddingBottom:80}}>
      <div className="container">
        <div className="row">
          <VideoContent />
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
