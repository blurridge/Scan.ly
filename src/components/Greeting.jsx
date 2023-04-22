import React from "react";
import { UserAuth } from "../context/AuthContext";

export const Greeting = () => {
  const { user } = UserAuth();
  const getFirstName = (userDisplayName) => {
    if (userDisplayName != null) return userDisplayName.split(" ")[0];
    return "NULL";
  };
  return (
    <>
      <div class="px-20 py-7 bg-gray-200 rounded-3xl flex gap-20 items-center justify-center">
        <div class="flex flex-col gap-2 text-center">
          <span class="font-title font-bold text-4xl">
            Hello, {getFirstName(user?.displayName)}
          </span>
          <span class="font-title text-xl">wassup cuh</span>
        </div>
        <img
          src={user?.photoURL}
          class="rounded-full object-cover shadow-lg w-20 h-20"
          alt={"Image of " + user?.displayName}
        />
      </div>
    </>
  );
};
