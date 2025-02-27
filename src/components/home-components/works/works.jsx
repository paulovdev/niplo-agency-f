import worksData from "@/data/worksData";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { workAnim, textAnim } from "./anim";

import { useCursorStore } from "@/store/zustandStore";
import { useMedia } from "react-use";

const Work = ({ name, category, src, type, year }) => {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorStore();
  const isTablet = useMedia("(max-width: 768px)");
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video
          className="max-w-[1200px] w-full h-[75vh] rounded-[.5rem] object-cover brightness-[85%] cursor-default max-tablet:h-[75vh]"
          src={src}
          alt={name}
          width={800}
          height={900}
          priority={false}
          loop
          muted
          autoPlay
        />
      );
    }
    return (
      <Image
        className="max-w-[1200px] w-full h-[75vh] rounded-[.5rem] object-cover brightness-[85%] cursor-default max-tablet:h-[75vh]"
        src={src}
        alt={name}
        width={800}
        height={900}
        priority={false}
      />
    );
  };
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
        {renderMedia()}
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

const Works = () => {
  return (
    <section className="relative pt-[50px] select-none pointer-events-none">
      <div className="grid-works size-full grid grid-cols-2 gap-[.5rem] max-laptop:grid-cols-1">
        {worksData.slice(0, 4).map((i) => (
          <Link key={i.id} href={`/works/${i.id}`}>
            <Work
              id={i.id}
              year={i.year}
              name={i.name}
              category={i.category}
              src={i.src}
              alt={i.alt}
              type={i.type}
            />
          </Link>
        ))}
      </div>
      <div className="py-12 w-full flex justify-end items-end">
        <Link
          className="w-[200px] h-[35px] bg-background3 rounded-full flex items-center justify-center select-auto pointer-events-auto cursor-pointer"
          href="/works"
        >
          <span className="font-general text-color3 text-[.7rem] tracking-[-.5px] font-[500] uppercase">
            ver todos os trabalhos
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Works;
