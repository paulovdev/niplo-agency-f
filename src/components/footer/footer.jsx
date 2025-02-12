import Footer2 from "./footer-2";
import Footer1 from "./footer-1";

const footer = () => {
  return (
    <>
      <footer className="pb-[50px] px-[2.5rem] max-laptop:px-[1rem]">
        <Footer2 />
        <Footer1 />
      </footer>
    </>
  );
};

export default footer;
