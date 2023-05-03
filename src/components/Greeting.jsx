import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";

export const Greeting = () => {
  const { user } = UserAuth();
  const [dateState, setDateState] = useState(new Date());
  const [currentHour, setCurrentHour] = useState(dateState.getHours());
  const [greeting, setGreeting] = useState("");
  const getFirstName = (userDisplayName) => {
    if (userDisplayName != null) return userDisplayName.split(" ")[0];
    return "NULL";
  };
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 0);
  }, []);
  useEffect(() => {
    setCurrentHour(dateState.getHours());
  }, [dateState]);
  useEffect(() => {
    const getGreeting = () => {
      if (currentHour < 12) {
        return "Good morning!";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon!";
      } else {
        return "Good evening!";
      }
    };
    setGreeting(getGreeting());
  }, [currentHour]);
  return (
    <>
      <div class="px-14 lg:px-20 py-3 xl:py-7 bg-gray-200 rounded-3xl flex flex-col-reverse xl:flex-row gap-2 xl:gap-20 items-center justify-center">
        <div class="flex flex-col gap-2 text-center">
          <span class="font-title font-bold text-lg lg:text-2xl xl:text-4xl">
            Hello, {getFirstName(user?.displayName)}
          </span>
          <span class="font-title text-md lg:text-lg xl:text-xl">{greeting}</span>
        </div>
        <img
          src={user?.photoURL}
          class="rounded-full object-cover shadow-lg w-14 h-14 xl:w-20 xl:h-20"
          alt={"Image of " + user?.displayName}
        />
      </div>
    </>
  );
};
