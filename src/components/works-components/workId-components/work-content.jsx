const WorkContent = ({ name, works }) => {
  const labels = {
    description: "Descrição",
    category: "Categoria",
    client: "Cliente",
    year: "Ano",
    license: "Licença",
  };
  return (
    <div className="w-full pb-[150px] mb-[50px] border-b border-border flex items-start justify-between max-tablet:flex-col max-tablet:pb-[50px]">
      <div className="flex flex-col">
        <span className="mb-[1rem] text-color2 font-robert-regular text-[.9rem] font-[500] uppercase tracking-[-.5px]">
          NIPLO APRESENTA
        </span>

        <h2 className="w-full text-[5vw] text-color font-[600] max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600] ">
          {[name]}
        </h2>
      </div>

      <div className="flex items-start flex-col gap-[1rem] max-tablet:gap-[2rem] max-tablet:mt-[2.5rem]">
        {["description", "category", "client", "year", "license"].map((key) => (
          <div key={key} className="flex items-start flex-col">
            <h2 className="mb-[.5rem] font-general text-color text-[.9rem] tracking-[-.5px] font-[600] uppercase">
              {labels[key]}:
            </h2>
            <p className="font-general text-color2 text-[.9rem] font-[500] tracking-[-.9px] uppercase">
              {works[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkContent;
