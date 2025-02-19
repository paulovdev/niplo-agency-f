import { useEffect } from "react";
import Home from "@/pages/home";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <>
      <Home />
    </>
  );
};

export default Index;
