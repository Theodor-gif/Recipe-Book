import axios from "axios";
import { useEffect, createContext, useState } from "react";

export const contextData = createContext();

function ContextProvider({ children }) {
  const [number, setNumber] = useState("1");
  return (
    <contextData.Provider value={{ number }}>{children}</contextData.Provider>
  );
}

export default ContextProvider;
