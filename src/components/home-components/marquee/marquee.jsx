import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const MarqueeText = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <section
      className="relative py-[100px] 
      flex 
      select-none pointer-events-none overflow-hidden 
      max-tablet:py-[50px]"
      ref={container}
    >
      <Slide direction={"left"} left={"-60%"} progress={scrollYProgress} />
    </section>
  );
};

export default MarqueeText;

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [350 * direction, -350 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative
      text-color text-[12rem] font-[600] tracking-[-.5px] uppercase 
      flex items-center whitespace-nowrap gap-4
      pointer-events-auto overflow:hidden
      max-tablet:text-[.8rem] max-tablet:font-[600] max-tablet:tracking-[-.2px] 
      "
    >
      <h1>
        CRIATIVO QUE CHEGA ✓ DIREÇÃO DE ARTE ✓ BRANDING ✓ ESTRATÉGIA DE MARCA ✓
        CAMPANHAS ✓ DESENVOLVIMENTO DE CONCEITO ✓ CRIAÇÃO DE CONTEÚDO ✓
        COPYWRITING ✓ DIREÇÃO CRIATIVA ✓ CGI ✓ EMAIL MARKETING ✓ DESIGN
        AMBIENTAL ✓ ILUSTRAÇÃO ✓ MOVIMENTO ✓ EMBALAGEM ✓ FOTOGRAFIA ✓ PRODUÇÃO ✓
        ANÚNCIOS PAGOS ✓ DESIGN DE VAREJO ✓ ESTRATÉGIA DE MÍDIA SOCIAL ✓
        TIPOGRAFIA ✓
      </h1>
    </motion.div>
  );
};
