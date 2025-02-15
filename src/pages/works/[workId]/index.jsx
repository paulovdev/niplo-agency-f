import Head from "next/head";
import DynamicImage from "@/components/reusable/dynamic-image";
import Hero from "@/components/works-components/workId-components/hero";
import WorkContent from "@/components/works-components/workId-components/work-content";
import worksData from "@/data/worksData";
import Layout from "@/utils/stairs";
import { useRouter } from "next/router";

const WorkView = () => {
  const router = useRouter();
  const { workId } = router.query;

  const works = worksData.find((work) => work.id === parseInt(workId));

  if (!works) return <p>Projeto não encontrado</p>;

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
        <Hero srcView={works.srcView} name={works.name} />

        <section className="w-full my-0 mx-auto px-[2.5rem] py-[4rem] max-tablet:px-[1rem]">
          <WorkContent name={works.name} works={works} />

          <div className="image-gallery mt-4">
            <div className="grid grid-cols-2 gap-4">
              {works.images.map((image, index) => (
                <DynamicImage
                  key={index}
                  src={image}
                  alt={`Imagem do projeto ${works.name} - ${index + 1}`}
                  width={1200}
                  height={1200}
                  className="w-full h-[600px] object-cover rounded-[1.5rem]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default WorkView;
