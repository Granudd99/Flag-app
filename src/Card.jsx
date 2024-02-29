import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "./Card.css";
import { useTheme } from "./ThemeContext";

const Card = ({ countryCode, name, png, pop, cap, reg }) => {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="Card"
      id="card"
      style={{
        backgroundColor: darkMode ? "#2b3844" : "white",
        color: darkMode ? "#f2f2f2" : "black",
      }}
    >
      {loading ? (
        <div>
          <Skeleton height={200} />
          <div className="card-info">
            <Skeleton height={20} width={100} style={{ marginBottom: 10 }} />
            <Skeleton height={15} width={120} style={{ marginBottom: 10 }} />
            <Skeleton height={15} width={80} />
          </div>
        </div>
      ) : (
        <>
          <img src={png} alt={`${name} flag`} />
          <div className="card-info">
            <h2>{name}</h2>
            <p>Population: {pop}</p>
            <p>Capital: {cap}</p>
            <p>Region: {reg}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
