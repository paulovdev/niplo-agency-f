"use client";
import { textSlideAnim } from "@/utils/anim";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { RiArrowRightDownLine } from "react-icons/ri";

const TextSlide = ({
  phrases,
  color,
  span,
  description,
  rightContentBol,
  descriptionVisibleBol,
}) => {
  const [isAnimationDelayed, setIsAnimationDelayed] = useState(false);

  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const [rightContent, setRightContent] = useState(rightContentBol);
  const [descriptionVisible, setDescriptionVisible] = useState(
    descriptionVisibleBol
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDelayed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex items-end justify-between max-laptop:flex-col max-laptop:justify-start max-laptop:items-start">
        {phrases.map((phrase, index) => (
          <div
            key={index}
            className="w-full overflow-hidden flex flex-col max-laptop:mb-[1.5rem]"
          >
            <motion.h1
              className={`w-full ${color} text-[5rem] font-[500] tracking-[-3px] leading-[1] 
                  max-desktop:text-[4rem] max-laptop:text-[4rem] max-tablet:text-[3rem] max-laptop:font-[600]`}
              custom={index}
              variants={textSlideAnim}
              initial="initial"
              animate={isAnimationDelayed ? "animate" : "initial"}
            >
              {phrase}
            </motion.h1>
          </div>
        ))}

        {descriptionVisible && (
          <div className="w-full overflow-hidden flex flex-col items-end">
            {description.map((desc, index) => (
              <div key={index}>
                <motion.p
                  className="text-end font-general text-color text-[1rem] font-[500]  tracking-[-.8px] leading-[1.4] max-laptop:text-[.9rem]"
                  custom={index}
                  variants={textSlideAnim}
                  initial="initial"
                  animate={isAnimationDelayed ? "animate" : "initial"}
                >
                  {desc}
                </motion.p>
              </div>
            ))}
          </div>
        )}

        {rightContent && (
          <div className="w-full flex justify-end items-center gap-[2.5rem] overflow-hidden">
            <motion.span
              className={`${color} text-color font-general text-[.9rem] font-[500] uppercase tracking-[-.5px]`}
              variants={textSlideAnim}
              initial="initial"
              animate={isAnimationDelayed ? "animate" : "initial"}
            >
              {span}
            </motion.span>

            <motion.div
              className="max-laptop:hidden"
              variants={textSlideAnim}
              initial="initial"
              animate={isAnimationDelayed ? "animate" : "initial"}
              style={{ rotate }}
            >
              <RiArrowRightDownLine className={`${color}`} size={42} />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextSlide;
