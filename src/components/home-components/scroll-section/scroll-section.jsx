import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ScrollSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 100]);

  return (
    <>
      <section className="relative w-screen h-[400vh]" ref={container}>
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div className="abolsute size-full top-0 flex items-center justify-center">
            <motion.div style={{ rotate, scale, zoom }}>
              <Image
                src={"/icon-b-svg.svg"}
                width={500}
                height={500}
                alt="icon"
                className="w-12 h-12 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollSection;
