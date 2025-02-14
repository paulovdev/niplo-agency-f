"use client";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { textAnim, workAnimation } from "./anim";
import { useState } from "react";
import Menu from "./menu";
import { useAp } from "@/context/ap-context";

const WorkGrade = ({ name, category, src, year }) => {
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
        className="relative size-full select-auto pointer-events-auto "
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

        <div className="absolute w-full h-[30px] bottom-[15px] px-[2rem] overflow-hidden select-none pointer-events-none max-tablet:overflow-auto max-tablet:bottom-[10px] max-tablet:px-[1rem]">
          <motion.div className="relative size-full" variants={textAnim}>
            <div className="w-full h-[30px] flex items-center justify-between max-tablet:hidden"></div>

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

const WorkList = ({ name, category, src, year }) => {
  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <motion.div
      className=" relative w-full h-fit py-[1rem] hover:opacity-60 transition-all"
      ref={ref}
      variants={workAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <div className="relative w-full flex items-center justify-between">
        <div className="w-[25%] flex justify-start">
          <span className="text-color text-[1.5rem] font-[600] max-tablet:text-[.9rem]">
            /{year}
          </span>
        </div>

        <div className="w-[25%] flex justify-start">
          <h1 className="text-color text-[2.5rem] font-[500] tracking-[-1px] max-tablet:text-[1.5rem] max-tablet:font-[600]">
            {name}
          </h1>
        </div>

        <div className="w-[50%] flex justify-end">
          <p className="text-color text-[1rem] font-[500] max-tablet:text-[.9rem]">
            {category}
          </p>
        </div>
      </div>

      <div className="pt-[2rem] border-b border-border" />
    </motion.div>
  );
};

const Works = () => {
  const { selectedAp, setSelectedAp } = useAp();

  return (
    <>
      <div className="w-full h-full grid grid-cols-2 gap-[1rem] max-laptop:grid-cols-1">
        {/* GRID */}

        {selectedAp === "grid" &&
          worksData.map((i) => (
            <Link
              key={i.id}
              href={`/works/${i.id}`}
              className={`pointer-events-auto select-none cursor-default`}
            >
              <WorkGrade
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

      <div className="w-full h-full flex flex-col items-start gap-[1rem] ">
        {selectedAp === "list" &&
          worksData.map((i) => (
            <Link
              key={i.id}
              href={`/works/${i.id}`}
              className={`w-full pointer-events-auto select-none cursor-default`}
            >
              <WorkList
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

      <Menu />
    </>
  );
};

export default Works;
