import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white"
  };
  return (
    <nav>
      <h2>Logo</h2>
      <ul className="nav-links">
        <Link style={navstyle} to="/shop">
          <li>SHOP</li>
        </Link>
        <Link style={navstyle} to="/about">
          <li>ABOUT</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
