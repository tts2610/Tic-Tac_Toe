import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";
import styles from "../settings";

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
