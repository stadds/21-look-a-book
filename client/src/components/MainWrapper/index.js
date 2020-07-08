import React from "react";
import "./style.css";

function MainWrapper({ children }) {
  return (
    <main role="main" className="main-wrapper">
      {children}
    </main>
  );
}

export default MainWrapper;
