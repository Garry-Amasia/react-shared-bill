import React from "react";
import { Friend } from "./Friend";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};
