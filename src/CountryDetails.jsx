import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CountryDetails.css";
import { useTheme } from "./ThemeContext";
import arrow from "./assets/arrow-left-dark.svg";
import arrowB from "./assets/arrow-left.svg";

export default function CountryDetails() {
  const { darkMode } = useTheme();
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

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
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [alpha3Code]);

  if (loading) {
    return <p style={{ fontSize: "20px" }}>Loading...</p>;
  }

  return (
    <div id="country-details-card" className={darkMode ? "dark" : ""}>
      <Link id="back" className={darkMode ? "dark" : ""} to="/">
        <img src={darkMode ? arrowB : arrow} alt="" />
        <p className={darkMode ? "dark-p" : ""}>Back</p>
      </Link>
      <div className="con">
        <div className="country-details-card-img">
          <img src={country.flags.png} alt="" />
        </div>
        <div id="country-details-card-info" className={darkMode ? "dark" : ""}>
          <h2>{country.name}</h2>

          <div className="middle">
            <div className="middle-left">
              <p>
                Population:{" "}
                <span className="info-p">
                  {country.population.toLocaleString()}
                </span>{" "}
              </p>
              <p>
                Region : <span className="info-p">{country.region}</span>{" "}
              </p>
              <p>
                Capital: <span className="info-p">{country.capital}</span>{" "}
              </p>
              <p>
                Native name :{" "}
                <span className="info-p">{country.nativeName}</span>{" "}
              </p>
            </div>
            <div className="middle-right">
              {" "}
              {Array.isArray(country.currencies) ? (
                country.currencies.map((currency, index) => (
                  <p key={index}>
                    Currency: <span className="info-p">{currency.code}</span>{" "}
                  </p>
                ))
              ) : (
                <p>No currencies</p>
              )}{" "}
              <p>
                Top Level Domain :{" "}
                <span className="info-p"> {country.topLevelDomain}</span>{" "}
              </p>
              <div className="languages">
                <div className="languages">
                  {Array.isArray(country.languages) ? (
                    <p>
                      Languages:{" "}
                      {country.languages.map((language, index) => (
                        <span className="info-p" key={index}>
                          {language.name}
                          {index < country.languages.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  ) : (
                    <p>No Language</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="borders-container">
            <p>Border Countries: </p>
            {Array.isArray(country.borders) ? (
              country.borders.map((border, index) => (
                <Link key={index} to={`/country/${border}`}>
                  <button id="border-button" className={darkMode ? "dark" : ""}>
                    {border}
                  </button>
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
