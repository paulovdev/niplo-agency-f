"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = ({ srcView, name }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    ref: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <section className="relative w-screen h-screen" ref={container}>
      <div className="h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full">
          <Image
            src={srcView}
            alt={name}
            width={1920}
            height={1080}
            className="size-full object-center object-cover brightness-[85%]"
          />
          <div className="absolute bottom-6 left-1/2">
            <Image
              src="/mouse-scroll.gif"
              alt="Scroll indicator"
              width={35}
              height={45}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
