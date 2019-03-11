import React, { Component } from "react";
import Context from "./Context";

class TextOutput extends Component {
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
export default TextOutput;
