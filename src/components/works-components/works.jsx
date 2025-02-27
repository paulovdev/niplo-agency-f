"use client";
import { motion } from "framer-motion";
import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { imageVisible, textAnim, workAnim, workAnimation } from "./anim";
import { RiArrowRightDownLine } from "react-icons/ri";
import { useApStore, useCursorStore } from "@/store/zustandStore";
import { useMedia } from "react-use";

const WorkGrade = ({ name, category, src, src2, year }) => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorStore();
  const isTablet = useMedia("(max-width: 768px)");
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={workAnim}
      initial="initial"
      animate={inView ? "animate" : ""}
      className="w-full cursor-default"
      onMouseEnter={
        !isTablet ? () => handleMouseEnter("workSingle") : undefined
      }
      onMouseLeave={!isTablet ? handleMouseLeave : undefined}
      onClick={!isTablet ? () => handleClick("default") : undefined}
    >
      <motion.div
        className="relative size-full bg-background2 select-auto pointer-events-auto"
        initial="initial"
        whileHover="hover"
      >
        <Image
          className="max-w-[1200px] w-full h-[110vh] rounded-[.5rem] object-cover brightness-[85%] cursor-default max-tablet:h-[75vh]"
          src={src}
          alt={name}
          width={800}
          height={900}
          priority={false}
        />
        {!isTablet && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 size-full bg-background2 rounded-[.5rem] max-tablet:hidden"
          >
            <Image
              className="max-w-[1200px] w-full h-[110vh] rounded-[.5rem] object-cover brightness-[85%]"
              src={src2}
              alt={name}
              width={800}
              height={900}
              priority={false}
            />
          </motion.div>
        )}
        <div className="absolute w-full h-[30px] bottom-[15px] px-[2rem] overflow-hidden select-none pointer-events-none max-tablet:overflow-auto max-tablet:bottom-[10px] max-tablet:px-[1rem]">
          <motion.div className="relative size-full" variants={textAnim}>
            <div className="w-full h-[30px] flex items-center justify-between max-tablet:hidden"></div>

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center gap-[1.5rem]">
                <h1 className="font-general text-color3 text-[.8rem] font-[500] tracking-[-.7px] uppercase">
                  {name}
                </h1>
                <p className="text-color3 font-robert-medium text-[.75rem] font-[400] tracking-[-.4px]">
                  {category}
                </p>
              </div>
              <div className="">
                <span className="text-color3 text-[.75rem] font-[500] tracking-[-.7px] uppercase">
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
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="relative w-full h-fit z-10 group"
      ref={ref}
      variants={workAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <motion.div
        className="relative w-full py-[2rem] flex items-center justify-between max-tablet:gap-4 transition-all"
        initial="initial"
        whileHover="hover"
      >
        <div className="w-[25%] flex justify-start group-hover:opacity-50 max-tablet:w-full">
          <span className="text-[.9rem] font-[500] tracking-[-.7px] uppercase">
            {year}
          </span>
        </div>

        <div className="w-full flex justify-start group-hover:opacity-50">
          <h1 className="font-general text-color text-[1rem] font-[500] tracking-[-.7px] uppercase">
            {name}
          </h1>
        </div>

        <div className="w-[75%] flex justify-start group-hover:opacity-50 max-tablet:w-1/2">
          <span className="text-[1.5rem] group-hover:rotate-[-45deg] transition-transform">
            <RiArrowRightDownLine />
          </span>
        </div>

        <motion.div
          className="relative w-full flex justify-start max-tablet:hidden"
          variants={imageVisible}
        >
          <Image
            src={src}
            alt="asd"
            width={800}
            height={900}
            priority={false}
            className="absolute top-[-200px] w-[400px] h-[400px] rounded-[.25rem] object-cover "
          />
        </motion.div>

        <div className="w-1/2 flex justify-end group-hover:opacity-50 max-tablet:w-full">
          <p className="text-color text-[.85rem] text-end font-robert-medium font-[400] tracking-[-.4px]">
            {category}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const { selectedAp } = useApStore();

  return (
    <>
      <div className="w-full h-full grid grid-cols-2 gap-[1rem] max-laptop:grid-cols-1">
        {selectedAp === "grid" &&
          worksData.map((i) => (
            <Link
              key={i}
              href={`/works/${i.id}`}
              className={`pointer-events-auto select-none cursor-default`}
            >
              <WorkGrade
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
      <div className="w-full h-full flex flex-col items-start pt-[50px]">
        {selectedAp === "list" &&
          worksData.map((i) => (
            <Link
              key={i}
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
    </>
  );
};

export default Works;
