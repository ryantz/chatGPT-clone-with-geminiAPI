import React, { useContext } from "react";
import "./styling/buttonCluster.css";
import { Context } from "../context/Context";

export default function ButtonCluster() {
const {input, setInput, onSent}  = useContext(Context);

function gettext(btnInput){
  const userInputClick = btnInput.target.textContent;
  setInput(userInputClick);
  onSent(userInputClick);
}

return(
  <>
      <button type="submit" className="btn-cluster" onClick={gettext}>
        <strong>Help me with</strong>
        <p>asking a friend to be my plus-one at a wedding</p> 
      </button>

      <button type="submit" className="btn-cluster" onClick={gettext}>
          <strong>Explain nostalgia</strong>
          <p>to a kindergartener</p>
      </button>

        <button type="submit" className="btn-cluster" onClick={gettext}>
          <strong>Write a short story</strong>
          <p>tailored to my favourite genre</p>
        </button>

        <button type="submit" className="btn-cluster" onClick={gettext}>
          <strong>Plan a trip</strong>
          <p>to experience Seoul like a local</p>
        </button>

        </>
  );
}
