"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const ShowReel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState<number>();
  const [videoProgress, setVideoProgress] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      const loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [videoProgress, videoDuration, isPaused]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-full">
      <div className="absolute top-4 right-4 flex gap-2 justify-end z-10">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          onPlayPause={togglePlayPause}
          isMuted={isMuted}
          onMuteUnmute={toggleMute}
        />
      </div>
      <video
        className="absolute object-cover object-center w-full h-full bg-white/10"
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/videos/fire.mp4" type="video/mp4" />
        Anna Seheda showreel.
      </video>
    </section>
  );
};
export default ShowReel;
