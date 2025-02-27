const Hero = ({ category, title, min }) => {
  return (
    <section className="relative max-w-[1000px] mx-auto py-[4rem] flex flex-col justify-center items-center">
      <div className="mb-4 flex items-center gap-2 text-color2 font-robert-regular text-[.9rem] font-[500] uppercase tracking-[-.5px]">
        <span>{category}</span>
        <span>•</span>
        <span>{min}</span>
      </div>

      <h2 className="w-full text-center text-[3rem] text-color font-[500] tracking-[-2px] leading-none uppercase ">
        {[title]}
      </h2>
    </section>
  );
};

export default Hero;
