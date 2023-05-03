import React from "react";
import squareLogo from "../assets/logo_sq.png";
import { LogoutButton } from "./LogoutButton";
import { HomeButton } from "./HomeButton";
import { UserButton } from "./UserButton";

export const Sidebar = () => {
  return (
    <>
      <div class="rounded-r-3xl bg-black text-white w-24 lg:w-32 xl:w-40 h-screen flex flex-col justify-between items-center p-6">
        <img src={squareLogo} class="w-20" alt="Scan.ly logo" />
        <nav class="flex flex-col gap-10">
          <HomeButton />
          <UserButton />
        </nav>
        <LogoutButton />
      </div>
    </>
  );
};
