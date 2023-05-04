import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { ViewButton } from "./ViewButton";
import { DeleteProductDialog } from "../modals/DeleteProductDialog";
import { EditProductDialog } from "../modals/EditProductDialog";
import { ProductTagButton } from "./ProductTagButton";

export const MobileOptions = ({ product, products }) => {
  return (
    <div class="relative" data-te-dropdown-ref>
      <button
        class="rounded-full flex items-center whitespace-nowrap bg-black px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-black hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-black active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="button"
        id="dropdownMenuButton1"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3 h-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-gray-400 bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        <li class="m-2">
          <ViewButton id={product.id} />
        </li>
        <li class="m-2">
          <ProductTagButton product={product} />
        </li>
        <li class="m-2">
          <EditButton id={"me" + product.id} />
        </li>
        <li class="m-2">
          <DeleteButton id={"md" + product.id} />
        </li>
      </ul>
      <EditProductDialog
        product={product}
        id={"me" + product.id}
        products={products}
      />
      <DeleteProductDialog product={product} id={"dm" + product.id} />
    </div>
  );
};
