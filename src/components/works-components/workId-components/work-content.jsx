
const WorkContent = ({ name, works }) => {
  return (
    <div className="w-full pb-[150px] mb-[50px] border-b border-border flex items-start justify-between max-tablet:flex-col max-tablet:pb-[50px]">
      <div className="flex flex-col">
        <span className="mb-[1rem] text-color2 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
          NIPLO APRESENTS
        </span>

        <h2
          className="w-full text-center text-[3rem] text-color font-[500] tracking-[-2px] leading-none uppercase 
      max-laptop:font-[600]"
        >
          {[name]}
        </h2>
      </div>

      <div className="flex items-start flex-col gap-[1rem] max-tablet:gap-[2rem] max-tablet:mt-[2.5rem]">
        {["description", "category", "client", "year"].map((key) => (
          <div key={key} className="flex items-start flex-col">
            <h2 className="mb-[.5rem] font-general text-color font-[500] text-[1rem] uppercase">
              {key}:
            </h2>
            <p className="text-color2 font-general text-[1rem] font-[400] tracking-[-.8px] leading-[1.1]">
              {works[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkContent;
