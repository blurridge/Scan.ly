import React from "react";
import { DateTime } from "./DateTime";
import { Greeting } from "./Greeting";
import { StockStats } from "./StockStats";

export const Statusbar = () => {
  return (
    <>
      <div class="flex justify-between">
        <Greeting />
        <StockStats />
        <DateTime />
      </div>
    </>
  );
};
