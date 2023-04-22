import React from "react";
import panelPicture from "../assets/login_logo.png";
import squareLogo from "../assets/logo_sq.png";
import { LoginButton } from "../components/LoginButton";

export const LoginPage = () => {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="flex flex-col md:flex-row">
          <div class="bg-green-400 rounded-t-2xl w-80 md:w-96 md:rounded-tr-none md:rounded-tl-2xl md:rounded-l-2xl flex items-center justify-center px-2 py-5">
            <img src={panelPicture} class="w-64 md:w-96" />
          </div>
          <div class="bg-gray-300 rounded-b-2xl w-80 md:w-96 md:rounded-bl-none md:rounded-tl-none md:rounded-tr-2xl md:rounded-r-2xl flex flex-col items-center justify-center gap-4 px-20 py-24">
            <img src={squareLogo} class="w-40" />
            <span class="font-title font-bold">Account Login</span>
            <LoginButton />
          </div>
        </div>
      </div>
    </>
  );
};
