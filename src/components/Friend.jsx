import React from "react";
import { Button } from "../Button";

export const Friend = ({ friend, onSelectFriend, selectedFriend }) => {
  const isSelected = friend.name === selectedFriend?.name;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You awe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "select"}
      </Button>
    </li>
  );
};
