import { useScroll, motion } from "framer-motion";

export function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="bg-white"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 25,
          left: "2.5rem",
          width: 250,
          height: 3,
          originX: 0,
          zIndex: 40,
          mixBlendMode: "exclusion",
        }}
      />
    </>
  );
}
