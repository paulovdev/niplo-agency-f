import Head from "next/head";
import Blogs from "@/components/blog-components/blogs";
import Hero from "@/components/blog-components/hero";
import Layout from "@/utils/stairs";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useWindowScroll } from "react-use";
import { dropYAnim } from "@/components/works-components/anim";
import Menu from "@/components/reusable/menu/menu";
import { useApStore } from "@/store/zustandStore";

export default function Blog() {
  const { selectedAp } = useApStore();
  const { y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  useEffect(() => {
    setScrolled(selectedAp === "grid" ? y > 250 : y > 150);
  }, [y]);

  return (
    <Layout>
      <Head>
        <title>Agência N® | Blog News</title>
        <meta
          name="description"
          content="Explore artigos exclusivos sobre design, inovação, desenvolvimento web e tendências digitais no blog da Agência N®."
        />
        <meta
          name="keywords"
          content="blog de design, UX/UI, desenvolvimento web, tendências digitais, inovação, branding"
        />
        <meta name="author" content="Agência N®" />

        <meta
          property="og:title"
          content="Blog da Agência N® - Design e Tecnologia"
        />
        <meta
          property="og:description"
          content="Fique por dentro das últimas tendências do design, UX/UI e tecnologia digital. Artigos exclusivos da Agência N®."
        />
        <meta property="og:image" content="/images/blog-cover.jpg" />
        <meta
          property="og:url"
          content="https://niplo-agency-f.vercel.app/blog"
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog da Agência N® - Insights sobre Design e Tecnologia"
        />
        <meta
          name="twitter:description"
          content="Artigos sobre design, inovação e desenvolvimento web. Fique atualizado com a Agência N®."
        />
        <meta name="twitter:image" content="/images/blog-cover.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

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
