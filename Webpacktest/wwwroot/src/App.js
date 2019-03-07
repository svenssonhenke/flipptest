import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Mounted!");
  }
  render() {
    return <p>Im the Server!</p>;
  }
}
