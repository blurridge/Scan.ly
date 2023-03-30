import React from "react";

export const Greeting = () => {
  return (
    <>
      <div class="px-20 py-7 bg-gray-200 rounded-3xl flex gap-20 items-center justify-center">
        <div class="flex flex-col gap-2 text-center">
          <span class="font-title font-bold text-4xl">Hello, Zach!</span>
          <span class="font-title text-xl">wassup cuh</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-20 h-20"
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </>
  );
};
