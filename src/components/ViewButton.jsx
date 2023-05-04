import React from "react";
import { Link } from "react-router-dom";

export const ViewButton = ({ id }) => {
  return (
    <>
      <Link to={"/products/" + id} target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          class="inline-block rounded-full bg-neutral-800 px-3 xl:px-6 pt-2.5 pb-2 text-lg font-title font-bold leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)]"
          data-te-ripple-init
          data-te-dropdown-item-ref
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </Link>
    </>
  );
};
