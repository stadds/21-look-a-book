import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand pr-2" to="/">
            Look-A-Book!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navtoggle"
            aria-controls="navtoggle"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navtoggle">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/search" 
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/saved"
                  className={
                    window.location.pathname === "/saved"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Saved
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
