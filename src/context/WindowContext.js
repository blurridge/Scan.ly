import { createContext, useState, useEffect, useContext } from "react";

const WindowContext = createContext();

export const WindowContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  return (
    <WindowContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </WindowContext.Provider>
  );
};

export const CurrentWindowSize = () => {
  return useContext(WindowContext);
};
