"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { PerspectiveMenu, PerspectiveMenuText } from "./perspectiveText";
import { useRouter } from "next/router";
import {
  contentAnim,
  menuAnim,
  navigationsMenuTextAnim,
  navigationsTextAnim,
} from "./anim";

const Menu = ({ menuToggle, setMenuToggle }) => {
  const router = useRouter();

  useEffect(() => {
    setMenuToggle(false);
  }, [router.pathname]);

  const navigationsMenuText = [
    { title: "INÍCIO", href: "/" },
    { title: "SOBRE NÓS", href: "/about" },
    { title: "CONTATO", href: "/contact" },
    { title: "TRABALHOS", href: "/works" },
    { title: "BLOG", href: "/blog" },
  ];

  const navigationsText = [
    { title: "INSTAGRAM" },
    { title: "FACEBOOK" },
    { title: "TWITTER" },
    { title: "YOUTUBE" },
    { title: "LINKEDIN" },
  ];

  return (
    <>
      <motion.div
        variants={menuAnim}
        initial="closed"
        animate={menuToggle ? "open" : "closed"}
        className="fixed w-full h-0 top-0 right-0 bg-background4 backdrop-blur-3xl select-none overflow-hidden z-[60]"
      >
        {/* TOP-NAVBAR */}
        <div className="fixed w-full h-[50px] top-[3px] pb-[3rem] pt-[1.5rem] px-[1rem] flex items-center z-50 pointer-events-none select-none">
          <ul className="w-full flex items-center justify-end">
            {/* CLOSE */}
            <li className="w-fit h-[20px] overflow-hidden cursor-pointer pointer-events-auto">
              <motion.div
                className="relative size-full "
                onClick={() => setMenuToggle(!menuToggle)}
                whileHover="hover"
                variants={navigationsTextAnim}
              >
                <PerspectiveMenu label="FECHAR" color="#fff" id={0} />
                <PerspectiveMenu label="FECHAR" color="#fff" id={0} />
              </motion.div>
            </li>
          </ul>
        </div>

        {/* MENU-NAVIGATION */}
        <motion.div
          variants={contentAnim}
          initial="closed"
          animate={menuToggle ? "open" : "closed"}
          className="relative w-full h-screen pl-[2.5rem] flex items-center justify-between 
                    max-tablet:flex-col max-tablet:px-[1rem] max-tablet:py-[8rem]"
        >
          <div className="w-full h-full flex-[2] flex flex-col items-start justify-center">
            <span className="mb-[2rem] text-[.7rem] text-color2 font-[500] font-general">
              NAVEGAR PELO SITE
            </span>
            {/* NAVIGATION CONTENT */}
            <div className="w-full flex flex-col items-start gap-[.25rem]">
              {navigationsMenuText.map((i) => {
                const isActive =
                  router.pathname.split("/")[1] === i.href.split("/")[1];

                return (
                  <div
                    key={i.title}
                    className="w-full h-[80px] overflow-hidden cursor-pointer"
                  >
                    <Link href={i.href}>
                      <motion.div
                        className="relative size-full"
                        variants={navigationsMenuTextAnim}
                        initial="initial"
                        whileHover="hover"
                      >
                        <PerspectiveMenuText
                          label={i.title}
                          isActive={isActive}
                        />
                        <PerspectiveMenuText
                          label={i.title}
                          isActive={isActive}
                        />
                      </motion.div>
                      <div className="w-full h-[1px] bg-border2 my-[1rem]" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="w-full pt-[50px] pr-[2.5rem] flex items-end justify-between gap-[1rem]">
              {navigationsText.map((i, index) => (
                <span className="text-color3 font-general font-[500] text-[.8rem] uppercase">
                  {i.title}
                </span>
              ))}
            </div>
          </div>

          {/* NAVIGATION VIDEO */}
          <motion.div
            className="w-full h-full flex-[4] flex items-center justify-center max-tablet:hidden"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <video
              className="w-full h-full object-cover size-full rounded-[.5rem]"
              width={400}
              height={400}
              autoPlay
              loop
              src={"/vid-4.mp4"}
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Menu;
