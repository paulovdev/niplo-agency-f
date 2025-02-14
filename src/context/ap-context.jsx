import { createContext, useContext, useState } from "react";

const ApContext = createContext();

export const ApProvider = ({ children }) => {
  const [selectedAp, setSelectedAp] = useState("grid");

  return (
    <ApContext.Provider
      value={{
        selectedAp,
        setSelectedAp,
      }}
    >
      {children}
    </ApContext.Provider>
  );
};

export const useAp = () => useContext(ApContext);
