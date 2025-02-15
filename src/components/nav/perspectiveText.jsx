"use client";

import { motion } from "framer-motion";

export const PerspectiveMenu = ({ label, color, id }) => {
  const navigationsTextAnimCustom = {
    hover: {
      color: color,
      transition: {
        duration: 0.5,

        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.p
      className="text-color font-general font-[500] text-[.8rem] uppercase "
      animate="hover"
      variants={navigationsTextAnimCustom}
    >
      {id === 0 ? "" : <span className="text-[.5rem]">&#91;{id}&#93;</span>}{" "}
      {label}
    </motion.p>
  );
};

export const PerspectiveMenuText = ({ label, isActive, containerClass }) => {
  return (
    <div className="active-menu-link size-full bg-none  ">
      <div
        className={`text-color text-[4rem] font-[500] uppercase max-tablet:text-[3.5rem] max-tablet:tracking-[-.8px]
        ${isActive ? "text-active" : "text-color3"} ${containerClass} `}
      >
        {label}
        {isActive && (
          <span className="text-[.6rem] font-[600] font-general tracking-[1px] ml-[1rem]">
            &#91;você está aqui&#93;
          </span>
        )}
      </div>
    </div>
  );
};
