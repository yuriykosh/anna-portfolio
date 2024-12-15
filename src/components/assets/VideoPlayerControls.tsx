"use client";

import { CarbonMaximize } from "@/components/icons/CarbonMaximize";
import { CarbonPauseFilled } from "@/components/icons/CarbonPauseFilled";
import { CarbonPlayFilledAlt } from "@/components/icons/CarbonPlayFilledAlt";
import { CarbonVolumeMuteFilled } from "@/components/icons/CarbonVolumeMuteFilled";
import { CarbonVolumeUpFilled } from "@/components/icons/CarbonVolumeUpFilled";

interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  isMuted: boolean;
  onMuteUnmute: () => void;
  size?: number | undefined;
  width?: number | undefined;
  onFullscreen: () => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  onPlayPause,
  isMuted,
  onMuteUnmute,
  size = 40,
  width = 2,
  onFullscreen,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <>
      <div className="flex gap-2 h-fit">
        <button
          className="group cursor-pointer flex justify-center items-center p-2.5 rounded-full hover:bg-white/5 transition-all duration-200 ease-in-out"
          style={{ width: `${size}px`, height: `${size}px` }}
          onClick={onMuteUnmute}
        >
          <div className="text-white group-hover:text-[#aaaaaa] transition-colors duration-200 ease-in-out">
            {isMuted ? <CarbonVolumeMuteFilled /> : <CarbonVolumeUpFilled />}
          </div>
        </button>

        <div className="relative flex justify-center items-center">
          <svg
            width={size}
            height={size}
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth={width}
            />
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="transparent"
              stroke="#ffffff"
              strokeWidth={width}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute">
            <button
              className="group cursor-pointer flex justify-center items-center p-2.5 rounded-full hover:bg-white/5 transition-all duration-200 ease-in-out"
              onClick={onPlayPause}
            >
              <div className="text-white group-hover:text-[#aaaaaa] transition-colors duration-200 ease-in-out">
                {isPaused ? <CarbonPlayFilledAlt /> : <CarbonPauseFilled />}
              </div>
            </button>
          </div>
        </div>
      </div>

      <button
        className="group cursor-pointer flex justify-center items-center p-2.5 rounded-full hover:bg-white/5 transition-all duration-200 ease-in-out"
        style={{ width: `${size}px`, height: `${size}px` }}
        onClick={onFullscreen}
      >
        <div className="text-white group-hover:text-[#aaaaaa] transition-colors duration-200 ease-in-out">
          <CarbonMaximize />
        </div>
      </button>
    </>
  );
};
export default VideoPlayerControls;
