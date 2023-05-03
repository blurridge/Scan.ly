import React from "react";
import { DateTime } from "./DateTime";
import { Greeting } from "./Greeting";
import { StockStats } from "./StockStats";
import { UserStats } from "./UserStats";
import { CurrentContent } from "../context/ContentContext";
import { CurrentWindowSize } from "../context/WindowContext";

export const Statusbar = ({ props }) => {
  const { activeContent } = CurrentContent();
  const { isMobile } = CurrentWindowSize();
  if (activeContent === "products") {
    return (
      <>
        <div class="flex flex-col md:flex-row justify-between gap-5">
          {isMobile ? (
            <div class="flex gap-5 justify-between">
              <Greeting />
              <StockStats products={props} />
            </div>
          ) : (
            <>
              <Greeting />
              <StockStats products={props} />
            </>
          )}
          <DateTime />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="flex flex-col md:flex-row justify-between gap-5">
          {isMobile ? (
            <div class="flex gap-5 justify-between">
              <Greeting />
              <UserStats users={props} />
            </div>
          ) : (
            <>
              <Greeting />
              <UserStats users={props} />
            </>
          )}
          <DateTime />
        </div>
      </>
    );
  }
};
