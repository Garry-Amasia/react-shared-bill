import React from "react";
import { Button } from "../Button";

export const FormSplitBill = ({ selectedFriend }) => {
  const { name } = selectedFriend;
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label>💰 Bill Value</label>
      <input type="text" />
      <label>😱 Your expenses</label>
      <input type="text" />
      <label>💲 {name}'s expenses</label>
      <input type="text" disabled />
      <label>💸 Whos paying the bill</label>
      <select>
        <option value="user">me</option>
        <option value="friend">{name}</option>
      </select>
      <Button>lets split</Button>
    </form>
  );
};
