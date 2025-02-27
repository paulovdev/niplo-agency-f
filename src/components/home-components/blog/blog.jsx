import Image from "next/image";
import blogsData from "@/data/blogsData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { blogAnimation } from "../../blog-components/anim";
import { useCursorStore } from "@/store/zustandStore";
import { blogAnim } from "./anim";

const Blog = ({ id, img, title, category, min, titleDescription }) => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorStore();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="relative size-full flex items-center justify-start gap-[1.5rem] mb-0 flex-col cursor-default"
      ref={ref}
      variants={blogAnim}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      custom={id}
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

const Blogs = () => {
  return (
    <section className="relative w-full pb-[100px]">
      <div className="w-full h-fit mx-auto my-0 flex items-start justify-start max-laptop:flex-col">
        <div className="w-full flex-[2] max-laptop:mb-[2.5rem]">
          <h2 className="font-general text-color text-xs tracking-[-.5px] font-[500] uppercase flex items-center gap-[.5rem]">
            BLOG NEWS /
            <Link
              className="w-fit bg-background rounded-[2rem] underline select-auto pointer-events-auto"
              href="/blog"
            >
              TODOS OS BLOGS
            </Link>
          </h2>
        </div>{" "}
      </div>

      <div className="pt-[50px] grid grid-cols-3 gap-[1.5rem] max-tablet:grid-cols-1 max-laptop:grid-cols-2">
        {blogsData.slice(0, 3).map((blog, i) => (
          <Link href={`/blog/${blog.id}`} key={i}>
            <Blog
              id={i}
              img={blog.img}
              title={blog.title}
              category={blog.category}
              min={blog.min}
              titleDescription={blog.titleDescription}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
