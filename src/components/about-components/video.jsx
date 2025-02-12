"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Video = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <div
      className="relative w-full h-screen  flex items-center gap-[1.5rem] max-tablet:h-fit"
      ref={container}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full ">
        <motion.div style={{ y }} className="relative w-full h-full ">
          <video
            className="relative size-full object-cover brightness-[85%] select-none max-tablet:h-[400px]"
            src="/about/about-video.mp4"
            width={1920}
            height={1080}
            alt=""
            autoPlay
            loop
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Video;
