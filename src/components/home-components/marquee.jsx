import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <section className="relative py-[100px] select-none pointer-events-none max-tablet:py-[50px]">
      <Marquee speed={100}>
        <div className="flex items-center justify-center">
          {Array(4)
            .fill("apresentando")
            .map((word, index) => (
              <>
                <h1
                  key={index}
                  className="ml-[2rem] text-[8vw] text-color font-[500] tracking-[1px] leading-[0.8] uppercase pointer-events-auto max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600]"
                >
                  {word}
                </h1>
              </>
            ))}
        </div>
      </Marquee>
    </section>
  );
};

export default MarqueeText;
