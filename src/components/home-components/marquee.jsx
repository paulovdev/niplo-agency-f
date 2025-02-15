import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MarqueeText = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <section
      className="relative py-[100px] flex select-none pointer-events-none  overflow-hidden max-tablet:py-[50px]"
      ref={container}
    >
      <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
      <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
      <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
    </section>
  );
};

export default MarqueeText;

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap  overflow:hidden"
    >
      <h1 className="ml-[2rem] text-[8vw] text-color font-[500] tracking-[1px] leading-[0.8] uppercase pointer-events-auto max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600]">
        APRESENTANDO
      </h1>
    </motion.div>
  );
};
