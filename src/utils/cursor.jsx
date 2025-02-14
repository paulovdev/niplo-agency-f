import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";
import { usePlayVideo } from "@/context/several-context";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

export const Cursor = () => {
  const { cursorVariant } = useCursor();
  const { isPlaying } = usePlayVideo();
  const isTablet = useMedia("(max-width: 768px)");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  useEffect(() => {
    const manageMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const variants = {
    default: {
      width: 150,
      height: 50,
      x: mousePos.x - -20,
      y: mousePos.y - 20,
      background: "transparent",
    },
    workSingle: {
      width: 150,
      height: 50,
      x: mousePos.x - -20,
      y: mousePos.y - 20,
      background: "transparent",
    },
    playReel: {
      width: 150,
      height: 50,
      x: mousePos.x - -20,
      y: mousePos.y - 20,
      background: "transparent",
    },
    scrollText: {
      width: 150,
      height: 50,
      x: mousePos.x - -20,
      y: mousePos.y - 20,
      background: "transparent",
    },
    blog: {
      width: 150,
      height: 50,
      x: mousePos.x - -20,
      y: mousePos.y - 20,
      background: "transparent",
    },
  };

  return (
    <>
      {!isTablet && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[50] "
          variants={variants}
          animate={cursorVariant}
        >
          <AnimatePresence mode="wait">
            {cursorVariant === "workSingle" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
              >
                <p className="text-color3 text-[.8rem] font-[500] font-general tracking-[-.5px] uppercase flex-nowrap">
                  ver projeto
                </p>
              </motion.div>
            )}
            {cursorVariant === "playReel" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <p className="text-color3 text-[.8rem] font-[500] font-general tracking-[-.5px] uppercase">
                  {isPlaying ? "clique para pausar" : "clique para assistir"}
                </p>
              </motion.div>
            )}
            {cursorVariant === "scrollText" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <p className="text-color text-[2rem]">
                  {scrollDirection === "down" ? (
                    <RiArrowDownLine />
                  ) : (
                    <RiArrowUpLine />
                  )}
                </p>
              </motion.div>
            )}
            {cursorVariant === "blog" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <p className="text-color text-[.8rem] font-[500] font-general tracking-[-.5px] uppercase flex-nowrap">
                  ler artigo
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};
