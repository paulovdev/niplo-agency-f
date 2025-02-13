import Hero from "@/components/home-components/hero";
import Works from "@/components/home-components/works";
import Blog from "@/components/home-components/blog";
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
      {pageViewed ? <LayoutHome /> : <LayoutHome />}
      <main className="relative min-h-screen  overflow-x-hidden">
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
