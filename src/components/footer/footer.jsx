import Footer2 from "./footer-2";
import Footer1 from "./footer-1";

const footer = () => {
  return (
    <>
      <footer className="px-[2.5rem] max-laptop:px-[1rem]">
        <Footer2 />
        <div
          className="relative h-[150px]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="fixed w-full h-[150px] bottom-0">
            <Footer1 />
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
