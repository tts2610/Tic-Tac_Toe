import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  squareList = [];
  renderSquare() {
    mySetting.square.forEach((element) => {});
  }

  render() {
    return (
      <Row style={mySetting.styles.row}>
        <Col sm={4} style={mySetting.styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={mySetting.styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={mySetting.styles.col}>
          <Square />
        </Col>
      </Row>
    );
  }
}
