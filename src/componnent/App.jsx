import React, { useEffect, useState } from "react";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import Country from "./Country";
import { nanoid } from "nanoid";
export default function App(props) {
  const [myData, setMyData] = useState([]);
  const [country, setCountry] = useState("");
  const [select, setSelect] = useState("");
  useEffect(() => {
    let subsribed = true;
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        if (subsribed) {
          setMyData(data);
        }
      });
  }, []);
  function handleCountryName(e) {
    const { value } = e.target;
    setCountry(value);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) =>
        setMyData(() => {
          return data.filter((ele) => {
            return ele.name === value;
          });
        })
      );
  }
  function handleCountrySelection(e) {
    const { value } = e.target;
    setSelect(value);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) =>
        setMyData(() => {
          return data.filter((ele) => {
            return ele.region === value;
          });
        })
      );
  }
  const main_container_style = {
    background: props.dark ? "hsl(207, 26%, 17%)" : "#f1f2f3",
    color: props.dark ? "#fff" : "black",
  };
  const input_styles = {
    background: props.dark ? "hsl(209, 23%, 22%)" : "#fff",
    color: props.dark ? "#fff" : "black",
  };

  return (
    <div className="main-container" style={main_container_style}>
      <div className="container">
        <div className="search-space">
          <div className="search-container" style={input_styles}>
            <FaSearch className="search-logo" />
            <input
              onChange={handleCountryName}
              type="text"
              placeholder="Search for country..."
              value={country}
              style={{ color: props.dark ? "white" : "black" }}
            />
          </div>
          <select
            className="mySelect"
            onChange={handleCountrySelection}
            value={select}
            style={input_styles}
          >
            <option selected hidden>
              Filter By Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="myCountries">
          {myData.map((ele) => {
            return (
              <Country
                key={nanoid()}
                id={nanoid()}
                img={ele.flag}
                population={ele.population}
                name={ele.name}
                region={ele.region}
                capital={ele.capital}
                darkMode={props.dark}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
