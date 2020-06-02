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
    width: "80%",
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};
export default class Board extends Component {
  render() {
    return (
     
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
        <Col sm={4} style={styles.col}>
          <Square />
        </Col>
    );
  }
}
