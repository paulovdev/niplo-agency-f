import "@/styles/globals.css";
import { Cursor } from "@/utils/cursor";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "@/context/cursor-context";
import Nav from "@/components/nav/navbar";
import { PlayingVideoProvider } from "@/context/several-context";
import Footer from "@/components/footer/footer";
import { ApProvider } from "@/context/ap-context";
import { LenisProvider } from "@/context/lenis-context";

export default function App({ Component, pageProps, router }) {
  return (
    <div className="main noise">
      <LenisProvider>
        <CursorProvider>
          <ApProvider>
            <PlayingVideoProvider>
              <Cursor />
              <Nav />
              <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
              <Footer />
            </PlayingVideoProvider>
          </ApProvider>
        </CursorProvider>
      </LenisProvider>
    </div>
  );
}
