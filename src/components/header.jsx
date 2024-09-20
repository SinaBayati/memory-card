import { useState } from "react";
import "./../styles/header.css";

export function Header() {
  const [status, setStatus] = useState("normal");

  function clickHandler() {
    if(status === "normal"){
      setStatus("hint");
    } else {
      setStatus("normal");
    }
  }

  return(
    <div className="header">
      <h1>Memory Card Game</h1>
      <div>
        {status === "hint" && <p>Don't click on the same card twice!</p>}
        <button className="btn-hint" onClick={clickHandler}>?</button>
      </div>
    </div>
  );
}