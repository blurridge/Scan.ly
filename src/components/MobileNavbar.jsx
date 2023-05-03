import React from "react";
import fullLogo from "../assets/logo.png";
import squareLogo from "../assets/logo_sq.png";
import { LogoutButton } from "./LogoutButton";
import { HomeButton } from "./HomeButton";
import { UserButton } from "./UserButton";

// TODO: Implement hamburger menu

export const MobileNavbar = () => {
  return (
    <>
      <div class="flex justify-between bg-black text-white w-screen h-14 p-2">
        <img src={squareLogo} class="w-10" alt="Scan.ly logo" />
        <button
          class="mr-1.5 inline-block rounded bg-black px-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-black active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          type="button"
          data-te-offcanvas-toggle
          data-te-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <div
          class="invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-screen max-h-full max-w-full -translate-y-full flex-col border-none bg-black bg-clip-padding text-white shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
          data-te-offcanvas-init
        >
          <div class="flex items-center justify-between p-4">
            <img src={fullLogo} class="w-40" alt="Scan.ly logo" />
            <button
              type="button"
              class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-offcanvas-dismiss
            >
              <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="flex flex-col h-screen items-center justify-center overflow-y-auto p-4 gap-28">
            <HomeButton />
            <UserButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};
