import Head from "next/head";
import Description from "@/components/blog-components/blogId-components/description";
import Hero from "@/components/blog-components/blogId-components/hero";
import DynamicImage from "@/components/reusable/dynamic-image";
import blogsData from "@/data/blogsData";
import Layout from "@/utils/stairs";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BlogView = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const blog = blogsData.find((blog) => blog.id === String(blogId));

  if (!blog) return <p>Blog não encontrado</p>;
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <Layout>
      <Head>
        <title>{blog.title} - Agência N®</title>
        <meta
          name="description"
          content={`${blog.title} - Leia agora no Blog da Agência N®. Insights sobre design, inovação, tecnologia e muito mais!`}
        />
        <meta
          name="keywords"
          content={`${blog.title}, blog de design, inovação digital, desenvolvimento web, UX/UI, tendências`}
        />
        <meta name="author" content="Agência N®" />

        <meta
          property="og:title"
          content={`${blog.title} - Blog da Agência N®`}
        />
        <meta
          property="og:description"
          content={`Confira nosso novo artigo: ${blog.title}. Explore as últimas tendências e insights do mercado digital.`}
        />
        <meta property="og:image" content={blog.img} />
        <meta
          property="og:url"
          content={`https://niplo-agency-f.vercel.app/blog/${blogId}`}
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${blog.title} - Blog da Agência N®`}
        />
        <meta
          name="twitter:description"
          content={`Novo artigo: ${blog.title}. Leia mais sobre inovação, design e tecnologia!`}
        />
        <meta name="twitter:image" content={blog.img} />

        <meta name="robots" content="index, follow" />
      </Head>

      <main className="w-screen mx-auto my-0">
        <div className="relative size-full px-[2.5rem] py-[6rem] max-tablet:px-[1rem]">
          <Hero category={blog.category} min={blog.min} title={blog.title} />

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
