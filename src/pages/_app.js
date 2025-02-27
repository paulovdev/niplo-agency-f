import "@/styles/globals.css";
import { Cursor } from "@/utils/cursor";
import Nav from "@/components/nav/navbar";
import Footer from "@/components/footer/footer";
import { LenisProvider } from "@/context/lenis-context";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main noise">
      <LenisProvider>
        <Nav />
        <Cursor />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Footer />
      </LenisProvider>
    </div>
  );
}