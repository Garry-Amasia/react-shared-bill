import React, { useState } from "react";
import { Button } from "../Button";

export const FormSplitBill = ({ selectedFriend }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const { name } = selectedFriend;

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>😱 Your expenses</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />
      <label>💲 {name}'s expenses</label>
      <input type="text" disabled value={paidByFriend} />
      <label>💸 Whos paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">me</option>
        <option value="friend">{name}</option>
      </select>
      <Button>lets split</Button>
    </form>
  );
};
