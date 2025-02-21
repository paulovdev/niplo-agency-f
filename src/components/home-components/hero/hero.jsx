import { useLenis } from "@/context/lenis-context";
import {
  comercialRAnimation,
  firstPhraseAnimation,
  imageAnim,
  pSlideTextAnim,
} from "./anim";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const FirstPhraseText = ({ onComplete }) => {
  const firstPhrase = ["—", "U", "N", "U", "S", "U", "A", "L"];
  let completedAnimations = 0;

  const handleAnimationComplete = () => {
    completedAnimations++;
    if (completedAnimations === firstPhrase.length) {
      onComplete();
    }
  };

  return (
    <>
      <h1 className="text-center uppercase flex-nowrap mt-0 mb-0 text-[15vw] font-[500] w-full leading-[1]">
        <div className="relative inline-block ">
          {firstPhrase.map((phrase, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={firstPhraseAnimation}
              initial="initial"
              animate="animate"
              className="relative inline-block text-color3 max-laptop:font-[600]"
              onAnimationComplete={handleAnimationComplete}
            >
              {phrase}
            </motion.div>
          ))}
        </div>
      </h1>
    </>
  );
};

const Hero = ({ firstTime }) => {
  const { startLenis } = useLenis();

  const [animH1, setAnimH1] = useState(false);
  const [animR, setAnimR] = useState(false);
  const [animP, setAnimP] = useState(false);

  useEffect(() => {
    if (firstTime || animR) {
      startLenis();
    }
  }, [animR]);

  useEffect(() => {
    if (animR) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [animR]);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="h-full p-[2.5rem] max-laptop:p-[1rem]">
        <div className="absolute top-0 left-0 w-screen h-screen bg-white z-[-1]" />
        <div className="absolute top-0 left-0 w-screen h-screen z-[-1]">
          <motion.div
            variants={imageAnim}
            initial="initial"
            animate="animate"
            className="size-full"
            onAnimationComplete={() => setAnimH1(true)}
            custom={firstTime ? 0.25 : 3}
          >
            <video
              src="/videos/home.mp4"
              width={4000}
              height={4000}
              alt="Background"
              loop
              autoPlay
              muted
              className="size-full object-cover object-[10%_15%] brightness-[80%]"
            />
          </motion.div>
        </div>

        <div className="w-full h-full flex flex-col items-end justify-end">
          <div className="w-full flex items-center justify-between gap-[1rem] mix-blend-difference">
            {animH1 && <FirstPhraseText onComplete={() => setAnimR(true)} />}

            <motion.h1
              variants={comercialRAnimation}
              initial="initial"
              animate={animR ? "animate" : "initial"}
              onAnimationComplete={() => setAnimP(true)}
              className="inline-block relative text-[10vw] font-[500] text-color3 leading-[1]"
            >
              &#174;
            </motion.h1>
          </div>

          <div className="w-full h-[50px] flex items-end justify-end mix-blend-difference">
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
      </div>
    </div>
  );
};

export default Hero;
