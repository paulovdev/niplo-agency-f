import { useState } from "react";
import Modal from "./modal";

const Footer2 = () => {
  const [modalToggle, setModalToggle] = useState(false);

  const handleModal = () => {
    setModalToggle(!modalToggle);
  };
  return (
    <section className="relative w-full mb-[100px] h-[50vh] overflow-hidden">
      <div className="size-full flex flex-col justify-center items-center select-none">
        <h1
          className="w-1/2 mb-[3rem] 
        text-[6vw] text-color text-center font-[400] leading-[1] uppercase 
        max-tablet:w-full max-tablet:text-[3.5rem] max-tablet:tracking-[-1px] max-laptop:font-[600]"
        >
          CONVERSE COM A GENTE!
        </h1>
        <button
          className="w-[225px] h-[45px] bg-background3 rounded-full"
          onClick={handleModal}
        >
          <span className="font-general text-color3 text-[.75rem] tracking-[-.3px] font-[500] uppercase">
            envie uma mensagem
          </span>
        </button>

        <Modal modalToggle={modalToggle} setModalToggle={setModalToggle} />
      </div>
    </section>
  );
};

export default Footer2;
