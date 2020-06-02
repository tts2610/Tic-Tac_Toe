import React, { Component } from "react";
import Square from "./Square";
import { Row } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <div>
        <Row></Row>
        <Square />
      </div>
    );
  }
}
