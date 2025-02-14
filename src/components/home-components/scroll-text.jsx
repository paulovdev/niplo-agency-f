import { useEffect } from "react";
import { gsap } from "gsap";
import { useScroll, motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import servicesData from "@/data/servicesData";
import { useCursor } from "@/context/cursor-context";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const ScrollLinked = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="bg-white"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 25,
          left: "2.5rem",
          width: 250,
          height: 3,
          originX: 0,
          zIndex: 40,
          mixBlendMode: "exclusion",
        }}
      />
    </>
  );
};

const ScrollText = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { setCursorVariant } = useCursor();
  const handleMouseEnter = () => {
    setCursorVariant("scrollText");
  };
  const handleMouseLeave = () => {
    setCursorVariant("default");
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: `+=${servicesData.length * 1200}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    servicesData.forEach((section, index) => {
      tl.fromTo(
        `.${section.id}-h1-text`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          `.${section.id}-list-text li`,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 }
        )
        .addPause("+=2");

      if (index !== servicesData.length - 1) {
        tl.to(`.${section.id}-h1-text, .${section.id}-list-text li`, {
          opacity: 0,
          y: -50,
          duration: 1,
        });
      }
    });
  }, []);

  return (
    <>
      {inView && <ScrollLinked />}
      <section
        className="w-screen min-h-screen select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={ref}
      >
        <div
          className="w-full h-[100dvh] flex flex-col items-center justify-center"
          id="clip"
        >
          {servicesData.map((section) => (
            <div
              key={section.id}
              className="absolute w-full flex flex-col items-center justify-center text-center"
            >
              <div className={`${section.id}-h1-text opacity-0`}>
                <h1 className="text-[8vw] text-color font-[500] tracking-[-3px] uppercase max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600]">
                  <span className="mr-2 text-sm font-robert-medium tracking-[1px]">
                    {section.number}
                  </span>
                  {section.title}
                </h1>
                <ul
                  className={`${section.id}-list-text font-general text-color text-[1rem] font-[500] tracking-[-.7px] uppercase`}
                >
                  {section.list.map((word, index) => (
                    <li key={index} className="opacity-0">
                      {word}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ScrollText;
