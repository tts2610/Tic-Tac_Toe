import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg={4}>
            <Square />
          </Col>
          <Col lg={4}>
            <Square />
          </Col>
          <Col lg={4}>
            <Square />
          </Col>
        </Row>
      </Container>
    );
  }
}
