import { createContext, useContext, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";

const LenisContext = createContext();

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      restoreScroll: false,
    });

    lenisRef.current = lenis;

    if (router.pathname === "/") {
      lenis.stop();
    }

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, [router]);

  const stopLenis = () => lenisRef.current?.stop();
  const startLenis = () => lenisRef.current?.start();

  return (
    <LenisContext.Provider value={{ stopLenis, startLenis }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
