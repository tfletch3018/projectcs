import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../index.css"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent !important fixed-top z-index 999">

      <div className="">

        <Link className="styled2"
          to="/">
          <span className="" id="allNav">All</span>
          <span className="" id="thatNav">That</span>
          <span className="" id="chazNav">Chaz</span>
        </Link></div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/music"
              className={window.location.pathname === "/music" ? "nav-link active" : "nav-link"}
            >
              Music Man
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/film"
              className={window.location.pathname === "/film" ? "nav-link active" : "nav-link"}
            >
              Acting Up
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/host"
              className={window.location.pathname === "/host" ? "nav-link active" : "nav-link"}
            >
              Host
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/improvement"
              className={window.location.pathname === "/improvement" ? "nav-link active" : "nav-link"}
            >
              Improvement Movement
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/social"
              className={window.location.pathname === "/social" ? "nav-link active" : "nav-link"}
            >
              Social Media
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
