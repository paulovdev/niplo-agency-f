"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { textAnim, workAnimation } from "./anim";

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
        className="relative size-full"
        initial="initial"
        whileHover="hover"
      >
        <Image
          className="w-full h-[85vh] rounded-[.5rem] object-cover max-tablet:h-[350px] max-laptop:h-[600px] cursor-pointer"
          src={src}
          alt="asd"
          width={1200}
          height={1200}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />

        <div className="absolute w-full h-[30px] bottom-[15px] px-[2rem] overflow-hidden cursor-pointer max-laptop:hidden">
          <motion.div className="relative size-full" variants={textAnim}>
            <div className="w-full h-[30px] flex items-center justify-between"></div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center gap-[1.5rem]">
                <h1 className=" text-color text-[1.25rem] font-[600] tracking-[-.4px] uppercase">
                  {name}
                </h1>
                <p className="text-color font-robert-medium text-[1rem] font-[400] tracking-[-.4px]">
                  {category}
                </p>
              </div>
              <div className="">
                <span className="text-color font-robert-regular text-[.9rem] font-[400] tracking-[-.4px] leading-[1.3]">
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
    <div className="w-full h-full grid grid-cols-2 gap-[1rem] max-laptop:grid-cols-1">
      {/* GRID */}

      {worksData.map((i) => (
        <Link
          key={i.id}
          href={`/works/${i.id}`}
          className={`pointer-events-auto select-none cursor-default`}
        >
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
  );
};

export default Works;
