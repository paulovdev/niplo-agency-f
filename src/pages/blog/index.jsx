import Blogs from "@/components/blog-components/blogs";
import Hero from "@/components/blog-components/hero";
import Layout from "@/utils/stairs";

export default function Blog() {
  return (
    <Layout>
      <section className="w-full mx-auto my-0 p-[2.5rem] max-laptop:p-[1rem]">
        <Hero />
        <Blogs />
      </section>
    </Layout>
  );
}
