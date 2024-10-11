import React from  'react'
import {assets} from '../../assets/assets'
import './userInput.css'

export default function UserInput(){
    function pullData(){
        let userInput = document.getElementById("user-input-id").value;
        console.log(userInput);
    }

    return (
        <>
        <div className="userInput-wrapper">
        <input type="text" autoFocus="autofocus" placeholder="Message ChatGPT" className="user-input" id="user-input-id"></input>
        <button type="submit" className="textSubmit" onClick={pullData}>
            <img src={assets.send_icon} alt="send"></img>
        </button>
        </div>
        </>
    )
}