import Blogs from "@/components/blog-components/blogs";
import Hero from "@/components/blog-components/hero";
import Layout from "@/utils/stairs";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowScroll } from "react-use";
import { useAp } from "@/context/ap-context";
import { dropYAnim } from "@/components/works-components/anim";
import Menu from "@/components/reusable/menu/menu";

export default function Blog() {
  const { selectedAp } = useAp();
  const { y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    setScrolled(selectedAp === "grid" ? y > 250 : y > 150);
  }, [y]);

  return (
    <Layout>
      <section className="w-full mx-auto my-0 p-[2.5rem] max-laptop:p-[1rem]">
        <AnimatePresence mode="wait">
          {scrolled && (
            <motion.div
              variants={dropYAnim}
              initial="initial"
              animate={inView ? "exit" : "animate"}
              exit="exit"
              className="fixed w-full h-[50px] left-0 bottom-[10px] flex justify-center items-center z-50 select-none max-tablet:bottom-[25px]"
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
        <Hero />
        <Blogs />
        <span ref={ref} className="absolute w-[100px] h-[100px]" />
      </section>
    </Layout>
  );
}
