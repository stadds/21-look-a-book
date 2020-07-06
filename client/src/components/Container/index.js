import React from "react";
// import "./style.css";

function Container({ conSize, padding, margin, border, other, children }) {
  return (
    <div
      className={`container${conSize ? `${conSize}` : ""} ${
        padding ? padding : ""
      } ${margin ? margin : ""}  ${border ? border : ""} ${other ? other : ""}`}
    >
      {children}
    </div>
  );
}

export default Container;
