import { dropYAnim } from "@/components/works-components/anim";
import Hero from "@/components/works-components/hero";
import Menu from "@/components/reusable/menu/menu";
import Works from "@/components/works-components/works";
import { useAp } from "@/context/ap-context";
import Layout from "@/utils/stairs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowScroll } from "react-use";

const WorksPage = () => {
  const { selectedAp } = useAp();
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { y } = useWindowScroll();

  useEffect(() => {
    setScrolled(selectedAp === "grid" ? y > 250 : y > 150);
  }, [y]);

  return (
    <Layout>
      <section className="mx-auto my-0 w-full px-[2.5rem] bg-background max-laptop:p-[1rem]">
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
        <Works />
        <span ref={ref} className="relative w-[100px] h-[10px]" />
      </section>
    </Layout>
  );
};
export default WorksPage;
