import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
