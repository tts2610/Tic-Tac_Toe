import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <Row>
        <Col sm={4}>
          <Square />
        </Col>
        <Col sm={4}>
          <Square />
        </Col>
        <Col sm={4}>
          <Square />
        </Col>
      </Row>
    );
  }
}
