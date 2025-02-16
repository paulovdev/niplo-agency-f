import { useLenis } from "@/context/lenis-context";
import {
  comercialRAnimation,
  firstPhraseAnimation,
  pSlideTextAnim,
} from "./anim";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePageViewed } from "@/context/page-viewed-context";

const FirstPhraseText = ({ onComplete }) => {
  const firstPhrase = ["A", "G", "Ê", "N", "C", "I", "A", "—", "N"];
  const completedAnimations = useRef(0);

  const handleAnimationComplete = () => {
    completedAnimations.current += 1;
    if (completedAnimations.current === firstPhrase.length) {
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
  console.log("Renderizando Hero...");

  const container = useRef(null);
  const { pageViewed } = usePageViewed();
  const { startLenis } = useLenis();
  const [animH1, setAnimH1] = useState(false);
  const [animR, setAnimR] = useState(false);
  const [animP, setAnimP] = useState(false);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const [delayson, setDelayson] = useState(pageViewed ? 0.1 : 3.1);

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);

  console.log(delayson);

  useEffect(() => {
    setDelayson(pageViewed ? 0.1 : 3.1);
  }, [pageViewed]);

  useEffect(() => {
    if (pageViewed) {
      setAnimR(true);
    }
  }, [pageViewed]);

  useEffect(() => {
    if (animR) {
      startLenis();
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [animR, startLenis]);

  return (
    <div className="w-screen h-[100dvh] overflow-hidden relative">
      <motion.div
        ref={container}
        style={{ y }}
        className="h-full p-[2.5rem] max-laptop:p-[1rem]"
      >
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-[-1]" />
        <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
          <motion.div
            key={delayson}
            initial={{
              scale: 0.15,
              rotate: -15,
              transition: {
                duration: 0.5,
                ease: [0.53, 1, 0.88, 1],
              },
            }}
            animate={{
              scale: 1,
              rotate: 0,
              transition: {
                duration: 0.75,
                ease: [0.53, 1, 0.88, 1],
                delay: delayson,
              },
            }}
            className="size-full"
            onAnimationComplete={() => setAnimH1(true)}
          >
            <Image
              src="/bg.avif"
              width={2000}
              height={2000}
              alt="Background"
              className="size-full object-cover object-[20%_30%] brightness-[80%]"
            />
          </motion.div>
        </div>

        <div className="w-full h-full flex flex-col items-end justify-end">
          <div className="w-full flex items-center justify-between gap-[1rem]">
            {animH1 && <FirstPhraseText onComplete={() => setAnimR(true)} />}
            <motion.h1
              variants={comercialRAnimation}
              initial="initial"
              animate={animR ? "animate" : "initial"}
              onAnimationComplete={() => setAnimP(true)}
              className="h-full text-[8vw] text-color3 font-[600] max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600]"
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
