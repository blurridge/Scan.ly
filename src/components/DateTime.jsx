import React, { useState, useEffect } from "react";

export const DateTime = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 0);
  }, []);
  return (
    <>
      <div class="px-6 lg:px-24 py-3 xl:py-7 bg-gray-200 rounded-3xl flex flex-col gap-2 items-center justify-center">
        <p class="p-1 font-title font-bold text-lg lg:text-2xl xl:text-4xl text-center">
          {" "}
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p class="font-title text-md lg:text-lg xl:text-2xl text-center">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            second: 'numeric',
          })}
        </p>
      </div>
    </>
  );
};
