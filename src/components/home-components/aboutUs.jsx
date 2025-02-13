import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { pSlideParagraphAnim } from "./anim";

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const paragraph = [
    "ACREDITAMOS QUE MARKETING E SUSTENTABILIDADE PODEM CRIAR UMA SINERGIA PODEROSA. NOSSA EQUIPE AJUDA ORGANIZAÇÕES A ALINHAR SEUS VALORES, AÇÕES E COMUNICAÇÃO, GARANTINDO QUE SUA MENSAGEM REFLITA AUTENTICAMENTE SEU COMPROMISSO COM UM FUTURO MELHOR. EM UM MUNDO ONDE A AUTENTICIDADE IMPORTA, PREENCHEMOS A LACUNA ENTRE PROPÓSITO E PERCEPÇÃO. POR MEIO DE NARRATIVAS ESTRATÉGICAS E ENGAJAMENTO SIGNIFICATIVO, AJUDAMOS AS MARCAS A TRANSFORMAR SUAS CONVICÇÕES EM HISTÓRIAS ENVOLVENTES QUE INSPIRAM CONFIANÇA E GERAM IMPACTO.",
    "SLAPS ESTÁ PROCURANDO UM DIRETOR DE ARTE QUE SE DESTACA NA INTERSECÇÃO ENTRE ESTRATÉGIA CRIATIVA, DESIGN E CULTURA—ALGUÉM COMPROMETIDO EM ULTRAPASSAR LIMITES E DESAFIAR O STATUS QUO. ESTE PROFISSIONAL TEM UMA HABILIDADE COMPROVADA PARA LIDERAR EQUIPES NA CONCEPÇÃO DE IDEIAS EXTRAORDINÁRIAS E TRANSFORMÁ-LAS EM HISTÓRIAS IMPACTANTES QUE SE ALINHAM À VISÃO DE NOSSOS CLIENTES PARA MOLDAR INDÚSTRIAS.",
    "SUSTENTABILIDADE NÃO É APENAS UM OBJETIVO—É UM MOVIMENTO. EMPODERAMOS ORGANIZAÇÕES A NAVEGAR POR ESSE CENÁRIO EM EVOLUÇÃO, CRIANDO MENSAGENS QUE RESSOAM E ESTRATÉGIAS QUE FAZEM A DIFERENÇA.",
  ];

  return (
    <section
      ref={ref}
      className="h-full pt-[50px] pb-[50px] border-b border-border flex items-start select-none pointer-events-none max-laptop:flex-col"
    >
      <div className="w-full flex-[2] max-laptop:mb-[2.5rem]">
        <h2 className="font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase">
          ✦ um pouco sobre nós
        </h2>
      </div>

      <div className="w-full flex-[3] flex flex-col items-start justify-start">
        {paragraph.map((text, i) => (
          <div className="w-full overflow-hidden">
            <motion.p
              key={i}
              custom={i}
              variants={pSlideParagraphAnim}
              initial="initial"
              animate={inView ? "animate" : ""}
              className="mb-[1rem] font-general text-color text-[.9rem] font-[500] tracking-[-.9px] uppercase"
            >
              {text}
            </motion.p>
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
