import Image from "next/image";
import blogsData from "@/data/blogsData";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { blogAnimation } from "../blog-components/anim";

const Blog = ({ id, img, title, category, min, titleDescription }) => {
  return (
    <div className="relative size-full flex items-center justify-start gap-[1.5rem] max-tablet:mb-0 cursor-default group">
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
    </div>
  );
};

const Blogs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className="relative w-full pb-[100px]" ref={ref}>
      <h2 className="mb-[2.5rem] font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase flex items-center gap-[.5rem]">
        BLOG NEWS /
        <Link
          className="w-fit bg-background rounded-[2rem] underline select-auto pointer-events-auto"
          href="/blog"
        >
          TODOS OS BLOGS
        </Link>
      </h2>

      {blogsData.slice(0, 4).map((blog, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={blogAnimation}
          initial="initial"
          animate={inView ? "animate" : ""}
          className="mb-[1.5rem]"
        >
          <Link href={`/blog/${blog.id}`} key={i}>
            <Blog
              id={blog.id}
              img={blog.img}
              title={blog.title}
              category={blog.category}
              min={blog.min}
              titleDescription={blog.titleDescription}
            />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};
export default Blogs;
