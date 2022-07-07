import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Top from "./components/Top";
import MoiveChart from "./components/MovieChart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Top />
    <MoiveChart />
  </React.StrictMode>
);
