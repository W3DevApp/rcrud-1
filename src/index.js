import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* BrowserRouter, crear multiples rutas en la app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);