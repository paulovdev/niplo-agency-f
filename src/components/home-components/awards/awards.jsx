"use client";

import awardsData from "@/data/awardsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { appearAwardAnim, borderAnim } from "./anim";

const Award = ({ title, description, year, id }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      custom={id}
      variants={appearAwardAnim}
      initial="initial"
      animate={inView ? "animate" : ""}
    >
      <motion.div
        whileHover="hover"
        initial="initial"
        className="relative w-full h-full flex items-center flex-col border-border border-b select-none pointer-events-auto"
      >
        <div className="w-full p-[.5rem] flex items-center">
          <div className="w-full h-full flex items-center max-tablet:w-1/3">
            <span className="text-color2 font-general text-[.7rem] font-[400] tracking-[-.4px] leading-[1.3] max-tablet:text-[.7rem]">
              {year}
            </span>
          </div>

          <div className="w-full h-full flex items-center">
            <h1 className="font-general text-color text-[1rem] font-[500] tracking-[-.8px] uppercase max-tablet:text-[.9rem]">
              {title}
            </h1>
          </div>

          <div className="w-full h-full text-start flex items-center justify-end">
            <p className="text-color2 text-end font-robert-medium text-[.75rem] font-[500] tracking-[-.3px] max-tablet:text-[.7rem]">
              {description}
            </p>
          </div>

          <motion.div
            variants={borderAnim}
            className="absolute h-[1px] left-0 bottom-[-1.5px] bg-border2"
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Awards = () => {
  return (
    <section className="h-full pt-[50px] pb-[50px] mb-[50px] border-b border-border select-none pointer-events-none">
      <div className="w-full h-fit mx-auto my-0 flex items-start justify-start max-laptop:flex-col">
        <div className="w-full flex-[2] max-laptop:mb-[2.5rem]">
          <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[500] uppercase">
            PRÊMIOS
          </h2>
        </div>

        <div className="relative w-full flex-[2]">
          <div className="w-full h-full">
            {awardsData.slice(0, 12).map((award, i) => (
              <div key={i}>
                <Award
                  title={award.title}
                  year={award.year}
                  description={award.description}
                  id={award.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Awards;
