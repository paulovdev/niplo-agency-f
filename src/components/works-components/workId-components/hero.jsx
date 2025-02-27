"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = ({ src, name, type }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    ref: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video
          className="size-full object-center object-cover brightness-[85%] 
            max-tablet:object-cover max-tablet:object-[50%_100%]"
          src={src}
          alt={name}
          width={800}
          height={900}
          loop
          muted
          autoPlay
        />
      );
    }
    return (
      <Image
        className="size-full object-center object-cover brightness-[85%] 
            max-tablet:object-cover max-tablet:object-[50%_100%]"
        src={src}
        alt={name}
        width={800}
        height={900}
        priority={false}
      />
    );
  };

  return (
    <section className="relative w-screen h-screen" ref={container}>
      <div className="h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full">
          {renderMedia()}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
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
