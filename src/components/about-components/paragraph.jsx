"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phrases = [
  "We are a creative agency collaborating with",
  "brands to build insightful strategies, create unique ",
  "and craft experiences that bring positive change and value.",
];

const Paragraph = () => {
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div
      className="w-full h-fit pt-[100px] pb-[150px] mb-[50px] border-b border-border flex items-start justify-start"
      ref={ref}
    >
      <div className="w-full">
        {phrases.map((phrase, index) => {
          return (
            <div
              key={index}
              className="about-paragraph overflow-hidden text-end"
            >
              <motion.p
                className="text-[3.5rem] font-[500] text-color tracking-[-2px] leading-[1.2]  uppercase max-tablet:text-[2rem] max-mobile:text-[1.5rem]"
                custom={index}
                variants={animation}
                initial="initial"
                animate={inView ? "enter" : ""}
              >
                {phrase}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Paragraph;
