import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  constructor() {
    super();
    this.state = { square: mySetting.square };
    alert(this.state);
  }
  renderSquare(row) {
    let rowSquare = [];
    this.state.square.forEach((element) => {
      if (element.id[0] === row)
        rowSquare.push(
          <Col sm={4} style={mySetting.styles.col}>
            <Square />
          </Col>
        );
    });
    return rowSquare;
  }
  render() {
    return (
      <>
        <Row style={mySetting.styles.row}>{this.renderSquare(0)}</Row>
        <Row style={mySetting.styles.row}>{this.renderSquare(1)}</Row>
        <Row style={mySetting.styles.row}>{this.renderSquare(2)}</Row>
      </>
    );
  }
}
