import React, {useState} from 'react'
import './styling/topLeft.css'
import LoginPrompt from './LoginPrompt'
import {assets} from "../assets/assets"

export default function TopLeft(){
    const [reveal, setReveal] = useState(false);

    function revealMenu(){
        setReveal((reveal) => !reveal);
    }

    return(
        <>
        <div className = "topCompwrap">
            <div className="top-buttons-div">
                <button className="new-chat">
                    <img src={assets.write_icon}  id="writeimg" alt="writeIcon">
                    </img>
                </button> 
               <button className="login-button" onClick={revealMenu}>
                    <p>ChatGPT 4o mini o</p>
                </button>
        </div>
        {reveal ? <LoginPrompt /> : false}
        </div>
        </>
    );
}