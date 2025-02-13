import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { h1SlideTextAnim, pAnim, textAnim } from "./anim";
import CountUp from "react-countup";

const randomTexts = [
  "A Agência Niplo é a marca das mentes visionárias.",
  "Inovação impulsiona o futuro das marcas.",
  "Soluções inteligentes para um mundo conectado.",
  "Fazendo negócios com estratégia e criatividade.",
  "Onde a originalidade encontra a estratégia inteligente.",
];

export default function LayoutHome({ children }) {
  const [selectedText, setSelectedText] = useState(randomTexts[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    setSelectedText(randomTexts[randomIndex]);

    /*  animate(".transition-container", { opacity: 1 }); */
  }, []);

  return (
    <div className="page stairs ">
      <motion.div
        className="transition-text flex flex-col items-center justify-center "
        variants={textAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="w-full h-full flex items-end justify-center ">
          <motion.p
            className="relative text-color3 text-center font-general text-[.9rem] tracking-[-.5px] font-[400] uppercase animate-pulse"
            variants={pAnim}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {selectedText}
          </motion.p>
        </div>
        <div className="w-full h-full flex items-end justify-end overflow-hidden">
          <motion.div
            className="w-full p-[2.5rem] flex items-center justify-center gap-[1rem]"
            variants={h1SlideTextAnim}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-[.9rem] text-center text-color3 font-general font-[500] leading-[1]">
              <CountUp delay={0.5} duration={2} end={100} />%
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {children}
    </div>
  );
}
