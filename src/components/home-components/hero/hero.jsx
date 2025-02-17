import { useLenis } from "@/context/lenis-context";
import {
  comercialRAnimation,
  firstPhraseAnimation,
  imageAnim,
  pSlideTextAnim,
} from "./anim";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePageViewed } from "@/context/page-viewed-context";

const FirstPhraseText = ({ onComplete }) => {
  const firstPhrase = ["A", "G", "Ê", "N", "C", "I", "A", "—", "N"];
  let completedAnimations = 0;

  const handleAnimationComplete = () => {
    completedAnimations++;
    if (completedAnimations === firstPhrase.length) {
      onComplete();
    }
  };

  return (
    <>
      {firstPhrase.map((phrase, i) => (
        <motion.h1
          key={i}
          custom={i}
          variants={firstPhraseAnimation}
          initial="initial"
          animate="animate"
          className="w-full text-[14.5vw] text-center text-color3 font-[400] leading-[1] tracking-[-10px] max-laptop:font-[600] max-laptop:text-[13vw] 
          max-laptop:tracking-[-10px] max-tablet:tracking-[-10px]"
          onAnimationComplete={handleAnimationComplete}
        >
          {phrase}
        </motion.h1>
      ))}
    </>
  );
};

const Hero = () => {
  const container = useRef(null);
  const { startLenis } = useLenis();
 const {pageViewed} = usePageViewed()

  const [animH1, setAnimH1] = useState(false);
  const [animR, setAnimR] = useState(false);
  const [animP, setAnimP] = useState(false);
  console.log(pageViewed);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);

 

  

  useEffect(() => {
    if (pageViewed || animR) {
      startLenis();
    }
  }, [pageViewed, animR]);

  useEffect(() => {
    if (animR) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [animR]);

  return (
    <div className="w-screen h-[100dvh] overflow-hidden relative">
      <motion.div
        ref={container}
        style={{ y }}
        className="h-full p-[2.5rem] max-laptop:p-[1rem]"
      >
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-[-1]" />
        <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
          {pageViewed ? (
            <motion.div
              variants={imageAnim}
              initial="initial"
              animate="animate"
              className="size-full"
              onAnimationComplete={() => setAnimH1(true)}
              custom={0.25}
            >
              <Image
                src="/bg.avif"
                width={2000}
                height={2000}
                alt="Background"
                priority
                className="size-full object-cover object-[50%_70%] brightness-[80%]"
              />
            </motion.div>
          ) : (
            <motion.div
              variants={imageAnim}
              initial="initial"
              animate="animate"
              className="size-full"
              onAnimationComplete={() => setAnimH1(true)}
              custom={3}
            >
              <Image
                src="/bg.avif"
                width={2000}
                height={2000}
                alt="Background"
                priority
                className="size-full object-cover object-[50%_70%] brightness-[80%]"
              />
            </motion.div>
          )}
        </div>

        <div className="w-full h-full flex flex-col items-end justify-end">
          <div className="w-full flex items-center justify-between gap-[1rem]">
            {animH1 && <FirstPhraseText onComplete={() => setAnimR(true)} />}
            <motion.h1
              variants={comercialRAnimation}
              initial="initial"
              animate={animR ? "animate" : "initial"}
              onAnimationComplete={() => setAnimP(true)}
              className={`h-full text-[8vw] text-color3 font-[600] max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600] 
                `}
            >
              &#174;
            </motion.h1>
          </div>

          <div className="w-full h-[50px] flex items-end justify-end">
            {animP && (
              <motion.p
                className="max-w-[600px] w-full text-color3 font-general text-[.9rem] tracking-[-.5px] font-[400] uppercase max-tablet:text-[.7rem]"
                variants={pSlideTextAnim}
                initial="initial"
                animate="animate"
              >
                Agência de arte e design com sede no Brasil, focada
                principalmente em criar identidades atemporais para marcas.
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
