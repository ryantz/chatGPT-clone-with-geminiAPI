import React from "react";
import "./mainPage.css";
import ButtonCluster from "../buttonCluster/ButtonCluster"
import TopPortion from "../topPortion/TopPortion"
import UserInput from "../userInput/UserInput"

export default function Main() {

  return (
    <>
      <div className="top">
        <TopPortion />
      </div>

      <div className="btm-four-container">
          <ButtonCluster />
      </div>
       
      <div className="textInput">
        <UserInput />
        <p>
          by messaging ChatGPT, you agree to our Terms and have read our Privacy
          Policy
        </p>
      </div>
    </>
  );
}
