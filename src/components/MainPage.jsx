import React, { useContext, useState } from "react";
import "./styling/mainPage.css";
import ButtonCluster from "./ButtonCluster";
import TopPortion from "./TopPortion"
import UserInput from "./UserInput"
import { Context } from "../context/Context";
import UserBubble from "./UserBubble";
import AiBubble from "./AiBubble";

export default function Main() {
  const {showButtons, confirmed, aiOutput} = useContext(Context);

  return (
    <>
      <div className="top">
        <TopPortion />
      </div>
    <div className="btm-wrapper-main">


      {confirmed &&
      <UserBubble />}

      {confirmed &&
      <AiBubble />}


      {showButtons &&
      <div className="btm-four-container">
          <ButtonCluster />
      </div>}
       
      <div className="textInput">
        <UserInput />
        <p>
          by messaging ChatGPT, you agree to our Terms and have read our Privacy
          Policy
        </p>
      </div>
    </div>
    </>
  );
}
