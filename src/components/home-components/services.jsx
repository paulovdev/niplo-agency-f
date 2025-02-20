"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import servicesData from "@/data/servicesData";

const MaskBackground = ({ src, title, description, id }) => {
  const container = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const textAnim = {
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div
      ref={container}
      key={id}
      className="w-screen h-screen overflow-hidden relative"
    >
      <motion.div
        style={{ y }}
        className="relative w-screen h-[100vh] flex items-center justify-center"
        ref={ref}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
          width={1920}
          height={1080}
          src={src}
          alt={src}
        />
        <motion.div
          className="absolute w-full h-[50vh] px-[2.5rem] flex flex-col items-start justify-end"
          variants={textAnim}
          initial="initial"
          animate={inView ? "animate" : ""}
        >
          <h2 className="mb-[2.5rem] font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase ">
            our services
          </h2>

          <div className="w-full flex items-start justify-start">
            <h1 className="text-[5vw] text-center text-color font-[400] tracking-[-4px] leading-[1] uppercase">
              {title}
            </h1>
          </div>

          <div className="w-full flex items-end justify-end">
            <p className="text-color font-robert-regular text-[1.1rem] font-[300] tracking-[-.8px] leading-[1.4] max-tablet:text-[1rem] max-tablet:tracking-[-.6px]">
              {description}
            </p>{" "}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative pt-[50px] pb-[150px]">
      {servicesData.map((service) => (
        <div key={service.id}>
          <MaskBackground
            src={service.src}
            title={service.title}
            description={service.description}
            id={service.id}
          />
        </div>
      ))}
    </section>
  );
};

export default Services;
