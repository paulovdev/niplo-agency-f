import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useMedia } from "react-use";
import { useEffect, useState } from "react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { useCursorStore, usePlayingVideoStore } from "@/store/zustandStore";

export const Cursor = () => {
  const { cursorVariant } = useCursorStore();
  const { isPlaying } = usePlayingVideoStore();
  const isTablet = useMedia("(max-width: 768px)");
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  useEffect(() => {
    const manageMouseMove = (e) => {
      mouseX.set(e.clientX + 30);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <>
      {!isTablet && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[200]"
          style={{ x: smoothX, y: smoothY }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              className="size-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
              key={cursorVariant}
            >
              {cursorVariant === "default" && <div className="hidden"></div>}
              {cursorVariant === "workSingle" && (
                <p className="text-color3 text-[.7rem] font-[500] font-general tracking-[-.5px] uppercase">
                  ver trabalho
                </p>
              )}
              {cursorVariant === "playReel" && (
                <p className="text-color3 text-[.7rem] font-[500] font-general tracking-[-.5px] uppercase">
                  {isPlaying ? "pausar" : "assistir"}
                </p>
              )}
              {cursorVariant === "scrollText" && (
                <p className="text-color text-[2rem]">
                  {scrollDirection === "down" ? (
                    <RiArrowDownLine />
                  ) : (
                    <RiArrowUpLine />
                  )}
                </p>
              )}
              {cursorVariant === "blog" && (
                <p className="text-color3 text-[.7rem] font-[500] font-general tracking-[-.5px] uppercase">
                  ler artigo
                </p>
              )}
            </motion.div>{" "}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
};
