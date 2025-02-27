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
      <div className="fixed top-[-10vh] left-0 w-full h-[120vh]">
        <div className="absolute z-10 top-1/2 w-full h-full flex flex-col justify-between  px-[2.5rem] max-tablet:px-[1rem]">
          <p className="font-general text-xs text-center font-[500] text-color3 tracking-[-.2px] uppercase self-center">
            beleza e qualidade precisam do momento certo para serem concebidas e
            realizadas mesmo em um mundo que está com muita pressa.
          </p>
        </div>
        <motion.div
          style={{ y }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <video
            className="relative w-full h-full object-cover brightness-[85%] select-none"
            src="/videos/several.mp4"
            width={1920}
            height={1080}
            alt="seve"
            loop
            autoPlay
            playsInline
            muted
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Video;
