import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "../node_modules/jquery/dist/jquery.js";

import "../node_modules/@popperjs/core/dist/cjs/popper.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
