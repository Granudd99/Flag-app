import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";
import { useTheme } from "./ThemeContext";

export default function CountryDetails() {
  const { darkMode } = useTheme();
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();

        const selectedCountry = jsonData.find(
          (c) => c.alpha3Code === alpha3Code
        );

        console.log(selectedCountry);

        setCountry(selectedCountry);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [alpha3Code]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="country-details-card">
      <div className="con">
        <div className="country-details-card-img">
          <img src={country.flags.png} alt="" />
        </div>
        <div id="country-details-card-info" className={darkMode ? "dark" : ""}>
          {" "}
          <h2>{country.name}</h2>
          <p>Population: {country.population}</p>
          <p>Capital: {country.capital}</p>
          <div className="currencies-container">
            {Array.isArray(country.currencies) ? (
              country.currencies.map((currency, index) => (
                <p key={index}>Currency: {currency.code}</p>
              ))
            ) : (
              <p>No currencies</p>
            )}
          </div>
          <p>Borders:</p>
          <div className="borders-container">
            {Array.isArray(country.borders) ? (
              country.borders.map((border, index) => (
                <Link key={index} to={`/country/${border}`}>
                  <button className="border-button">{border}</button>
                </Link>
              ))
            ) : (
              <p>No borders</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
