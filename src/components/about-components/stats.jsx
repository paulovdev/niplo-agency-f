"use client";
import SectionText from "../reusable/section-text";
import statsData from "@/data/statsData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { appearOpacity } from "@/utils/anim";

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <section
      className="w-full h-fit pb-[80px] mb-[150px] mx-auto my-0 border-b border-border"
      ref={ref}
    >
      <SectionText text="STATS" linkBol={false} marginBottom="0" />
      <motion.div
        className="relative w-full h-fit mx-auto my-0 flex items-end justify-start flex-col"
        variants={appearOpacity}
        initial="initial"
        animate={inView ? "animate" : ""}
      >
        <div className="max-w-[900px] w-full grid grid-cols-2 gap-[2rem] content-end justify-items-end">
          {statsData.slice(0, 4).map((stat, index) => (
            <div
              key={index}
              className="w-[250px] h-fit flex flex-col justify-center items-center  first:pt-0"
            >
              <h1 className="w-full text-color font-general text-[4rem] font-[500] tracking-[-1px]">
                {inView && <CountUp start={0} end={stat.number} />}
              </h1>
              <p className="w-full text-color2 text-[.8rem] font-[500] uppercase tracking-[.-5px]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
