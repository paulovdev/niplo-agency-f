import { h1SlideTextAnim, imageAnim, pSlideTextAnim } from "./anim";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Hero = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);

  return (
    <div className="w-screen h-[100dvh] overflow-hidden relative">
      <motion.div
        ref={container}
        style={{ y }}
        className="h-full p-[2.5rem] max-laptop:p-[1rem]"
      >
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-[-1]" />
        <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
          {/*   <video
            src="/vid-4.mp4"
            className="size-full object-cover brightness-[85%]"
            autoPlay
            muted
            loop
            width={1200}
            height={1200}
            alt=""
          /> */}
          <motion.div
            variants={imageAnim}
            initial="initial"
            animate="animate"
            className="size-full "
          >
            <Image
              src={"/bg2.jpg"}
              width={2000}
              height={2000}
              alt=""
              className="size-full object-cover object-[50%_70%] brightness-[80%]"
            />
          </motion.div>
        </div>

        <div className="w-full h-full flex flex-col items-end justify-end overflow-hidden ">
          <motion.div
            className="w-full flex items-center justify-between gap-[1rem] "
            variants={h1SlideTextAnim}
            initial="initial"
            animate="animate"
          >
            <h1
              variants={h1SlideTextAnim}
              className="text-[15vw] text-center text-color3 font-[400] leading-[1]"
            >
              AGÊNCIA
            </h1>
            <div
              variants={h1SlideTextAnim}
              className="w-[275px] h-[13px] bg-background leading-[1] max-laptop:h-[8px] "
            />
            <h1
              variants={h1SlideTextAnim}
              className="text-[15vw] text-center text-color3 font-[400] leading-[1]"
            >
              N
            </h1>
            <motion.h1
              variants={h1SlideTextAnim}
              className="h-full text-[8vw] text-color3 font-[600] "
            >
              &#174;
            </motion.h1>
          </motion.div>

          <motion.p
            className="max-w-[600px] w-full text-color3 font-general text-[.9rem] tracking-[-.5px] font-[400] uppercase max-tablet:text-[.8rem]"
            variants={pSlideTextAnim}
            initial="initial"
            animate="animate"
          >
            Agência de arte e designer com sede no brasil, focada principalmente
            em, criando identidades atemporais para marcas.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
