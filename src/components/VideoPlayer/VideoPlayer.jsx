import React from "react";

const VideoPlayer = () => {
  return (
    <div className="col-md-6">
      <article className="video-item">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yfzRTs662aQ?si=T-InNIfhCuIitkRW"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </article>
    </div>
  );
};

export default VideoPlayer;
