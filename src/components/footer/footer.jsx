import Footer2 from "./footer-2";
import Footer1 from "./footer-1";

const footer = () => {
  return (
    <>
      <footer>
        <div className="px-[2.5rem] max-laptop:px-[1rem]">
          <Footer2 />
        </div>
        <div
          className="relative h-[200px] bg-black max-tablet:h-[325px] "
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div className="fixed w-full h-[200px] bottom-0 max-tablet:h-[325px]">
            <Footer1 />
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
