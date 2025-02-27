import { useLenis } from "@/context/lenis-context";
import {
  comercialRAnimation,
  firstPhraseAnimation,
  imageAnim,
  pSlideTextAnim,
} from "./anim";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
      <h1
        className="w-full mt-0 mb-0 
      flex 
      text-[15vw] text-center font-[500] uppercase leading-[1]"
      >
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

const Hero = () => {
  const { startLenis } = useLenis();
  const router = useRouter();
  const [animH1, setAnimH1] = useState(false);
  const [animR, setAnimR] = useState(false);
  const [animP, setAnimP] = useState(false);

  useEffect(() => {
    if (router.pathname === "/" && animR) {
      startLenis();
      console.log("Lenis iniciado!");
    }
  }, [animR, router.pathname]);

  useEffect(() => {
    if (animR) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [animR]);

  return (
    <div className="w-screen h-[110dvh] overflow-hidden relative max-tablet:h-[100dvh]">
      <div className="h-full p-[2.5rem] max-laptop:p-[1rem]">
        <div className="absolute top-0 left-0 w-screen h-[110vh] z-[-1]">
          <motion.div
            variants={imageAnim}
            initial="initial"
            animate="animate"
            className="size-full"
            onAnimationComplete={() => setAnimH1(true)}
            custom={3}
          >
            <video
              src={"/videos/home-.mp4"}
              width={2000}
              height={2000}
              alt="Background"
              loop
              autoPlay
              playsInline
              muted
              style={{ borderRadius: !animH1 && "100%" }}
              className="size-full object-cover object-[10%_15%] brightness-[80%]  transition-all duration-500
    max-tablet:object-cover max-tablet:object-[50%_100%]"
            />
          </motion.div>
        </div>

        <div
          className="relative w-full h-full bottom-14 
        flex flex-col items-end justify-end"
        >
          <div className="w-full flex items-start justify-between gap-[1rem] ">
            {animH1 && <FirstPhraseText onComplete={() => setAnimR(true)} />}

            <motion.h1
              variants={comercialRAnimation}
              initial="initial"
              animate={animR ? "animate" : "initial"}
              onAnimationComplete={() => setAnimP(true)}
              className="inline-block relative 
              text-[10vw] font-[700] text-color3 leading-[1]"
            >
              &#174;
            </motion.h1>
          </div>

          {/*   <div className="w-full h-[50px] flex items-end justify-end">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
