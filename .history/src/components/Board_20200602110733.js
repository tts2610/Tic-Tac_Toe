import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <Row style={styles.row}>
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
      </Row>
    );
  }
}
