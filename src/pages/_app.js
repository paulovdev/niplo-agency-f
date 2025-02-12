import "@/styles/globals.css";
import { Cursor } from "@/utils/cursor";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "@/context/cursor-context";
import Nav from "@/components/nav/navbar";
import { PlayingVideoProvider } from "@/context/several-context";
import Footer from "@/components/footer/footer";
import Lenis from "@studio-freight/lenis";
import { useRef, useEffect } from "react";

export default function App({ Component, pageProps, router }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="main noise">
      <CursorProvider>
        <PlayingVideoProvider>
          <Cursor />
          <Nav />
          <AnimatePresence mode="wait">
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </PlayingVideoProvider>
      </CursorProvider>
    </div>
  );
}
