import React, { useState } from "react";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";
import ContentContext from "../context/ContentContext";

export const AdminPage = () => {
  const [activeContent, setActiveContent] = useState("products");
  return (
    <>
      <div class="flex">
        <ContentContext.Provider value={{ activeContent, setActiveContent }}>
          <Sidebar />
          <MainContent />
        </ContentContext.Provider>
      </div>
    </>
  );
};
