"use client";
import { AnimatePresence, motion } from "framer-motion";
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
import {
  SiDribbble,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiTwitch,
  SiYoutube,
} from "react-icons/si";

const Menu = ({ menuToggle, setMenuToggle }) => {
  const router = useRouter();

  useEffect(() => {
    setMenuToggle(false);
  }, [router.pathname]);

  const navigationsMenuText = [
    { title: "INÍCIO", href: "/" },
    { title: "SOBRE NÓS", href: "/about" },
    { title: "TRABALHOS", href: "/works" },
    { title: "BLOG", href: "/blog" },
  ];

  const navigationsText = [
    { title: "feito por:", subTitle: "paulo" },
    { title: "Typografia:", subTitle: " Google Fonts" },
    { title: "Imagens: ", subTitle: "unsplash" },
    { subTitle: "Termos & Condições" },
  ];

  const navigationsIcons = [
    { icon: <SiInstagram /> },
    { icon: <SiFacebook /> },
    { icon: <SiDribbble /> },
    { icon: <SiYoutube /> },
    { icon: <SiLinkedin /> },
  ];

  return (
    <AnimatePresence>
      {menuToggle && (
        <motion.div
          variants={menuAnim}
          initial="closed"
          animate={menuToggle ? "open" : "closed"}
          exit="closed"
          className="menu fixed w-full h-0 top-0 right-0 bg-background4 backdrop-blur-3xl select-none overflow-hidden z-[60]"
          key={menuToggle}
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
          <div
            className="relative w-full h-screen pl-[2.5rem] flex items-center justify-between 
                    max-tablet:flex-col max-tablet:px-[1rem] max-tablet:py-[8rem]"
          >
            <motion.div
              className="w-full h-full flex-[2.25] flex flex-col items-start justify-around"
              variants={contentAnim}
              initial="closed"
              animate={menuToggle ? "open" : "exit"}
              exit="closed"
            >
              <div className="relative h-fit">
                <span className="relative text-[.7rem] text-color2 font-[500] font-general">
                  NAVEGAR PELO SITE
                </span>
                {/* NAVIGATION CONTENT */}
                <div className="w-full h-full mt-[50px] flex flex-col items-center justify-center gap-[.25rem]">
                  {navigationsMenuText.map((i) => {
                    const isActive =
                      router.pathname.split("/")[1] === i.href.split("/")[1];

                    return (
                      <div
                        key={i.title}
                        className="w-full h-[100px] overflow-hidden cursor-pointer"
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
              </div>

              <div className="relative h-fit">
                <div className="w-full pt-[50px] flex items-end justify-between gap-[1rem]">
                  {navigationsIcons.map((ico, i) => (
                    <span
                      key={i}
                      className="text-color3 font-general font-[500] text-[1.5rem] uppercase"
                    >
                      {ico.icon}
                    </span>
                  ))}
                </div>
                <div className="w-full pt-[50px] flex items-end justify-between gap-[1rem]">
                  {navigationsText.map((text, i) => (
                    <div key={i} className="w-fit flex items-start gap-1">
                      <span className="text-color2 font-general font-[500] text-[.8rem] uppercase">
                        {text.title}
                      </span>
                      <span className="text-color3 font-general font-[700] text-[.8rem] uppercase">
                        {text.subTitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* NAVIGATION VIDEO */}
            <motion.div
              className="w-full h-full flex-[4] flex items-center justify-center max-tablet:hidden"
              style={{
                clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <video
                className="w-full h-full object-cover size-full rounded-[.5rem]"
                width={400}
                height={400}
                src={"/videos/menu.mp4"}
                alt=""
                loop
                autoPlay
                playsInline
                muted
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
