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
  const [friends, setFriends] = useState(initialFriends);
  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friendObj) => {
    setFriends((current) => [...current, friendObj]);
    setShowFormAddFriend(false);
  };

  const handleOnSelectFriend = (friendObj) => {
    // setSelectedFriend(friendObj);
    setSelectedFriend((current) =>
      current?.id === friendObj.id ? null : friendObj
    );
    setShowFormAddFriend(false);
  };

  console.log(selectedFriend);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleOnSelectFriend}
          selectedFriend={selectedFriend}
        />

        {showFormAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={() => setShowFormAddFriend((current) => !current)}>
          {showFormAddFriend ? `Close` : `Add friend`}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};
