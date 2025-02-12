"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { appearAnimY } from "@/utils/anim";
const Description = ({ description }) => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="relative max-w-[600px] mx-auto py-[4rem] flex flex-col justify-center items-center"
      ref={ref}
      variants={appearAnimY}
      initial="initial"
      animate={inView ? "animate" : ""}
    >
      <div
        className="blog-text"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </motion.div>
  );
};

export default Description;
