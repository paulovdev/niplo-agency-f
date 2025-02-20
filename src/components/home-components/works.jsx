import { useState } from "react";
import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { workAnimation, textAnim } from "./anim";

import { useCursorStore } from "@/store/zustandStore";
import { useMedia } from "react-use";

const Work = ({ name, category, src, src2, year }) => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorStore();
  const isTablet = useMedia("(max-width: 768px)");
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="w-full cursor-default"
      ref={ref}
      variants={workAnimation}
      initial="initial"
      animate={"animate"}
      onMouseEnter={() => handleMouseEnter("workSingle")}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick("default")}
    >
      <motion.div
        className="relative size-full bg-background2 select-auto pointer-events-auto"
        initial="initial"
        whileHover="hover"
      >
        <Image
          className="max-w-[1200px] w-full max-h-[800px] h-full rounded-[.5rem] object-cover object-[40%_20%] brightness-[85%] max-tablet:h-[350px] max-laptop:h-[600px]"
          src={src}
          alt={name}
          width={1200}
          height={1200}
        />
        {!isTablet && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 size-full bg-background2 rounded-[.5rem] max-tablet:hidden"
          >
            <Image
              className="max-w-[1200px] w-full max-h-[800px] h-full rounded-[.5rem] object-cover object-[40%_20%] brightness-[85%]"
              src={src2}
              alt={`${name} - Hover`}
              width={1200}
              height={1200}
            />
          </motion.div>
        )}
        <div className="absolute w-full h-[30px] bottom-[15px] px-[2rem] overflow-hidden select-none pointer-events-none max-tablet:overflow-auto max-tablet:bottom-[10px] max-tablet:px-[1rem]">
          <motion.div className="relative size-full" variants={textAnim}>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center gap-[1.5rem]">
                <h1 className="font-general text-color3 text-[1rem] font-[500] tracking-[-.7px] uppercase">
                  {name}
                </h1>
                <p className="text-color3 font-robert-medium text-[.85rem] font-[400] tracking-[-.4px]">
                  {category}
                </p>
              </div>
              <div>
                <span className="text-color3 text-[.9rem] font-[500] tracking-[-.7px] uppercase">
                  {year}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="relative pt-[50px] select-none pointer-events-none">
      <h2 className="mb-[2rem] font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase flex items-end">
        ✦ Últimos trabalhos
        <span className="mx-[.5rem]"> / </span>
        <Link
          className="w-fit bg-background rounded-[2rem] underline select-auto pointer-events-auto"
          href="/works"
        >
          ver todos
        </Link>
      </h2>

      <div className="grid-works size-full grid grid-cols-2 gap-[1rem] max-laptop:grid-cols-1">
        {worksData.slice(0, 4).map((i) => (
          <Link key={i.id} href={`/works/${i.id}`}>
            <Work
              id={i.id}
              year={i.year}
              name={i.name}
              category={i.category}
              src={i.src}
              src2={i.src2}
              alt={i.alt}
              color={i.color}
              margin={i.margin}
              width={i.width}
              height={i.height}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;
