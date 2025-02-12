"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionText from "../reusable/section-text";

const phrases = [
  "We",
  "are",
  "a",
  "creative",
  "agency",
  "collaborating",
  "with",
  "brands",
  "to",
  "build",
  "insightful",
  "strategies",
  "create",
  "unique",
  "designs",
  "and",
  "craft",
  "experiences",
  "that",
  "bring",
  "positive",
  "change",
  "and",
  "value.",
];

const Paragraph = () => {
  const animation = {
    initial: { x: "100%", filter: "blur(40px)" },
    enter: (i) => ({
      x: "0",
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.43, 1, 0.68, 1],
        delay: 0.065 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <section className="w-full h-fit pb-[150px] mb-[50px] mx-auto my-0 border-b border-border flex items-start justify-end">
      <SectionText
        text="about us"
        src="/works"
        linkText="all works"
        linkBol={false}
      />
      <div ref={ref} className="w-full">
        <p className="text-start pb-[1rem]">
          {phrases.map((phrase, index) => (
            <motion.span
              key={index}
              className={`inline-block text-color text-[2rem] font-[500] tracking-[-1px] leading-[1.2] mr-[0.5rem]`}
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}
            >
              {phrase}
            </motion.span>
          ))}
        </p>
        <div className="c-n w-fit text-color text-[.9rem] font-[500] uppercase underline cursor-pointer transition-all hover:font-[700]">
          more about us
        </div>
      </div>
    </section>
  );
};
export default Paragraph;
