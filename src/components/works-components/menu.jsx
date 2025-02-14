"use client";
import { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";
import { AnimatePresence, motion } from "framer-motion";
import { dropYAnim, menu, navigationsTextAnim } from "./anim";
import { useAp } from "@/context/ap-context";

const PerspectiveMenuText = ({ label }) => (
  <div className="size-full bg-none">
    <div className="text-color3 font-general text-[1rem] font-[400] tracking-[-.5px] uppercase cursor-pointer">
      {label}
    </div>
  </div>
);

const HamburguerMenu = ({ isOpen, onClick }) => (
  <div
    className="w-[50px] h-[30px] bg-background rounded-[1.5rem] flex flex-col items-center justify-center gap-[.3rem] cursor-pointer z-[50]"
    onClick={onClick}
  >
    <motion.div
      className="w-[25px] h-[2px] bg-black transition-all duration-500"
      style={{
        translateY: isOpen ? "3px" : "0",
        rotate: isOpen ? "32deg" : "0",
      }}
    />
    <motion.div
      className="w-[25px] h-[2px] bg-black transition-all duration-500"
      style={{
        translateY: isOpen ? "-3px" : "0",
        rotate: isOpen ? "-32deg" : "0",
      }}
    />
  </div>
);

const MenuContent = ({ isOpen }) => {
   const {selectedAp, setSelectedAp} = useAp();
  const navigationsMenuText = [
    { name: "GRADE" , change:"grid"},
    { name: "Lista",change:"list" },
    { name: "Mansory" },
  ];

  return (
    <motion.div
      className="absolute w-[75px] h-[50px] bottom-0 bg-background3 rounded-[1.5rem] overflow-hidden flex flex-col items-start justify-start z-[40]"
      variants={menu}
      initial="close"
      animate={isOpen ? "open" : "close"}
    >
      <motion.div
        className="w-full p-[1rem] flex flex-col justify-center items-center gap-[1.5rem]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          transition: {
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            delay: isOpen ? 1 : 0,
          },
        }}
      >
        <p className="w-full col-span-3 text-center text-color3 font-general font-[500] text-[.85rem] uppercase border-b border-border2">
          MODO DE APRESENTACAO
        </p>

        {navigationsMenuText.map((item) => (
          <div
            key={item.name}
            className="w-full h-[25px] my-[6px] overflow-hidden cursor-pointer"
          >
            <motion.div
              className="relative size-full"
              variants={navigationsTextAnim}
              initial="initial"
              whileHover="hover"
             onClick={() =>setSelectedAp(item.change)}
            >
              <PerspectiveMenuText label={item.name} />
              <PerspectiveMenuText label={item.name} />
            </motion.div>
            <div className="w-full h-[1px] bg-border2 my-[1rem]" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    setScrolled(y > 550);
  }, [y]);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          variants={dropYAnim}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed w-full h-[50px] left-0 bottom-[10px] flex justify-center items-center z-50"
        >
          <HamburguerMenu
            isOpen={menuToggle}
            onClick={() => setMenuToggle(!menuToggle)}
          />

          <MenuContent isOpen={menuToggle} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
