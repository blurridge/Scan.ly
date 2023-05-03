import React from "react";
import { MainContent } from "../layouts/MainContent";
import { Sidebar } from "../layouts/Sidebar";
import { ContentContextProvider } from "../context/ContentContext";
import { MobileNavbar } from "../layouts/MobileNavbar";
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
