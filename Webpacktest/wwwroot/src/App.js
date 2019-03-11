import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.section`
  background: grey;
  color: white;
  padding: 1em;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Mounted!");
  }
  render() {
    return (
      <Container>
        <p>Im the Server!!</p>
      </Container>
    );
  }
}
