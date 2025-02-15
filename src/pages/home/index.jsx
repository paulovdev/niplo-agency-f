import Head from "next/head";
import Hero from "@/components/home-components/hero/hero";
import Works from "@/components/home-components/works";
import AboutUs from "@/components/home-components/aboutUs";
import LayoutHome from "@/utils/preloader";
import Several from "@/components/home-components/several";
import { useEffect, useState } from "react";
import Layout from "@/utils/stairs";
import ScrollText from "@/components/home-components/scroll-text";
import MarqueeText from "@/components/home-components/marquee";
import Awards from "@/components/home-components/awards";
import Video from "@/components/about-components/video";
import Blogs from "@/components/home-components/blog";

const Home = () => {
  const [pageViewed, setPageViewed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewed = sessionStorage.getItem("viewed?");
      if (!viewed) {
        sessionStorage.setItem("viewed?", "true");
        setPageViewed(false);
      } else {
        setPageViewed(true);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Agência N® | Design, Inovação e Experiências Digitais</title>
        <meta
          name="description"
          content="A Agência N® é especialista em design, websites interativos e animações digitais que elevam a experiência do usuário ao próximo nível."
        />
        <meta
          name="keywords"
          content="agência de design, web design, animações digitais, UI/UX, desenvolvimento web"
        />
        <meta name="author" content="Agência N®" />

        <meta
          property="og:title"
          content="Agência N® - Design, Inovação e Experiências Digitais"
        />
        <meta
          property="og:description"
          content="Criamos experiências digitais marcantes através de design inovador, interações animadas e websites de alto desempenho."
        />
        <meta property="og:image" content="/images/seo-image.jpg" />
        <meta property="og:url" content="https://niplo-agency-f.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Agência N® - Transformando Ideias em Experiências Digitais"
        />
        <meta
          name="twitter:description"
          content="Somos uma agência focada em design interativo, animações digitais e websites de alto impacto."
        />
        <meta name="twitter:image" content="/images/seo-image.jpg" />

        <meta name="robots" content="index, follow" />
      </Head>

      {pageViewed ? <LayoutHome /> : <LayoutHome />}
      <main className="relative min-h-screen">
        <Hero />
        <div className="px-[2.5rem] max-laptop:px-[1rem]">
          <AboutUs />
          <Works />
        </div>
        <MarqueeText />

        <div className="px-[2.5rem] max-laptop:px-[1rem]">
          <Several />
        </div>
        <ScrollText />

        <Video />
        <div className="px-[2.5rem] max-laptop:px-[1rem]">
          <Awards />
          <Blogs />
        </div>
      </main>
    </>
  );
};

export default Home;
