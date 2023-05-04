import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { ViewButton } from "./ViewButton";
import { DeleteProductDialog } from "../modals/DeleteProductDialog";
import { EditProductDialog } from "../modals/EditProductDialog";
import { ProductTagButton } from "./ProductTagButton";
import { MobileOptions } from "./MobileOptions";
import { CurrentWindowSize } from "../context/WindowContext";

// TODO: Implement hamburger for buttons and responsiveness on mobile

export const ProductRow = ({ product, products }) => {
  const { isMobile } = CurrentWindowSize();
  return (
    <>
      <div class="rounded-3xl bg-gray-200 px-5 lg:px-10 py-5 flex items-center justify-between mb-5">
        <div class="flex gap-5 lg:gap-10 items-center">
          <img
            src={product.imageLink}
            class="rounded-full object-cover shadow-lg grow-0 shrink-0 w-10 h-10 lg:w-14 lg:h-14 xl:w-20 xl:h-20"
            alt={"Image of " + product.name}
          />
          <span class="font-title text-sm lg:text-lg xl:text-2xl font-bold mr-5 w-[100px] lg:w-[300px]">
            {product.name}
          </span>
        </div>
        <div class="flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 xl:w-10 xl:h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <span
            class="font-title text-lg xl:text-2xl font-bold"
            style={{ color: product.stockCount > 5 ? "black" : "red" }}
          >
            {product.stockCount}
          </span>
        </div>
        {isMobile ? (
          <div>
            <MobileOptions product={product} products={products}/>
          </div>
        ) : (
          <div class="flex ml-10 gap-2 xl:gap-5 items-center">
            <ViewButton id={product.id} />
            <ProductTagButton product={product} />
            <EditButton id={"e" + product.id} />
            <EditProductDialog
              product={product}
              id={"e" + product.id}
              products={products}
            />
            <DeleteButton id={"d" + product.id} />
            <DeleteProductDialog product={product} id={"d" + product.id} />
          </div>
        )}
      </div>
    </>
  );
};
