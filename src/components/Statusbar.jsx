import React from "react";
import { DateTime } from "./DateTime";
import { Greeting } from "./Greeting";
import { StockStats } from "./StockStats";

export const Statusbar = ({ products }) => {
  return (
    <>
      <div class="flex justify-between gap-5">
        <Greeting />
        <StockStats products={products} />
        <DateTime />
      </div>
    </>
  );
};
