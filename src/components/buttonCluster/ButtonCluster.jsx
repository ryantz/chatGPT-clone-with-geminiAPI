import React from "react";
import "./buttonCluster.css";

export default function ButtonCluster() {
return(
  <>
      <button type="submit" className="btn-cluster">
        <strong>Write a text</strong>
        <p>asking a friend to be my plus-one at a wedding</p>
      </button>

      <button type="submit" className="btn-cluster">
          <strong>Explain nostalgia</strong>
          <p>to a kindergartener</p>
      </button>

        <button type="submit" className="btn-cluster">
          <strong>Write a short story</strong>
          <p>tailored to my favourite genre</p>
        </button>

        <button type="submit" className="btn-cluster">
          <strong>Plan a trip</strong>
          <p>to experience Seoul like a local</p>
        </button>
        </>
  );
}
