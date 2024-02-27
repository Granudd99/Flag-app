import React from "react";
import "./Card.css";
const Card = ({ countryCode, name, png, pop, cap, reg }) => {
  return (
    <div className="Card">
      <img src={png} alt={`${name} flag`} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>Population: {pop}</p>
        <p>Capital: {cap}</p>
        <p>Region: {reg}</p>
      </div>
    </div>
  );
};

export default Card;
