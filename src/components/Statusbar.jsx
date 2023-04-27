import React, { useContext } from "react";
import { DateTime } from "./DateTime";
import { Greeting } from "./Greeting";
import { StockStats } from "./StockStats";
import ContentContext from "../context/ContentContext";

export const Statusbar = ({ products }) => {
  const { activeContent } = useContext(ContentContext);
  if (activeContent === "products") {
    return (
      <>
        <div class="flex justify-between gap-5">
          <Greeting />
          <StockStats products={products} />
          <DateTime />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="flex justify-between gap-2">
          <Greeting />
          <DateTime />
        </div>
      </>
    );
  }
};
