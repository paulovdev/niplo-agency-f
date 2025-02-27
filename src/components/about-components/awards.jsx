"use client";

import awardsData from "@/data/awardsData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionText from "../reusable/section-text";
import { appearAnimY } from "@/utils/anim";

const Award = ({ title, description, year }) => {
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
      className="relative w-full h-full flex items-center flex-col  border-b-2"
    >
      <div className="w-full p-[1rem] grid grid-cols-3">
        <div className="w-full h-full flex items-center">
          <span className="text-color2 font-general text-[.9rem] font-[400] tracking-[-.4px] leading-[1.3]">
            {year}
          </span>
        </div>

        <div className="w-full h-full flex items-center">
          <h1 className="text-color  text-[1.25rem] font-[500] tracking-[-.5px] max-tablet:text-[1.5rem]">
            {title}
          </h1>
        </div>

        <div className="w-full h-full text-start flex items-center justify-end">
          <p className="text-color2 font-robert-regular text-[.9rem] font-[400] tracking-[-.2px] leading-[1.3]">
            {description}
          </p>
        </div>

        <motion.div
          variants={expand}
          className="absolute h-[2px] left-0 bottom-[-1px] bg-border2"
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
      className="pb-[150px] mb-[50px] border-b border-border max-tablet:pb-[100px]"
      ref={ref}
    >
      <div className="w-full h-fit mx-auto my-0 flex items-start justify-start">
        <div className="w-full flex-[1_1_0]">
          <SectionText text="AWARDS" linkBol={false} />
        </div>

        <motion.div
          className="relative w-full flex-[2.4_1_0]"
          variants={appearAnimY}
          initial="initial"
          animate={inView ? "animate" : ""}
        >
          <div className="w-full h-full">
            {awardsData.map((award, i) => (
              <div key={i}>
                <Award
                  title={award.title}
                  key={award.id}
                  description={award.description}
                  id={award.id}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Awards;
