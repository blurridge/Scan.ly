import React from "react";
import { ProductRow } from "./ProductRow";

export const ProductList = ({ products }) => {
  if (products.length > 0) {
    return products.map((product, index) => (
      <ProductRow key={index} product={product} products={products} />
    ));
  } else {
    return (
      <span class="font-title font-bold text-2xl table m-auto">
        No Products Available!
      </span>
    );
  }
};
