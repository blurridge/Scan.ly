import { createContext, useState, useContext } from "react";

const ContentContext = createContext(null);

export const ContentContextProvider = ({ children }) => {
  const [activeContent, setActiveContent] = useState("products");
  return (
    <ContentContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const CurrentContent = () => {
    return useContext(ContentContext);
};