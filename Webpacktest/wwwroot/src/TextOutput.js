import React, { Component } from "react";
import ReactDOM from "react-dom";
import Context from "./Context";

class ClassName extends Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <div>
            <h1>From context state:</h1>
            <p>{context.state.textValue}</p>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
export default ClassName;
