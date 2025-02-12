import TextSlide from "@/components/reusable/text-slide";

const Hero = ({ category, title }) => {
  return (
    <section className="relative max-w-[1000px] mx-auto py-[4rem] flex flex-col justify-center items-center">
      <span className="mb-[1rem] text-color2  text-[.9rem] font-[500] uppercase tracking-[-.5px]">
        {category}
      </span>
      <TextSlide
        color="text-center text-color !text-[3rem] !tracking-[-4px] !leading-[1.2] uppercase"
        phrases={[title]}
        rightContentBol={false}
      />
    </section>
  );
};

export default Hero;
