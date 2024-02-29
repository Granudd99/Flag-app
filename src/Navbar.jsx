import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoW from "./assets/techover-logo.png";
import logoD from "./assets/techover-logo-dark.png";
import moonD from "./assets/moon.svg";
import moonN from "./assets/moon-bordered.svg";

import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div id="Navbar" className={darkMode ? "dark" : ""}>
      <p className="countryapp">World Wide Flags</p>
      <Link to="/">
        <img
          id="techover-logo"
          src={darkMode ? logoW : logoD}
          alt="Techover"
          width="184"
        />{" "}
      </Link>
      <div className="right-side">
        <img src={darkMode ? moonD : moonN} alt="" />
        <button
          id="dark-button"
          onClick={toggleDarkMode}
          style={{
            color: darkMode ? "#ffffff" : "#000",
          }}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}
