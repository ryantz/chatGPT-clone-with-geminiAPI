import React, { useContext } from "react";
import { Context } from "../context/Context";
import './styling/userBubble.css'

const UserBubble = () => {
    const {input} = useContext(Context);
    return (
        <>
        <div className="bubble-wrap">
            <p>{input}</p>
        </div>
        </>
    );

}

export default UserBubble;