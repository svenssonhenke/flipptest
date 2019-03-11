import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Context from "./Context";
import { Style } from "./style/style";

import TextOutput from "./TextOutput";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "Text from way up in App component"
    };
  }

  componentDidMount() {
    console.log("Mounted!");
  }

  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        <Style>
          <TextOutput />
        </Style>
      </Context.Provider>
    );
  }
}
