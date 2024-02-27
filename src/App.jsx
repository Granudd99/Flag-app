import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import List from "./List";
import CountryDetails from "./CountryDetails";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <List />
              </Layout>
            }
          />
          <Route
            path="/country/:alpha3Code"
            element={
              <Layout>
                <CountryDetails />
              </Layout>
            }
          />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
