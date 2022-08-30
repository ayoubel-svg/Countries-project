import React from "react";
import { Link } from "react-router-dom";
export default function Country(props) {
  return (
    <Link
      to="/country_info"
      className="country-link"
      style={{ color: props.darkMode ? "white" : "black" }}
      state={props.name}
    >
      <div
        className="country-container"
        style={{ background: props.darkMode ? "hsl(209, 23%, 22%)" : "#fff" }}
      >
        <img src={props.img} alt="image" />
        <div className="country-info">
          <h3>{props.name}</h3>
          <div>
            Population : <span>{props.population}</span>
          </div>
          <div>
            Region : <span>{props.region}</span>
          </div>
          <div>
            Capital : <span>{props.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
