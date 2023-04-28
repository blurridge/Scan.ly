import React from "react";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";
import { ContentContextProvider } from "../context/ContentContext";

export const AdminPage = () => {
  return (
    <>
      <div class="flex">
        <ContentContextProvider>
          <Sidebar />
          <MainContent />
        </ContentContextProvider>
      </div>
    </>
  );
};
