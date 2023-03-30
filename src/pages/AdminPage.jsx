import React from "react";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";

export const AdminPage = () => {
  return (
    <>
      <div class="flex">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
};
