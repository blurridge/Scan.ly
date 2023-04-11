import React, { useEffect, useState } from "react";
import { Statusbar } from "./Statusbar";
import { getProducts } from "../utils/getProducts";
import { ProductList } from "./ProductList";

export const MainContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const productData = await getProducts();
      setProducts([...productData]);
    };
    getData();
  }, []);

  return (
    <>
      <div class="flex flex-col flex-1 mt-10 gap-5 pl-40 pr-10 h-[calc(100vh-40px)]">
        <Statusbar products={products} />
        <span class="font-title font-bold text-4xl">Inventory</span>
        <div class="flex justify-between items-center">
          <div>
            <span class="font-title font-bold text-2xl mr-10">
              All Inventory
            </span>
            <span class="font-title font-bold text-2xl">Low Stock</span>
          </div>
          <button
            type="button"
            class="inline-block rounded-full bg-neutral-800 px-6 pt-2.5 pb-2 text-lg font-title font-bold leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
            data-te-ripple-init
          >
            + Add Product
          </button>
        </div>
        <div class="h-full overflow-y-auto">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};
