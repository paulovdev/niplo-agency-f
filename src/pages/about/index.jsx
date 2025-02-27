import Head from "next/head";
import Video from "@/components/home-components/video/video";
import Hero from "../../components/about-components/hero";
import Paragraph from "@/components/about-components/paragraph";
import Awards from "@/components/about-components/awards";
import Stats from "@/components/about-components/stats";
import Layout from "@/utils/stairs";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Agência N® | Sobre Nós</title>
        <meta
          name="description"
          content="Conheça a Agência N®: especialistas em design inovador, desenvolvimento web e experiências digitais impactantes."
        />
        <meta
          name="keywords"
          content="sobre nós, agência de design, desenvolvimento web, experiência digital, UX/UI, inovação"
        />
        <meta name="author" content="Agência N®" />

        <meta
          property="og:title"
          content="Sobre a Agência N® - Criando Experiências Digitais"
        />
        <meta
          property="og:description"
          content="Somos uma agência criativa especializada em design, tecnologia e inovação digital. Transformamos ideias em experiências memoráveis."
        />
        <meta property="og:image" content="/images/about-cover.jpg" />
        <meta
          property="og:url"
          content="https://niplo-agency-f.vercel.app/about"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sobre a Agência N® - Design, Inovação e Criatividade"
        />
        <meta
          name="twitter:description"
          content="Conheça nossa jornada, missão e valores. Criamos soluções digitais inovadoras para marcas impactantes."
        />
        <meta name="twitter:image" content="/images/about-cover.jpg" />

        <meta name="robots" content="index, follow" />
      </Head>

      <section className="mx-auto my-0 size-full">
        <div className="px-[2.5rem] max-laptop:p-[1rem]">
          <Hero />
        </div>

        <Video />

        <div className="p-[2.5rem] max-laptop:p-[1rem]">
          <Paragraph />
          <Stats />
          <Awards />
        </div>
      </section>
    </Layout>
  );
};

export default About;
