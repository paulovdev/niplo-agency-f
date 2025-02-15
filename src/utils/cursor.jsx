import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
} from "framer-motion";
import { useCursor } from "@/context/cursor-context";
import { useMedia } from "react-use";
import { useEffect } from "react";
import { usePlayVideo } from "@/context/several-context";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { useRouter } from "next/router";

export const Cursor = () => {
  const { cursorVariant } = useCursor();
  const { isPlaying } = usePlayVideo();
  const router = useRouter();
  const isTablet = useMedia("(max-width: 768px)");
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const manageMouseMove = (e) => {
      mouseX.set(e.clientX - -30);
      mouseY.set(e.clientY - 0);
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {!isTablet && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[50]"
          style={{ x: smoothX, y: smoothY }}
        >
          <AnimatePresence mode="wait">
            {cursorVariant === "workSingle" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
              >
                <p className="text-color3 text-[.8rem] font-[500] font-general tracking-[-.5px] uppercase">
                  ver projeto
                </p>
              </motion.div>
            )}
            {cursorVariant === "playReel" && (
              <motion.div
                className="size-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
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
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <p className="text-color text-[2rem]">
                  {scrollY.get() > scrollY.getPrevious() ? (
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
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <p
                  className={`${
                    router.pathname === "/blog" ? "text-color3" : "text-color"
                  } text-[.8rem] font-[500] font-general tracking-[-.5px] uppercase`}
                >
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
