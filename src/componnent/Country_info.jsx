import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
export default function Country_info(props) {
  const [newData, setNewData] = useState([]);
  let location = useLocation();
  useEffect(() => {
    let subscribed = false;
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        if (!subscribed) {
          setNewData(() => {
            return data.filter((ele) => {
              return ele.name === location.state;
            });
          });
        }
      });
    return () => {
      subscribed = true;
    };
  }, []);

  return (
    <div
      className="main-container-info"
      style={{
        background: props.dark ? "hsl(207, 26%, 17%)" : "#f1f2f3",
        color: props.dark ? "white" : "black",
      }}
    >
      <Link
        to="/"
        className="back"
        style={{
          background: props.dark ? "hsl(209, 23%, 22%)" : "#f1f2f3",
          color: props.dark ? "white" : "black",
        }}
      >
        <FaArrowLeft />
        Back
      </Link>
      <div
        className="myContainer"
        style={{
          background: props.dark ? "hsl(207, 26%, 17%)" : "#f1f2f3",
          color: props.dark ? "white" : "black",
        }}
      >
        <div className="myImg">
          <img src={newData[0] && newData[0].flag} alt="" />
        </div>
        <div className="country-detail">
          <h2>{newData[0] && newData[0].name}</h2>
          <div className="more-detail">
            <span>Native Name : {newData[0] && newData[0].nativeName}</span>
            <span>Population : {newData[0] && newData[0].population}</span>
            <span>Region : {newData[0] && newData[0].region}</span>
            <span>Sub Region : {newData[0] && newData[0].subregion}</span>
            <span>Capital : {newData[0] && newData[0].capital}</span>
            <span>
              Top Level Domain : {newData[0] && newData[0].topLevelDomain[0]}
            </span>
            <span>
              Currencies : {newData[0] && newData[0].currencies[0].code}
            </span>
            <span>
              Languages :{" "}
              {newData[0] &&
                newData[0].languages.map((lang) => {
                  return `${lang.name} ,`;
                })}
            </span>
          </div>
          <div className="myborders">
            <strong> Border Countries </strong> :{" "}
            {newData[0] &&
              newData[0].borders &&
              newData[0].borders.map((ele) => {
                return (
                  <span
                    style={{
                      background: props.dark ? "hsl(209,23%,22%)" : "#f1f2f3",
                      color: props.dark ? "white" : "black",
                    }}
                  >
                    {ele}
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
