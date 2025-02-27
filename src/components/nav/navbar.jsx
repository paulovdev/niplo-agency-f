"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

import Menu from "./menu";
import Link from "next/link";
import { PerspectiveMenu } from "./perspectiveText";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const { y } = useWindowScroll();
  const [menuToggle, setMenuToggle] = useState(false);

  const textColor =
    router.pathname === "/works"
      ? "#000"
      : router.pathname.startsWith("/works/") || router.pathname === "/"
      ? "#fff"
      : "#000";

  const navigationsTextAnim = {
    hover: {
      top: "-100%",
      transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    initial: {
      top: "0%",
    },
  };

  const opacityAnim = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const navAnim = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const navigationsText2 = [
    { id: 1, title: "INÍCIO", href: "/" },
    { id: 2, title: "SOBRE NÓS", href: "/about" },
    { id: 3, title: "TRABALHOS", href: "/works " },
    { id: 4, title: "BLOG", href: "/blog" },
  ];

  useEffect(() => {
    setScrolled(y > 550);
  }, [y]);

  return (
    <>
      {" "}
      <AnimatePresence mode="wait">
        <nav
          className="fixed w-full h-[50px] top-[20px] pb-[1rem] pt-[1rem] px-[2.5rem] flex items-center 
        z-50 pointer-events-none select-none max-laptop:px-[1rem] max-laptop:top-[0px]"
        >
          <ul className="w-full flex items-center justify-between">
            {/* IF NOT SCROLLED APPEARS NORMAL NAVBAR */}
            {!scrolled && (
              <motion.li
                className="cursor-pointer pointer-events-auto"
                variants={navAnim}
                initial="initial"
                animate={!scrolled ? "animate" : "exit"}
              >
                <Link href={"/"}>
                  <motion.div
                    className="relative size-full"
                    variants={navigationsTextAnim}
                    whileHover={{ rotate: 45 }}
                  >
                    {router.pathname.startsWith("/works/") ||
                    router.pathname === "/" ? (
                      <Image
                        src={"/icon-w-svg.svg"}
                        width={120}
                        height={120}
                        alt="icon"
                        className="w-6 h-6"
                      />
                    ) : (
                      <Image
                        src={"/icon-b-svg.svg"}
                        width={120}
                        height={120}
                        alt="icon"
                        className="w-6 h-6"
                      />
                    )}
                  </motion.div>
                </Link>
              </motion.li>
            )}
            {/* MENU DESKTOP */}
            <motion.div
              className="w-full flex justify-end items-center gap-[1.5rem] max-laptop:w-fit"
              variants={navAnim}
              initial="initial"
              animate={!scrolled ? "animate" : "exit"}
            >
              {!scrolled &&
                navigationsText2.map((i, index) => (
                  <li
                    className="w-fit h-[15px] overflow-hidden cursor-pointer pointer-events-auto max-laptop:hidden"
                    key={index}
                  >
                    <motion.div
                      className="relative size-full max-laptop:hidden"
                      variants={navigationsTextAnim}
                      whileHover="hover"
                    >
                      <Link href={i.href}>
                        <PerspectiveMenu
                          label={i.title}
                          color={textColor}
                          id={i.id}
                        />
                        <PerspectiveMenu
                          label={i.title}
                          color={textColor}
                          id={i.id}
                        />
                      </Link>
                    </motion.div>
                  </li>
                ))}

              {/* MENU MOBILE */}
              {!scrolled && (
                <li className="w-full h-[15px] overflow-hidden cursor-pointer pointer-events-auto hidden max-laptop:block">
                  <motion.div
                    className="relative size-full mb-[20px]"
                    onClick={() => setMenuToggle(!menuToggle)}
                    whileHover="hover"
                    variants={navigationsTextAnim}
                  >
                    <PerspectiveMenu label="MENU" color={textColor} id={0} />
                    <PerspectiveMenu label="MENU" color={textColor} id={0} />
                  </motion.div>
                </li>
              )}
            </motion.div>

            {/* IF SCROLLED APPEARS ONLY "MENU" SQUARE */}

            {scrolled && (
              <motion.div
                className="fixed top-0 right-0 bg-background5 px-[2rem] py-[.8rem] rounded-bl-[.5rem] cursor-pointer pointer-events-auto"
                variants={opacityAnim}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover="hover"
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <li className="w-fit h-[20px] overflow-hidden ">
                  <motion.div
                    className="relative size-full mb-[0px]"
                    variants={navigationsTextAnim}
                  >
                    <PerspectiveMenu label="MENU" color="#fff" id={0} />
                    <PerspectiveMenu label="MENU" color="#fff" id={0} />
                  </motion.div>
                </li>
              </motion.div>
            )}
          </ul>
        </nav>
      </AnimatePresence>
      <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </>
  );
}
