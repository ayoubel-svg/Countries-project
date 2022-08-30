import React from "react";
import ReactDOM from "react-dom/client";
import App from "./componnent/App";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./MyRoutes";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
