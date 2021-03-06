import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  render() {
    return (
      <Row style={mySetting.row}>
        <Col sm={4} style={mySetting.col}>
          <Square />
        </Col>
        <Col sm={4} style={mySetting.col}>
          <Square />
        </Col>
        <Col sm={4} style={mySetting.col}>
          <Square />
        </Col>
      </Row>
    );
  }
}
