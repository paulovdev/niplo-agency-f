import { createContext, useContext, useEffect, useState } from "react";

const PageViewed = createContext();

export const PageViewedProvider = ({ children }) => {
  const [pageViewed, setPageViewed] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewed = sessionStorage.getItem("viewed?");
      if (!viewed) {
        sessionStorage.setItem("viewed?", "true");
        setPageViewed(false);
      } else {
        setPageViewed(true);
      }
    }
  }, []);
  return (
    <PageViewed.Provider
      value={{
        pageViewed,
        setPageViewed,
      }}
    >
      {children}
    </PageViewed.Provider>
  );
};

export const usePageViewed = () => useContext(PageViewed);
