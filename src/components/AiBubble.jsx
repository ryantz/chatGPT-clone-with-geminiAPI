import React, { useContext } from "react";
import { Context } from "../context/Context";
import './styling/aiBubble.css'

const AiBubble = () => {
    const {aiOutput} = useContext(Context);

    return (
        <>
        <div className="ai-bubble-wrap">
            <p>{aiOutput}</p>
        </div>
        </>
    );

}

export default AiBubble;