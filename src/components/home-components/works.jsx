"use client";

import { useCursor } from "@/context/cursor-context";
import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { workAnimation, textAnim } from "./anim";

const Work = ({ name, category, src, year }) => {
  const { setCursorVariant } = useCursor();

  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  const handleMouseEnter = () => {
    setCursorVariant("workSingle");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const handleClick = () => {
    handleMouseLeave();
  };

  return (
    <motion.div
      className="w-full max-tablet:h-[45vh]"
      ref={ref}
      variants={workAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <motion.div
        className="relative size-full select-auto pointer-events-auto"
        initial="initial"
        whileHover="hover"
      >
        <Image
          className="w-full h-[85vh] rounded-[.5rem] object-cover max-tablet:h-[350px] max-laptop:h-[600px] cursor-default"
          src={src}
          alt="asd"
          width={1200}
          height={1200}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />

        <div className="absolute w-full h-[30px] bottom-[15px] px-[2rem] overflow-hidden select-none pointer-events-none">
          <motion.div className="relative size-full" variants={textAnim}>
            <div className="w-full h-[30px] flex items-center justify-between"></div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center gap-[1.5rem]">
                <h1 className="font-general text-color3 text-[1rem] font-[500] tracking-[-.7px] uppercase">
                  {name}
                </h1>
                <p className="text-color3 font-robert-medium text-[.85rem] font-[400] tracking-[-.4px]">
                  {category}
                </p>
              </div>
              <div className="">
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
        ✦ Ultimos trabalhos
        <span className="mx-[.5rem]"> / </span>
        <Link
          className="w-fit bg-background rounded-[2rem] underline select-auto pointer-events-auto"
          href="/works"
        >
          ver todos
        </Link>
      </h2>

      <div className="grid-works w-full h-full grid grid-cols-2 gap-[1rem] max-laptop:grid-cols-1">
        {/* GRID */}

        {worksData.slice(0, 4).map((i) => (
          <Link key={i.id} href={`/works/${i.id}`}>
            <Work
              id={i.id}
              year={i.year}
              name={i.name}
              category={i.category}
              src={i.src}
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
