import React from "react";

export const StockStats = ({ products }) => {
  const oosCount = products.filter((product) => {
    if (product.stockCount === 0) {
      return true;
    }
    return false;
  }).length;

  return (
    <>
      <div class="py-3 xl:py-7 px-14 xl:px-20 bg-gray-200 rounded-3xl flex gap-20 items-center justify-center">
        <div class="flex flex-col gap-2 text-center">
          <span
            class="font-title font-bold text-3xl xl:text-4xl"
            style={{ color: "green" }}
          >
            Total: {products.length}
          </span>
          <span class="font-title font-bold text-3xl xl:text-4xl" style={{ color: "red" }}>
            OOS: {oosCount}
          </span>
        </div>
      </div>
    </>
  );
};
