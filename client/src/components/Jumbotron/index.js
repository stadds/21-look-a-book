import React from "react";
// import "./style.css";

function Jumbotron({addClass, title, description, directions,children}) {
  return (
    <div className={`jumbotron ${addClass ? addClass : ""}`}>
      <h1 className="display-4">{title}</h1>
      <p className="lead">
       {description}
      </p>
      <hr className="my-4"></hr>
      <p>
       {directions}
      </p>
      {children}
    </div>
  );
}

export default Jumbotron;
