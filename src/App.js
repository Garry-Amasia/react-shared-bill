import React, { useState } from "react";
import { FriendList } from "./components/FriendList";
import { FormAddFriend } from "./components/FormAddFriend";
import { Button } from "./Button";
import { FormSplitBill } from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export const App = () => {
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={initialFriends} />

        {showFormAddFriend && <FormAddFriend />}

        <Button onClick={() => setShowFormAddFriend((current) => !current)}>
          {showFormAddFriend ? `Close` : `Add friend`}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};
