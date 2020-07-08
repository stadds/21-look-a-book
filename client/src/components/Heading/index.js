import React from "react";
import "./style.css";

function Heading({ level, hasHR, addClass, children }) {
  const lvl = parseInt(level, 10);

  if (lvl === 1) {
    return (
      <div className={addClass}>
        <h1>{children}</h1>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
  if (lvl === 2) {
    return (
      <div className={addClass}>
        <h2>{children}</h2>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 3) {
    return (
      <div className={addClass}> 
        <h3>{children}</h3>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 4) {
    return (
      <div className={addClass}>
        <h4>{children}</h4>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 5) {
    return (
      <div className={addClass}>
        <h5>{children}</h5>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 6) {
    return (
      <div className={addClass}>
        <h6>{children}</h6>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
}

export default Heading;
