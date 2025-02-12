import Hero from "@/components/works-components/hero";
import Menu from "@/components/works-components/menu";
import Works from "@/components/works-components/works";
import Layout from "@/utils/stairs";

const WorksPage = () => {
  return (
    <Layout>
      <section className="mx-auto my-0 w-full px-[2.5rem] bg-background max-laptop:p-[1rem]">
        <Menu />
        <Hero />
        <Works />
      </section>
    </Layout>
  );
};
export default WorksPage;
