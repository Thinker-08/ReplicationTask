import { useState, useContext, createContext, useEffect } from "react";

const NameContext = createContext();
const NameProvider = ({ children }) => {
  const [name, setName] = useState("btc");
  const [background, setBackground] = useState("")
  return (
    <NameContext.Provider value={{name, setName}}>
      {children}
    </NameContext.Provider>
  );
};
export const useName=()=>{
  return useContext(NameContext);
}
export { NameProvider };
