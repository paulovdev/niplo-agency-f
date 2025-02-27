import Head from "next/head";
import { dropYAnim } from "@/components/works-components/anim";
import Hero from "@/components/works-components/hero";
import Menu from "@/components/reusable/menu/menu";
import Works from "@/components/works-components/works";
import Layout from "@/utils/stairs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowScroll } from "react-use";
import { useApStore } from "@/store/zustandStore";

const WorksPage = () => {
  const { selectedAp } = useApStore();
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const { y } = useWindowScroll();

  useEffect(() => {
    setScrolled(selectedAp === "grid" ? y > 250 : y > 150);
  }, [y]);

  return (
    <Layout>
      <Head>
        <title>Agência N® | Trabalhos</title>
        <meta
          name="description"
          content="Confira nosso portfólio de projetos inovadores! A Agência N® cria experiências digitais únicas, combinando design, animações e tecnologia."
        />
        <meta
          name="keywords"
          content="portfólio, design digital, desenvolvimento web, UI/UX, animações interativas"
        />
        <meta name="author" content="Agência N®" />

        <meta
          property="og:title"
          content="Trabalhos | Agência N® - Design e Web Inovadores"
        />
        <meta
          property="og:description"
          content="Explore nossos trabalhos de design digital e websites inovadores, desenvolvidos para criar experiências impactantes."
        />
        <meta property="og:image" content="/images/portfolio-preview.jpg" />
        <meta
          property="og:url"
          content="https://niplo-agency-f.vercel.app/works"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Trabalhos | Agência N® - Trabalhos Criativos e Interativos"
        />
        <meta
          name="twitter:description"
          content="Veja como combinamos design, animações e tecnologia para criar experiências memoráveis."
        />
        <meta name="twitter:image" content="/images/portfolio-preview.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

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
