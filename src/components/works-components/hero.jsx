"use client";

export default function Hero() {
  return (
    <div className="w-full h-[70vh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end">
      <p className="max-w-[600px] w-full text-color text-[.9rem] tracking-[-.5px] font-[500] uppercase">
        de 2015 até 2025
      </p>

      <div className="w-full flex items-center justify-between gap-[.5rem] max-laptop:flex-col max-laptop:gap-0">
        <h1 className="w-full text-[15vw] text-color text-center font-[400] leading-[1] max-laptop:text-start max-laptop:font-[600] max-laptop:flex max-laptop:items-center">
          TRA
          <div className="max-w-[250px] w-full h-[15px] font-general text-center text-color text-[.9rem] text-nowrap font-[500] tracking-[-.5px] leading-[1] hidden max-laptop:block">
            (12 ARQUIVOS)
          </div>
        </h1>
        <div className="max-w-[250px] w-full h-[15px] font-general text-color text-center text-[.9rem] text-nowrap font-[500]  tracking-[-.5px] leading-[1] max-laptop:hidden">
          (12 ARQUIVOS)
        </div>
        <h1 className="w-full text-[15vw] text-center text-color font-[400] leading-[1] max-laptop:text-end max-laptop:font-[600]">
          BALHOS
        </h1>
      </div>
    </div>
  );
}
