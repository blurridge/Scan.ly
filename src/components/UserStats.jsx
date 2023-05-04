import React from "react";

export const UserStats = ({ users }) => {
  return (
    <>
      <div class="py-3 xl:py-7 px-10 md:px-14 xl:px-20 bg-gray-200 rounded-3xl flex gap-20 items-center justify-center">
        <div class="flex flex-col gap-2 text-center">
          <span class="font-title font-bold text-lg lg:text-3xl xl:text-4xl">
            Total Users: {users.length}
          </span>
        </div>
      </div>
    </>
  );
};
