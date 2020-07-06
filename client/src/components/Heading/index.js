import React from "react";
// import "./style.css";

function Heading({ level, title, hasHR }) {
  const lvl = parseInt(level, 10);

  if (lvl === 1) {
    return (
      <div>
        <h1>{title}</h1>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
  if (lvl === 2) {
    return (
      <div>
        <h2>{title}</h2>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 3) {
    return (
      <div>
        <h3>{title}</h3>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 4) {
    return (
      <div>
        <h4>{title}</h4>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 5) {
    return (
      <div>
        <h5>{title}</h5>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }

  if (lvl === 6) {
    return (
      <div>
        <h6>{title}</h6>
        {hasHR ? <hr></hr> : ""}
      </div>
    );
  }
}

export default Heading;
