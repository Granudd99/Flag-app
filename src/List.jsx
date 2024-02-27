import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./List.css";
import "./dropdrop.css";
import "./Navbar";
import { Link } from "react-router-dom";

export default function List() {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);

      const uniqueRegions = [...new Set(json.map((country) => country.region))];
      setRegions(uniqueRegions);
    };
    getData();
  }, []);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((country) => {
    return (
      (country.region === selectedRegion || selectedRegion === "") &&
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="List-con">
      <div className="mid-sec">
        <div className="empty-left"></div>

        <input
          className="search-bar"
          id="search"
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={handleSearch}
        />

        <label>
          <select name="Regions" id="region" onChange={handleRegionChange}>
            <option value="">All regions</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </label>
        <div className="empty-right"></div>
      </div>
      <div className="card-map">
        {filteredData.map((country) => (
          <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
            <Card
              key={country.alpha3Code}
              countryCode={country.alpha3Code}
              name={country.name}
              png={country.flags.png}
              pop={country.population}
              cap={country.capital}
              reg={country.region}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
