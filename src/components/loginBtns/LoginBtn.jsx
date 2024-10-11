import React from "react"
import "./loginBtn.css"

export default function Loginbutton(){
    return (
        <div className="loginBtns">
          <button type="submit" className="lbtn" id="loginL">Log in</button>
          <button type="submit" className="lbtn" id="signupL">Sign up</button>
        </div>
    );
}
