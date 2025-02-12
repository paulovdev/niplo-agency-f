import Description from "@/components/blog-components/blogId-components/description";
import Hero from "@/components/blog-components/blogId-components/hero";
import DynamicImage from "@/components/reusable/dynamic-image";
import blogsData from "@/data/blogsData";
import Layout from "@/utils/stairs";
import { useRouter } from "next/router";

const BlogView = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const blog = blogsData.find((blog) => blog.id === String(blogId));

  if (!blog) return <p>Blog not found</p>;

  return (
    <Layout>
      <main className="w-screen mx-auto my-0">
        <div className="relative size-full px-[2.5rem] py-[6rem] max-tablet:px-[1rem]">
          <Hero category={blog.category} title={blog.title} />

          <DynamicImage
            src={blog.img}
            alt={blog.title}
            width={1500}
            height={1500}
            className="w-full h-[800px] object-center object-cover rounded-[1rem] "
          />

          <Description description={blog.description} />
        </div>
      </main>
    </Layout>
  );
};

export default BlogView;
