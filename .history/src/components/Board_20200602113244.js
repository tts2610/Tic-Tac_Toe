import React, { Component } from "react";
import Square from "./Square";
import { Row, Col, Container } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  renderRow(row) {
    let rowSquare = [];
    mySetting.square.forEach((element) => {
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
    return (<Row style={mySetting.styles.row}>{this.renderRow(0)}</Row>
    <Row style={mySetting.styles.row}>{this.renderRow(1)}</Row>
    <Row style={mySetting.styles.row}>{this.renderRow(2)}</Row>);
  }
}
