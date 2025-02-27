import blogsData from "@/data/blogsData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { blogAnimation } from "./anim";
import { useApStore, useCursorStore } from "@/store/zustandStore";

const BlogGrid = ({ img, title, category, min, titleDescription }) => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorStore();

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="relative size-full flex items-center justify-start gap-[1.5rem] mb-0 flex-col cursor-default"
      ref={ref}
      variants={blogAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      onMouseEnter={() => handleMouseEnter("blog")}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick("default")}
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
        <h2 className="pb-[.5rem] text-color font-general uppercase text-[.8rem] tracking-[-.3px] font-[500] leading-[1.1]">
          {title}
        </h2>
        <p className="text-color2 font-robert-regular text-[.75rem] tracking-[-.2px] leading-[1.3] ">
          {titleDescription}
        </p>
      </div>
    </motion.div>
  );
};

const BlogList = ({ img, title, category, min, titleDescription }) => {
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

      <div className="w-[400px] flex-[1] max-tablet:w-full">
        <h2 className="pb-[.5rem] text-color font-general uppercase text-[.8rem] tracking-[-.3px] font-[500] leading-[1.1] group-hover:underline ">
          {title}
        </h2>
        <p className="text-color2 font-robert-regular text-[.75rem] tracking-[-.2px] leading-[1.3] ">
          {titleDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default function Blogs() {
  const { selectedAp } = useApStore();
  return (
    <>
      <div className="pt-[50px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1 max-laptop:grid-cols-2">
        {selectedAp === "grid" &&
          blogsData.map((blog, i) => (
            <Link
              key={i}
              href={`/blog/${blog.id}`}
              className={`pointer-events-auto select-none cursor-default`}
            >
              <BlogGrid
                id={blog.id}
                img={blog.img}
                title={blog.title}
                category={blog.category}
                min={blog.min}
                titleDescription={blog.titleDescription}
              />
            </Link>
          ))}
      </div>

      <div className="w-full h-full flex flex-col items-start">
        {selectedAp === "list" &&
          blogsData.map((blog, i) => (
            <Link
              key={i}
              href={`/blog/${blog.id}`}
              className={`mb-[1.5rem] pointer-events-auto select-none cursor-default`}
            >
              <BlogList
                id={blog.id}
                img={blog.img}
                title={blog.title}
                category={blog.category}
                min={blog.min}
                titleDescription={blog.titleDescription}
              />
            </Link>
          ))}
      </div>
    </>
  );
}
