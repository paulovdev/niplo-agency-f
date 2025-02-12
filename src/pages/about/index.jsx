import Video from "@/components/about-components/video";
import Hero from "../../components/about-components/hero";
import Paragraph from "@/components/about-components/paragraph";
import Awards from "@/components/about-components/awards";
import Stats from "@/components/about-components/stats";
import Curve from "@/utils/stairs";

const About = () => {
  return (
    <Curve>
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
    </Curve>
  );
};

export default About;
