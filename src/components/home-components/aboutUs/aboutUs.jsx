import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { pSlideParagraphAnim } from "./anim";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const paragraph = [
    "Este é um lugar onde os limites da realidade não nos impedem mais.",
    "Um lugar de colaboração. Um lugar de criatividade. Um lugar onde a ",
    "mundos são criados e ideias são formadas. fotografia virtual, o ",
    "movimento e o design se cruzam.",
    "<br/>",
    "Um lugar onde este não é um lugar comum. Este é um lugar onde",
    "os limites são ultrapassados. Este é um lugar maravilhoso, ",
    "onde tudo é possível. Venha caminhar conosco.",
  ];

  return (
    <section
      ref={ref}
      className="h-full pt-[100px] pb-[50px]
      flex items-start 
      select-none pointer-events-none 
      max-laptop:flex-col max-laptop:pt-[50px]"
    >
      <div className="w-full h-[250px] flex-[2] flex items-center justify-center gap-8">
        <Image
          src={"/icon-b-svg.svg"}
          width={500}
          height={500}
          alt="icon"
          className="w-12 h-12 object-cover animate-spin "
        />
      </div>

      <div
        className="w-full 
      flex-[2] flex flex-col items-start justify-start"
      >
        {paragraph.map((text, i) => (
          <div className="size-full overflow-hidden" key={i}>
            <motion.p
              key={i}
              custom={i}
              variants={pSlideParagraphAnim}
              initial="initial"
              animate={inView ? "animate" : ""}
              className="font-general text-color text-[].9rem] font-[500] tracking-[-0.02em] leading-[1.4] uppercase"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        ))}

        <div className="h-[100px]" />
        <motion.div
          className="relative w-[100px] h-[25px] pointer-events-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 25,
            transition: { duration: 0.4, delay: 0.5, ease: [0.42, 1, 0.74, 1] },
          }}
        >
          <button
            className="w-[170px] h-[32px] 
          bg-background3 rounded-full 
          flex items-center justify-center"
          >
            <span className="font-general text-color3 text-[.7rem] tracking-[-.3px] font-[500] uppercase">
              ver + sobre a gente
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
