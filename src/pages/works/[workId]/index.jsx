import Head from "next/head";
import Hero from "@/components/works-components/workId-components/hero";
import WorkContent from "@/components/works-components/workId-components/work-content";
import worksData from "@/data/worksData";
import Layout from "@/utils/stairs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { useLenis } from "@/context/lenis-context";
import NextWork from "@/components/works-components/workId-components/next-work";

const WorkView = () => {
  const { startLenis } = useLenis();
  const router = useRouter();
  const { workId } = router.query;

  const works = worksData.find((work) => work.id === parseInt(workId));

  if (!works) return <p>Projeto não encontrado</p>;

  useEffect(() => {
    startLenis();
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <Layout>
      <Head>
        <title>{works.name} - Agência N® </title>
        <meta
          name="description"
          content={`Confira o projeto ${works.name}, desenvolvido pela Agência N®. Design inovador, criatividade e tecnologia para marcas de impacto.`}
        />
        <meta
          name="keywords"
          content={`projeto ${works.name}, design, desenvolvimento web, inovação digital, branding, experiência visual`}
        />
        <meta name="author" content="Agência N®" />

        <meta property="og:title" content={`${works.name} - Agência N®`} />
        <meta
          property="og:description"
          content={`Veja os detalhes do projeto ${works.name}, uma solução criativa desenvolvida pela Agência N®. Conheça mais!`}
        />
        <meta property="og:image" content={works.srcView} />
        <meta
          property="og:url"
          content={`https://niplo-agency-f.vercel.app/work/${workId}`}
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${works.name} - Agência N®`} />
        <meta
          name="twitter:description"
          content={`Explore o projeto ${works.name} e veja como a Agência N® transforma ideias em experiências digitais incríveis.`}
        />
        <meta name="twitter:image" content={works.srcView} />

        <meta name="robots" content="index, follow" />
      </Head>
      <main className="size-full">
        <Hero src={works.src} type={works.type} name={works.name} />

        <section className="w-full my-0 mx-auto px-[2.5rem] py-[4rem] max-tablet:px-[1rem]">
          <WorkContent name={works.name} works={works} />

          <div className="image-gallery mt-4">
            <div className="grid grid-cols-2 gap-2">
              {/* Render videos if available */}
              {works.videos.length > 0 &&
                works.videos.map((video, index) => (
                  <div key={index}>
                    <video
                      className="w-full h-[600px] object-cover rounded-[.5rem] max-tablet:h-[400px]"
                      src={video}
                      alt={works.name}
                      width={800}
                      height={900}
                      loop
                      muted
                      autoPlay
                    />
                  </div>
                ))}
              {works.images.length > 0 &&
                works.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      className="w-full h-[600px] object-cover rounded-[.5rem] max-tablet:h-[400px]"
                      src={image}
                      alt={works.name}
                      width={800}
                      height={900}
                      priority={false}
                    />
                  </div>
                ))}
            </div>
          </div>

          <NextWork />
        </section>
      </main>
    </Layout>
  );
};

export default WorkView;
