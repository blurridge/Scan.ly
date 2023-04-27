import React from "react";
import { UserRow } from "./UserRow";

export const UserList = ({ users }) => {
  if (users.length > 0) {
    return users.map((user, index) => (
      <UserRow key={index} user={user} users={users} />
    ));
  } else {
    return (
      <span class="font-title font-bold text-2xl table m-auto">
        No Users Available!
      </span>
    );
  }
};
