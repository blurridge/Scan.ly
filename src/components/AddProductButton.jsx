import React from "react";
import { CurrentWindowSize } from "../context/WindowContext";

export const AddProductButton = () => {
  const { isMobile } = CurrentWindowSize();
  return (
    <button
      type="button"
      class="inline-block rounded-full bg-neutral-800 px-4 md:px-6 pt-2.5 pb-2 text-sm lg:text-lg font-title font-bold leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)]"
      data-te-toggle="modal"
      data-te-target="#addProductDialog"
      data-te-ripple-init
    >
      {isMobile ? "+" : "+ Add Product"}
    </button>
  );
};
