import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { weatherApi } from "./features/weather/weatherApi";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={weatherApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
