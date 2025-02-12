import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollText = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        ease: "power2.out",
      },
    });

    tl.fromTo(
      ".initial-text",
      { scale: 0.8, opacity: 0, y: 120 },
      { scale: 1, opacity: 1, y: -50, duration: 1.5, ease: "power2.out" }
    )
      .fromTo(
        ".background-text-1",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      )
      .fromTo(
        [".h-1", ".h-2", ".h-3", ".h-4"],
        { opacity: 0, scale: 0.8, y: 100 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".background-text-2 li",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
  }, []);

  return (
    <section
      className="min-h-screen w-screen pb-12 flex items-center justify-center"
      id="about"
    >
      <div
        className="w-[100vw] h-dvh flex flex-col items-center justify-center"
        id="clip"
      >
        <h2 className="initial-text w-full px-[2.5rem] text-start font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase opacity-0">
          5. SERVICES
        </h2>

        <div className="background-text-1 w-full px-[2.5rem] grid grid-cols-4 opacity-0 mt-10">
          <div className="w-full h-[50px]">
            <h1 className="h-1 text-[1.75rem] font-[600] uppercase">
              <span className="mr-[.5rem] text-[.8rem] font-robert-medium tracking-[1px]">
                (1)
              </span>
              Strategy
            </h1>
          </div>

          <div className="w-full h-[50px]">
            <h1 className="h-2 text-[1.75rem] font-[600] uppercase">
              <span className="mr-[.5rem] text-[.8rem] font-robert-medium tracking-[1px]">
                (2)
              </span>
              Design
            </h1>
          </div>

          <div className="w-full h-[50px]">
            <h1 className="h-3 text-[1.75rem] font-[600] uppercase">
              <span className="mr-[.5rem] text-[.8rem] font-robert-medium tracking-[1px]">
                (3)
              </span>
              Development
            </h1>
          </div>

          <div className="w-full h-[50px]">
            <h1 className="h-4 text-[1.75rem] font-[600] uppercase">
              <span className="mr-[.5rem] text-[.8rem] font-robert-medium tracking-[1px]">
                (4)
              </span>
              Growth
            </h1>
          </div>
        </div>

        <div className="background-text-2 w-full px-[2.5rem] grid grid-cols-4 mt-10">
          <ul className="p-1 w-full font-robert-regular font-[600] text-[.9rem] uppercase">
            {"Brand Audit Qualitative Research Quantitative Research Discovery Workshop Competitive Analysis"
              .split(" ")
              .map((word, index) => (
                <li key={index}>{word}</li>
              ))}
          </ul>
          <ul className="p-2 w-full font-robert-regular font-[600] text-[.9rem] uppercase">
            {"Brand Identity Art Direction User Experience (UX) User Interface (UI) Wireframe & Prototyping Product Design Mobile App Website"
              .split(" ")
              .map((word, index) => (
                <li key={index}>{word}</li>
              ))}
          </ul>
          <ul className="p-3 w-full font-robert-regular font-[600] text-[.9rem] uppercase">
            {"Creative Development Technical Architecture Headless eCommerce Front-End Development Back-End"
              .split(" ")
              .map((word, index) => (
                <li key={index}>{word}</li>
              ))}
          </ul>
          <ul className="p-4 w-full font-robert-regular font-[600] text-[.9rem] uppercase">
            {"Conversion Rate Optimization (CRO) Talent Strategy Revenue Operations Lifecycle"
              .split(" ")
              .map((word, index) => (
                <li key={index}>{word}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScrollText;
