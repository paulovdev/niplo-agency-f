import { useRef } from "react";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { motion } from "framer-motion";
import { useLenis } from "@/context/lenis-context";
import { useCursorStore, usePlayingVideoStore } from "@/store/zustandStore";
import { useCursor } from "@/context/cursor-context";

const Reel = () => {
  const { handleMouseEnter, handleMouseLeave } = useCursorStore();

  const { isPlaying, setIsPlaying } = usePlayingVideoStore();
  const { startLenis, stopLenis } = useLenis();
  const ref = useRef(null);

  const togglePlayPause = () => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.pause();
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        startLenis();
      } else {
        ref.current.play();
        ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
        stopLenis();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const reelAnim = {
    initial: { scale: 1, transition: { duration: 0.25 } },
    open: { scale: 1.1, transition: { duration: 0.25 } },
  };

  return (
    <motion.section
      className={`flex items-center justify-center transition-all duration-1000
        ${isPlaying ? "fixed inset-0 z-50" : "relative max-tablet:p-0"}`}
      variants={reelAnim}
      initial="initial"
      animate={isPlaying ? "open" : "initial"}
    >
      <motion.video
        ref={ref}
        src="/videos/reel.mp4"
        className={`rounded-[1.5rem] object-cover cursor-pointer transition-all duration-500
        ${
          isPlaying
            ? "w-screen h-screen rounded-none"
            : "w-full h-[850px] max-tablet:h-[450px] max-tablet:rounded-[1rem]"
        }`}
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
