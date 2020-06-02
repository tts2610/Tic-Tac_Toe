import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Square />
        </Col>
        <Col>
          <Square />
        </Col>
        <Col>
          <Square />
        </Col>
      </Row>
    );
  }
}
