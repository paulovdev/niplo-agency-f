import { useEffect } from "react";
import Home from "@/pages/home";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <Home />
    </>
  );
};

export default Index;
