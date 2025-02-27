export default function Hero() {
  return (
    <div className="w-full h-screen my-0 mx-auto py-[2rem] flex flex-col items-end justify-end ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[15vw] text-center font-[400] leading-[1]  max-laptop:font-[600]">
          CREATIVE
        </h1>

        <h1 className="text-[15vw] text-center font-[400] leading-[1]  max-laptop:font-[600]">
          S
        </h1>
        <div className="w-[250px] h-[15px] font-general text-center text-[.9rem] text-nowrap font-[400]  tracking-[-.5px] leading-[1]">
          OLUTIONS
        </div>
      </div>
      <p className="max-w-[600px] w-full text-color font-robert-regular text-[1.1rem] font-[300] tracking-[-1px] leading-[1.4]">
        Why fit in when you were born to stand out? We are Uni Agency. A digital
        creative agency.
      </p>
    </div>
  );
}
