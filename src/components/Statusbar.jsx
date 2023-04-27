import React, { useContext } from "react";
import { DateTime } from "./DateTime";
import { Greeting } from "./Greeting";
import { StockStats } from "./StockStats";
import { UserStats } from "./UserStats";
import ContentContext from "../context/ContentContext";

export const Statusbar = ({ props }) => {
  const { activeContent } = useContext(ContentContext);
  if (activeContent === "products") {
    return (
      <>
        <div class="flex justify-between gap-5">
          <Greeting />
          <StockStats products={props} />
          <DateTime />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="flex justify-between gap-5">
          <Greeting />
          <UserStats users={props} />
          <DateTime />
        </div>
      </>
    );
  }
};
