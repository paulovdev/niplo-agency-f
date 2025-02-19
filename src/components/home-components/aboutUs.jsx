import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { pSlideParagraphAnim } from "./anim";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const paragraph = [
    "Este é um lugar onde os limites da realidade não nos impedem mais.",
    "Um lugar de colaboração. Um lugar de criatividade. Um lugar onde a ",
    "mundos são criados e ideias são formadas. fotografia virtual, o ",
    "movimento e o design se cruzam.<br/><br/>",

    "Um lugar onde Este não é um lugar comum. Este é um lugar onde",
    "os limites são ultrapassados. Este é um lugar maravilhoso, ",
    "onde tudo é possível. Venha caminhar conosco.",
  ];

  return (
    <section
      ref={ref}
      className="h-full pt-[150px] pb-[150px] flex items-start select-none pointer-events-none max-laptop:flex-col"
    >
      <div className="w-full flex-[2] max-laptop:mb-[2.5rem]">
        <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase">
          ✦ um pouco sobre nós
        </h2>
      </div>

      <div className="w-full flex-[3.5] flex flex-col items-start justify-start">
        {paragraph.map((text, i) => (
          <div className="w-full overflow-hidden" key={i}>
            <motion.p
              key={i}
              custom={i}
              variants={pSlideParagraphAnim}
              initial="initial"
              animate={inView ? "animate" : ""}
              className="font-inter text-color text-[2.5rem] font-[450] tracking-[-0.01em] leading-[1.1]"
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
          <button className="w-[175px] h-[40px] bg-background3 rounded-full">
            <span className="font-general text-color3 text-[.75rem] tracking-[-.3px] font-[600] uppercase">
              ver + sobre a gente
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
