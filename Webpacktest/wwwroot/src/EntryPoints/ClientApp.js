import React from "react";
import ReactDOM from "react-dom";
import App from "../App.js";

var tag = document.getElementById("app");
ReactDOM.hydrate(<App />, tag);

if (module.hot) {
  module.hot.accept();
}
