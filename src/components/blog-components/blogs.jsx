"use client";
import { useCursor } from "@/context/cursor-context";
import blogsData from "@/data/blogsData";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const { setCursorVariant } = useCursor();

  const handleMouseEnter = () => {
    setCursorVariant("blog");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const handleClick = () => {
    handleMouseLeave();
  };
  const imgZoom = {
    hover: {
      skew: 1,
      transition: {
        duration: 0.5,
        ease: [0.73, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="mb-[100px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1 max-laptop:grid-cols-2">
      {blogsData.map((i, index) => (
        <Link
          href={`/blog/${i.id}`}
          key={i.title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <div className="relative size-full mb-[4rem] max-tablet:mb-0">
            <motion.div
              className=""
              variants={imgZoom}
              custom={index}
              whileHover="hover"
            >
              <Image
                className="relative w-full h-[500px] mb-[1.5rem] rounded-[.5rem] object-cover brightness-[85%] select-none max-laptop:h-[400px]"
                src={i.img}
                width={800}
                height={800}
                priority={true}
                alt=""
              />
            </motion.div>

            <div className="absolute top-5 left-5 mb-[1rem] flex items-center gap-[1rem]">
              <p className="px-[1rem]  py-[.5rem] text-color text-end text-[.7rem] font-[500] tracking-[1px] leading-[1] bg-background rounded-[2rem]">
                {i.category}
              </p>
              <span className="text-color text-end text-[.7rem] font-[500] tracking-[1px] leading-[1]">
                {i.min}
              </span>
            </div>

            <h2 className="pb-[.5rem] text-color  uppercase text-[1rem] tracking-[-.5px] font-[500] leading-[1.1]">
              {i.title}
            </h2>
            <p className="text-color2 text-[.9rem] font-[400] leading-[1.3]">
              {i.titleDescription}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
