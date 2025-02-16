import { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesData from "@/data/servicesData";
import { useCursor } from "@/context/cursor-context";

gsap.registerPlugin(ScrollTrigger);

export const firstPhraseAnimation = {
  initial: { y: "175%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.49,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.02,
    },
  }),
};

const ScrollText = () => {
  const { setCursorVariant } = useCursor();
  const handleMouseEnter = () => {
    setCursorVariant("scrollText");
  };
  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: `+=${servicesData.length * 1200}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    servicesData.forEach((section, index) => {
      tl.fromTo(
        `.${section.id}-h1-text`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .addPause("+=2")
        .fromTo(
          `.${section.id}-list-text li`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 }
        )
        .addPause("+=2");

      if (index !== servicesData.length - 1) {
        tl.to(`.${section.id}-h1-text, .${section.id}-list-text li`, {
          opacity: 0,
          y: -50,
          duration: 1,
        });
      }
    });
  }, []);

  return (
    <>
      <section
        className="w-screen h-full select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-full h-[100dvh] flex flex-col items-center justify-center"
          id="clip"
        >
          {servicesData.map((section, index) => (
            <div key={section.id} className="absolute">
              <motion.div
                className={`${section.id}-h1-text w-screen h-screen p-[2.5rem] flex flex-col items-center justify-between text-center opacity-0`}
                initial="initial"
                animate="animate"
                variants={firstPhraseAnimation}
                custom={index}
              >
                <h1 className="text-[7.5vw] uppercase text-center max-w-[50vw] leading-none">
                  <span className="mr-2 text-sm font-robert-medium tracking-[1px]">
                    {section.number}
                  </span>
                  {section.title}
                </h1>
                <ul
                  className={`${section.id}-list-text text-color font-general text-[.9rem] tracking-[-.5px] font-[500] uppercase 
                    max-tablet:text-[.85rem] `}
                >
                  {section.list.map((word, index) => (
                    <li key={index} className="opacity-0">
                      {word}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScrollText;
