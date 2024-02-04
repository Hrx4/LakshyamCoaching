import React, { useRef } from "react";
import myVideo from "../../assets/images/ytvideo.mp4";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <div className="col-md-6">
      <video ref={videoRef} controls loop muted autoPlay style={{height:"100%" , width:"100%"}}>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
    </div>
  );
};

export default VideoPlayer;
