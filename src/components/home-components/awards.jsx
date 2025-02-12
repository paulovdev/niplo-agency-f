"use client";

import awardsData from "@/data/awardsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { appearAwardAnim } from "./anim";

const Award = ({ title, description, id }) => {
  const expand = {
    hover: {
      width: "100%",
      transition: { duration: 0.8, type: "tween", ease: [0.74, 0, 0.14, 1] },
    },
    initial: {
      width: 0,
    },
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative w-full h-full flex items-center flex-col border-border border-b-2 select-none pointer-events-auto"
    >
      <div className="w-full p-[.5rem] grid grid-cols-3">
        <div className="w-full h-full flex items-center">
          <span className="text-color2 font-general text-[.9rem] font-[400] tracking-[-.4px] leading-[1.3] max-tablet:text-[.7rem]">
            {id}
          </span>
        </div>

        <div className="w-full h-full flex items-center">
          <h1 className="font-general text-color text-[1rem] font-[500] tracking-[-.7px] uppercase  max-tablet:font-[600] max-tablet:text-[.9rem]">
            {title}
          </h1>
        </div>

        <div className="w-full h-full text-start flex items-center justify-end">
          <p className="text-color2 text-end font-robert-medium text-[.8rem] font-[500] tracking-[-.3px] uppercase max-tablet:text-[.7rem]">
            {description}
          </p>
        </div>

        <motion.div
          variants={expand}
          className="absolute h-[2px] left-0 bottom-[-2px] bg-border2"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const Awards = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="h-full pt-[50px] pb-[50px] mb-[50px] border-b border-border select-none pointer-events-none"
    >
      <div className="w-full h-fit mx-auto my-0 flex items-start justify-start max-laptop:flex-col">
        <div className="w-full flex-[2] max-laptop:mb-[2.5rem]">
          <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase">
            AWARDS
          </h2>
        </div>

        <div className="relative w-full flex-[3]">
          <div className="w-full h-full">
            {awardsData.slice(0, 12).map((award, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={appearAwardAnim}
                initial="initial"
                animate={inView ? "animate" : ""}
              >
                <Award
                  title={award.title}
                  key={award.id}
                  description={award.description}
                  id={award.id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Awards;
