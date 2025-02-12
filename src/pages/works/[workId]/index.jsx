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

  if (!works) return <p>Work not found</p>;

  return (
    <Layout>
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
                  alt={`Project image ${index + 1}`}
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
