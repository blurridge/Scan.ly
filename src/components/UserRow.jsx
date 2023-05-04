import React from "react";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { EditUserDialog } from "../modals/EditUserDialog";
import { DeleteUserDialog } from "../modals/DeleteUserDialog";

export const UserRow = ({ user, users }) => {
  return (
    <>
      <div class="rounded-3xl bg-gray-200 px-5 lg:px-10 py-5 flex items-center justify-between mb-5">
        <div class="flex gap-10 items-center">
          <span class="break-words font-title text-sm lg:text-lg xl:text-2xl font-bold w-24 md:w-60 lg:w-96">
            {user.email}
          </span>
        </div>
        <div class="flex ml-10 gap-2 xl:gap-5 items-center">
          <EditButton id={"e" + user.id} />
          <EditUserDialog user={user} id={"e" + user.id} users={users} />
          <DeleteButton id={"d" + user.id} />
          <DeleteUserDialog user={user} id={"d" + user.id} />
        </div>
      </div>
    </>
  );
};
