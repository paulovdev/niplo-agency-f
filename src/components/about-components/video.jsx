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
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <div className="absolute z-10 top-52 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
          <p className="w-[50vw] font-general text-[.9rem] font-[500] tracking-[-.9px] uppercase self-center mix-blend-difference">
            Beleza e qualidade precisam do momento certo para serem concebidas e
            realizadas mesmo em um mundo que está com muita pressa.
          </p>
        </div>
        <motion.div
          style={{ y }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <video
            className="relative w-full h-full object-cover brightness-[85%] select-none"
            src="/several/s-video-1.mp4"
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
