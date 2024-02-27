import React from "react";
import Navbar from "./Navbar";
import "./Layout.css";
import { useTheme } from "./ThemeContext";

export default function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={`layout-container ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      {children}
    </div>
  );
}
