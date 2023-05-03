import React from "react";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";
import { ContentContextProvider } from "../context/ContentContext";
import { MobileNavbar } from "../components/MobileNavbar";
import { CurrentWindowSize } from "../context/WindowContext";

export const AdminPage = () => {
  const { isMobile } = CurrentWindowSize();
  return (
    <>
      <div class="flex flex-col md:flex-row">
        <ContentContextProvider>
          {!isMobile && <Sidebar />}
          {isMobile && <MobileNavbar />}
          <MainContent />
        </ContentContextProvider>
      </div>
    </>
  );
};
