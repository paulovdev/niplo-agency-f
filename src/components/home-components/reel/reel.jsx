import { useRef } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLenis } from "@/context/lenis-context";
import { useCursorStore, usePlayingVideoStore } from "@/store/zustandStore";
import { reelAnim } from "./anim";
import { useInView } from "react-intersection-observer";

const Reel = () => {
  const { handleMouseEnter, handleMouseLeave } = useCursorStore();
  const { isPlaying, setIsPlaying } = usePlayingVideoStore();
  const { startLenis, stopLenis } = useLenis();
  const videoRef = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "center center"],
  });

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        startLenis();
      } else {
        videoRef.current.play();
        videoRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        stopLenis();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);

  return (
    <motion.section
      className={`size-full flex items-center justify-center cursor-default transition-all duration-500
        ${isPlaying ? "fixed inset-0 z-50" : "relative max-tablet:p-0"}`}
      variants={reelAnim}
      initial="initial"
      animate={isPlaying ? "open" : "initial"}
      ref={container}
    >
      <motion.video
        ref={videoRef}
        src="/videos/reel.mp4"
        className={`rounded-[.5rem] object-cover 
        ${
          isPlaying
            ? "w-screen h-screen rounded-none transition-all duration-500"
            : "w-full h-[850px] max-tablet:rounded-[1rem]"
        }`}
        style={{ scale }}
        loop
        muted
        onClick={togglePlayPause}
        onMouseEnter={() => handleMouseEnter("playReel")}
        onMouseLeave={handleMouseLeave}
      />

      <div className="absolute pointer-events-none flex items-center justify-center w-full h-full">
        {isPlaying ? (
          <IoMdPause
            color="#fff"
            className="text-[8rem] max-tablet:text-[6rem]"
          />
        ) : (
          <IoMdPlay
            color="#fff"
            className="text-[8rem] max-tablet:text-[6rem]"
          />
        )}
      </div>
    </motion.section>
  );
};

export default Reel;
