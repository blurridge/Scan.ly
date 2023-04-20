import React from "react";
import panelPicture from "../assets/login_logo.png";
import squareLogo from "../assets/logo_sq.png";
import { LogIn } from "../components/LogIn";

export const LoginPage = () => {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="bg-green-400 rounded-l-2xl px-2 py-5">
          <img src={panelPicture} class="w-96"/>
        </div>
        <div class="bg-gray-300 rounded-r-2xl px-20 py-24 flex flex-col items-center justify-center gap-4">
          <img src={squareLogo} class="w-40" />
          <span class="font-title font-bold">Account Login</span>
          <LogIn />
        </div>
      </div>
    </>
  );
};
