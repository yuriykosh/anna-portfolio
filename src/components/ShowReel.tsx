// "use client";

// import { useEffect, useRef, useState } from "react";
// import VideoPlayerControls from "./VideoPlayerControls";

// interface FullscreenVideoElement extends HTMLVideoElement {
//   webkitRequestFullscreen?: () => Promise<void>;
//   mozRequestFullScreen?: () => Promise<void>;
//   msRequestFullscreen?: () => Promise<void>;
// }

// const ShowReel = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const videoRef = useRef<FullscreenVideoElement>(null);
//   const [videoDuration, setVideoDuration] = useState<number>();
//   const [videoProgress, setVideoProgress] = useState<number>(0);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       setVideoDuration(video.duration);
//     }
//   }, []);

//   useEffect(() => {
//     if (isPaused) return;
//     const currentTime = videoRef.current?.currentTime;
//     if (videoDuration != null && currentTime != null) {
//       const loadingTimeout = setTimeout(() => {
//         if (videoProgress == currentTime / videoDuration) {
//           setVideoProgress((prev) => prev + 0.000001);
//         } else {
//           setVideoProgress(currentTime / videoDuration);
//         }
//       }, 10);

//       return () => {
//         clearTimeout(loadingTimeout);
//       };
//     }
//   }, [videoProgress, videoDuration, isPaused]);

//   const togglePlayPause = () => {
//     const video = videoRef.current;
//     if (video) {
//       setIsPaused(!video.paused);
//       if (video.paused) {
//         video.play();
//       } else {
//         video.pause();
//       }
//     }
//   };

//   const toggleMute = () => {
//     const video = videoRef.current;
//     if (video) {
//       video.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const toggleFullscreen = () => {
//     const video = videoRef.current;
//     if (video) {
//       if (video.requestFullscreen) {
//         video.requestFullscreen();
//       } else if (video.webkitRequestFullscreen) {
//         video.webkitRequestFullscreen(); // Safari
//       } else if (video.mozRequestFullScreen) {
//         video.mozRequestFullScreen(); // Firefox
//       } else if (video.msRequestFullscreen) {
//         video.msRequestFullscreen(); // IE/Edge
//       }
//     }
//   };

//   return (
//     <section className="relative w-full h-full">
//       <div className="absolute top-4 right-4 h-[calc(100%-32px)] flex flex-col gap-2 items-end justify-between z-10 mix-blend-difference">
//         <VideoPlayerControls
//           progress={videoProgress}
//           isPaused={isPaused}
//           onPlayPause={togglePlayPause}
//           isMuted={isMuted}
//           onMuteUnmute={toggleMute}
//           onFullscreen={toggleFullscreen}
//         />
//       </div>
//       <video
//         className="absolute object-cover object-center w-full h-full bg-white/10"
//         ref={videoRef}
//         autoPlay
//         muted
//         playsInline
//         loop
//       >
//         <source src="/videos/fire.mp4" type="video/mp4" />
//         Anna Seheda showreel.
//       </video>
//     </section>
//   );
// };
// export default ShowReel;

"use client";

import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import VideoPlayerControls from "./VideoPlayerControls";

interface FullscreenVideoElement extends HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

const ShowReel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<FullscreenVideoElement>(null);
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

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Safari
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // IE/Edge
      }
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <section className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/10">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="absolute top-4 right-4 h-[calc(100%-32px)] flex flex-col gap-2 items-end justify-between z-10 mix-blend-difference">
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
            isMuted={isMuted}
            onMuteUnmute={toggleMute}
            onFullscreen={toggleFullscreen}
          />
        </div>
      )}
      <video
        className={`absolute object-cover object-center w-full h-full bg-white/10 ${
          isLoading ? "hidden" : ""
        }`}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        onLoadedData={handleLoadedData}
      >
        <source src="/videos/fire.mp4" type="video/mp4" />
        Anna Seheda showreel.
      </video>
    </section>
  );
};

export default ShowReel;
