import { useState } from "react";
import { motion } from "framer-motion";
import { menu, navigationsTextAnim } from "./anim";
import { useApStore } from "@/store/zustandStore";
import { SiVerizon } from "react-icons/si";

const PerspectiveMenuText = ({ label, apActive }) => (
  <div className="size-full bg-none">
    <div className="text-color3 font-general text-[.8rem] font-[400] tracking-[-.5px] uppercase flex justify-between cursor-pointer">
      {label} {apActive ? <SiVerizon /> : null}
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

const MenuContent = ({ isOpen, closeMenuAfterSelectAp }) => {
  const { selectedAp, setSelectedAp } = useApStore();
  const navigationsMenuText = [
    { name: "GRADE", change: "grid" },
    { name: "LISTA", change: "list" },
    { name: "Masonry", change: "masonry" },
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
        <p className="w-full col-span-3 text-center text-color3 font-general font-[500] text-[.85rem] leading-[2] uppercase border-b border-border2">
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
              onClick={() => {
                setSelectedAp(item.change); // Atualizando o estado com Zustand
                scrollTo({ top: 0 });
                closeMenuAfterSelectAp();
              }}
            >
              <PerspectiveMenuText
                label={item.name}
                apActive={selectedAp === item.change}
              />
              <PerspectiveMenuText
                label={item.name}
                apActive={selectedAp === item.change}
              />
            </motion.div>
            <div className="w-full h-[1px] bg-border2 my-[1rem]" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <>
      <HamburguerMenu
        isOpen={menuToggle}
        onClick={() => setMenuToggle(!menuToggle)}
      />

      <MenuContent
        isOpen={menuToggle}
        closeMenuAfterSelectAp={() => setMenuToggle(!menuToggle)}
      />
    </>
  );
};

export default Menu;
