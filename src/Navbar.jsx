import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoW from "./assets/techover-logo.png";
import logoD from "./assets/techover-logo-dark.png";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div id="Navbar" className={darkMode ? "dark" : ""}>
      <p className="countryapp">World Wide Flags</p>
      <Link to="/">
        <img src={darkMode ? logoW : logoD} alt="Techover" width="184" />{" "}
      </Link>
      <button
        onClick={toggleDarkMode}
        style={{
          backgroundColor: darkMode ? "#f9f9f9" : "#1a1a1a",
          color: darkMode ? "#000" : "#ffffff",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
