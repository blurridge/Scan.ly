import React, { useState, useEffect } from "react";

export const DateTime = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <>
      <div class="px-40 py-7 bg-gray-200 rounded-3xl flex flex-col gap-2 items-center justify-center">
        <p class="font-title font-bold text-4xl">
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p class="font-title text-2xl">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    </>
  );
};
