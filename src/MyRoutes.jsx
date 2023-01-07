import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import App from "./componnent/App";
import Country_info from "./componnent/Country_info";
import Error from "./componnent/Error";
export default function MyRoutes() {
  const [dark, setDark] = useState(false);
  return (
    <div>
      <header
        style={{
          background: dark ? "hsl(209, 23%, 22%)" : "#fff",
          color: dark ? "white" : "black",
        }}
      >
        <Link to="/" style={{ color: dark ? "#fff" : "#000" }}>
          <h3>Where in the world</h3>
        </Link>
        <span
          className="darkMode"
          onClick={() => {
            setDark((prevVal) => !prevVal);
          }}
        >
          <FaRegMoon /> Dark Mode
        </span>
      </header>
      <Routes>
        <Route path="/" element={<App dark={dark} />} />
        <Route path="/country_info" element={<Country_info dark={dark} />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}
