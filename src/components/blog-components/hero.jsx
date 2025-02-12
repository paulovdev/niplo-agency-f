export default function Hero() {
  return (
    <div className="w-full h-[100dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end gap-[1rem]">
      <div className="w-full h-[100dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
        <p className="max-w-[600px] w-full text-color font-robert-regular text-[1.1rem] font-[300] tracking-[-1px] leading-[1.4]">
          FROM THE
        </p>
        <div className="w-full flex items-center justify-between gap-[.5rem] max-laptop:flex-col max-laptop:gap-0">
          <h1 className="w-full text-[15vw] text-center font-[400] leading-[1] max-laptop:text-start max-laptop:font-[500] max-laptop:flex max-laptop:items-center">
            NEWS
            <div className="max-w-[250px] w-full h-[15px] font-general text-center text-[.9rem] text-nowrap font-[400] tracking-[-.5px] leading-[1] hidden max-laptop:block">
              (06 ARTICLES)
            </div>
          </h1>
          <div className="max-w-[250px] w-full h-[15px] font-general text-center text-[.9rem] text-nowrap font-[400]  tracking-[-.5px] leading-[1] max-laptop:hidden">
            (06 ARTICLES)
          </div>
          <h1 className="w-full text-[15vw] text-center font-[400] leading-[1] max-laptop:text-end max-laptop:font-[500]">
            ROOM
          </h1>
        </div>
      </div>
    </div>
  );
}
