import React from "react";
// import "./style.css";

function Heading({ level, hasHR, children }) {
  const lvl = parseInt(level, 10);

  if (lvl === 1) {
    return (
      <div>
        <h1>{children}</h1>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
  if (lvl === 2) {
    return (
      <div>
        <h2>{children}</h2>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 3) {
    return (
      <div>
        <h3>{children}</h3>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 4) {
    return (
      <div>
        <h4>{children}</h4>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 5) {
    return (
      <div>
        <h5>{children}</h5>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 6) {
    return (
      <div>
        <h6>{children}</h6>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
}

export default Heading;
