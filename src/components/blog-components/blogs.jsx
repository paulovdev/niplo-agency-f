"use client";
import { useAp } from "@/context/ap-context";
import { useCursor } from "@/context/cursor-context";
import blogsData from "@/data/blogsData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { blogAnimation } from "./anim";

const BlogGrid = ({ id, img, title, category, min, titleDescription }) => {
  const { setCursorVariant } = useCursor();

  const { ref, inView } = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });

  const handleMouseEnter = () => {
    setCursorVariant("blog");
  };

  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  const handleClick = () => {
    handleMouseLeave();
  };

  return (
    <motion.div
      className="relative size-full flex items-center justify-start gap-[1.5rem] mb-0 flex-col cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={ref}
      variants={blogAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <div className="w-full">
        <Image
          className="relative w-full h-[400px] rounded-[.5rem] object-cover brightness-[85%] pointer-events-auto"
          src={img}
          width={800}
          height={800}
          alt={title}
        />
        <div className="absolute top-3 left-3 mb-[1rem] flex items-center gap-[1rem] ">
          <p className="px-[.8rem] font-general py-[.4rem] text-color text-end text-[.6rem] font-[500] tracking-[1px] leading-[1] bg-background rounded-[2rem]">
            {category}
          </p>
          <span className="text-color3 text-end text-[.6rem] font-[500] tracking-[1px] leading-[1]">
            {min}
          </span>
        </div>
      </div>

      <div className="w-full flex-[1] max-tablet:w-full">
        <h2 className="pb-[.5rem] text-color font-general uppercase text-[1rem] tracking-[-.3px] font-[600] leading-[1.1]">
          {title}
        </h2>
        <p className="text-color2 font-robert-regular text-[.9rem] tracking-[-.2px] leading-[1.3] ">
          {titleDescription}
        </p>
      </div>
    </motion.div>
  );
};

const BlogList = ({ id, img, title, category, min, titleDescription }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="relative size-full flex items-center justify-start gap-[1.5rem] max-tablet:mb-0 cursor-default group"
      ref={ref}
      variants={blogAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
    >
      <div>
        <Image
          className="relative w-[250px] h-[150px] rounded-[.5rem] object-cover brightness-[85%] pointer-events-auto max-tablet:w-[200px] max-tablet:h-[125px]"
          src={img}
          width={800}
          height={800}
          alt={title}
        />
        <div className="absolute top-3 left-3 mb-[1rem] flex items-center gap-[1rem] ">
          <p className="px-[.8rem] font-general py-[.4rem] text-color text-end text-[.6rem] font-[500] tracking-[1px] leading-[1] bg-background rounded-[2rem]">
            {category}
          </p>
          <span className="text-color3 text-end text-[.6rem] font-[500] tracking-[1px] leading-[1]">
            {min}
          </span>
        </div>
      </div>

      <div className="w-[600px] flex-[1] max-tablet:w-full">
        <h2 className="pb-[.5rem] text-color font-general uppercase text-[1rem] tracking-[-.3px] font-[600] leading-[1.1] group-hover:underline ">
          {title}
        </h2>
        <p className="text-color2 font-robert-regular text-[.9rem] tracking-[-.2px] leading-[1.3] ">
          {titleDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default function Blogs() {
  const { selectedAp } = useAp();
  return (
    <>
      <div className="pt-[50px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1 max-laptop:grid-cols-2">
        {selectedAp === "grid" &&
          blogsData.map((i) => (
            <Link
              key={i.id}
              href={`/blog/${i.id}`}
              className={`pointer-events-auto select-none cursor-default`}
            >
              <BlogGrid
                key={i.id}
                id={i.id}
                img={i.img}
                title={i.title}
                category={i.category}
                min={i.min}
                titleDescription={i.titleDescription}
              />
            </Link>
          ))}
      </div>

      <div className="w-full h-full flex flex-col items-start">
        {selectedAp === "list" &&
          blogsData.map((i) => (
            <Link
              key={i.id}
              href={`/blog/${i.id}`}
              className={`mb-[1.5rem] pointer-events-auto select-none cursor-default`}
            >
              <BlogList
                key={i.id}
                id={i.id}
                img={i.img}
                title={i.title}
                category={i.category}
                min={i.min}
                titleDescription={i.titleDescription}
              />
            </Link>
          ))}
      </div>
    </>
  );
}
