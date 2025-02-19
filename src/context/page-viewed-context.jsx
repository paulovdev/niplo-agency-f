import { createContext, useContext, useEffect, useState } from "react";

const PageViewedContext = createContext();

export const PageViewedProvider = ({ children }) => {
  const [pageViewed, setPageViewed] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("visited") === "true";
    }
    return false; // Garante que no SSR ele começa como falso
  });

  
    useEffect(() => {
      if (typeof window !== "undefined") { // Garante que está no navegador
        const hasVisited = sessionStorage.getItem("visited") === "true";
    
        if (!hasVisited) {
          sessionStorage.setItem("visited", "true");
          setPageViewed(false);
        } else {
          setPageViewed(true);
        }
      }
    }, []);

  return (
    <PageViewedContext.Provider
      value={{
        pageViewed,
        setPageViewed,
      }}
    >
      {children}
    </PageViewedContext.Provider>
  );
};

export const usePageViewed = () => useContext(PageViewedContext);