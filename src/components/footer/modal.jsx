import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useMedia } from "react-use";

const Modal = ({ modalToggle, setModalToggle }) => {
  const [modalWidth, setModalWidth] = useState("40vw");
  const isTablet = useMedia("(max-width: 768px)");
  const isLapTop = useMedia("(max-width: 992px)");

  useEffect(() => {
    if (isTablet) {
      setModalWidth("100vw");
    } else if (isLapTop) {
      setModalWidth("60vw");
    } else {
      setModalWidth("40vw");
    }
  }, [isTablet, isLapTop]);

  const modalAnim = {
    open: {
      opacity: 1,
      width: modalWidth,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0.1,
      },
    },
    close: {
      opacity: 0,
      width: 0,
      transition: {
        duration: 0.8,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        delay: 0.3,
      },
    },
  };

  const overlayAnim = {
    open: { opacity: 1 },
    close: { opacity: 0 },
  };

  const contentAnim = {
    initial: { opacity: 0, top: 50 },
    animate: {
      opacity: 1,
      top: 0,
      transition: { duration: 0.5, delay: 1 },
    },
    exit: { opacity: 0, top: 50, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {modalToggle && (
        <>
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            variants={modalAnim}
            initial="close"
            animate={modalToggle ? "open" : "close"}
            exit="close"
            className={`fixed h-screen top-0 right-0 bg-background3 z-[100] ${
              modalToggle ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            <button
              className="absolute top-6 right-6 p-[.25rem] bg-background rounded-[.25rem] group cursor-pointer z-10"
              onClick={() => setModalToggle(false)}
            >
              <RiCloseFill
                size={32}
                color="#000"
                className="transition-all group-hover:rotate-45"
              />
            </button>

            <motion.div
              variants={contentAnim}
              initial="initial"
              animate={modalToggle ? "animate" : "initial"}
              exit="initial"
              className="relative size-full p-[2.5rem] flex flex-col gap-[1.5rem] items-start justify-center z-0 max-tablet:p-[1rem]  max-laptop:p-[1.5rem]"
            >
              {[
                { label: "SEU E-MAIL", id: "email", type: "email" },
                { label: "SEU NOME", id: "name", type: "text" },
                {
                  label: "QUAIS SERVIÇOS VOCÊ PROCURA?",
                  id: "services",
                  type: "text",
                },
              ].map(({ label, id, type }) => (
                <div key={id} className="w-full flex flex-col items-start">
                  <label
                    htmlFor={id}
                    className="mb-[1rem] font-general text-color3 text-[.9rem] tracking-[-.5px] font-[500] uppercase"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    className="w-full h-[40px] p-[.5rem] bg-background rounded-[.25rem] text-color font-robert-regular text-[.9rem] font-[400] tracking-[-.2px]"
                  />
                </div>
              ))}

              <div className="w-full flex flex-col items-start">
                <label
                  htmlFor="message"
                  className="mb-[1rem] font-general text-color3 text-[.9rem] tracking-[-.5px] font-[500] uppercase"
                >
                  NOS MANDE UMA MENSAGEM
                </label>
                <textarea
                  id="message"
                  className="w-full h-[150px] p-[.5rem] bg-background rounded-[.25rem] text-color font-robert-regular text-[.9rem] font-[400] tracking-[-.2px]"
                />
              </div>

              <button className="w-full h-[40px] bg-background rounded-[.25rem]">
                <span className="font-general text-color text-[.75rem] tracking-[-.3px] font-[500] uppercase">
                  ENVIAR
                </span>
              </button>
            </motion.div>
          </motion.form>
          <motion.div
            variants={overlayAnim}
            initial="close"
            animate={modalToggle ? "open" : "close"}
            exit="close"
            onClick={() => setModalToggle(false)}
            className={`fixed w-screen h-screen top-0 right-0 backdrop-blur-md z-[99] ${
              modalToggle ? "pointer-events-auto" : "pointer-events-none"
            } ${isTablet && "hidden"}`}
          ></motion.div>{" "}
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
