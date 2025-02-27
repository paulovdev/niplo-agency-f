import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { h1SlideTextAnim, pAnim, textAnim } from "./anim";
import CountUp from "react-countup";
import Image from "next/image";

const randomTexts = [
  "A Agência Niplo é a marca das mentes visionárias.",
  "Inovação impulsiona o futuro das marcas.",
  "Soluções inteligentes para um mundo conectado.",
  "Fazendo negócios com estratégia e criatividade.",
  "Onde a originalidade encontra a estratégia inteligente.",
];

export default function LayoutHome({ children }) {
  const [selectedText, setSelectedText] = useState(randomTexts[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomTexts.length);
    setSelectedText(randomTexts[randomIndex]);

    // Simula um carregamento e remove o preloader após 3 segundos
    setTimeout(() => setIsVisible(false), 3000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div className="preloader" exit={{ opacity: 1 }}>
            <motion.div
              className="transition-text flex flex-col items-center justify-between"
              variants={textAnim}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="w-full h-full flex items-end justify-center">
                <motion.p
                  className="relative text-color3 text-center font-general text-[.75rem] tracking-[-.5px] font-[400] uppercase animate-pulse"
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
                  <h1 className="text-[.7rem] text-center text-color3 font-general font-[500] leading-[1]">
                    CARREGANDO <CountUp delay={0.5} duration={2} end={100} />%
                  </h1>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
