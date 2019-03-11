import React from "react";
import ReactDomServer from "react-dom/server";
import App from "../App.js";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function Run(callback) {
  const sheet = new ServerStyleSheet();
  var str = ReactDomServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App />
    </StyleSheetManager>
  );
  callback(null, str);
}
