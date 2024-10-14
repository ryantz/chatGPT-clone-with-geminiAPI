import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import "./styling/userInput.css";
import { Context } from "../context/Context";

export default function UserInput() {

  const { input, setInput, setConfirmed, setShowButtons, onSent } = useContext(Context);
   
  const registerData = (input) => {
    setInput(input.target.value);
  }

  const submitDataToApi = () => {
    setConfirmed(true);
    setShowButtons(false); 
    onSent();
  }

  return (
    <>
      <div className="userInput-wrapper">
        <input
          type="text"
          autoFocus="autofocus"
          placeholder="Message ChatGPT"
          className="user-input"
          id="user-input-id"
          onChange={registerData}
          value={input}
        ></input>
        <button type="submit" className="textSubmit" onClick={submitDataToApi}>
          <img src={assets.send_icon} alt="send"></img>
        </button>
      </div>

    </>
  );
}
