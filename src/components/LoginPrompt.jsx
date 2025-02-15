import React from "react";
import "./styling/loginPrompt.css";
import Loginbutton from "./LoginBtn"

//import { assets } from "../assets/assets";

export default function LoginPrompt() {
  return (
    <div className="promptLogin-container">
        <h4>Log in to try advanced features</h4>
        <p>
          Get smarter responses, upload files, analyze images, and more by
          logging in
        </p>
        <Loginbutton />
    </div>
  );
}
