import React from "react";
import { Friend } from "./Friend";

export const FriendList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            key={friend.id}
            onSelectFriend={onSelectFriend}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
};
