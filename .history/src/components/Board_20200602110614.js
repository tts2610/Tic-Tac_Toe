import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

const square = [
  {
    id: [0, 0],
    value: "",
  },
  {
    id: [0, 1],
    value: "",
  },
  {
    id: [0, 2],
    value: "",
  },
  {
    id: [1, 0],
    value: "",
  },
  {
    id: [1, 1],
    value: "",
  },
  {
    id: [1, 2],
    value: "",
  },
  {
    id: [2, 0],
    value: "",
  },
  {
    id: [2, 1],
    value: "",
  },
  {
    id: [2, 2],
    value: "",
  },
];
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
