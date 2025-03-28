"use client";

import { useRef, useState, useEffect } from "react";

const Background = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // This effect will only run once when the component mounts
    // The video will persist across page navigations
    if (videoRef.current && !isVideoLoaded) {
      setIsVideoLoaded(true);
    }
  }, [isVideoLoaded]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {/* Main background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/assets/bg-universe.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        />
      </div>

      {/* Footer accent - more opacity at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-100%" />
    </div>
  );
};

export default Background;
