import React, { useState } from "react";
import { Button } from "../Button";

export const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const friendObject = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(friendObject);
    // setName("");
    // setImage("https://i.pravatar.cc/48");

    console.log(friendObject);
  };
  return (
    <form className="form-add-friend" onSubmit={handleOnSubmit}>
      <label>👩‍❤️‍👨 Friend name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🏞️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};
