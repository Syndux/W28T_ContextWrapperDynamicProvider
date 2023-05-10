import { useState, createContext } from "react";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
  const [sign, setSign] = useState("Leo");
  return (
    <HoroscopeContext.Provider value={{ sign, setSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
