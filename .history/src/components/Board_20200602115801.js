import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  state = {
    square: mySetting.square,
    currentMove: "",
  };
  renderSquare(row) {
    let rowSquare = [];
    this.state.square.forEach((element) => {
      if (element.id[0] === row)
        rowSquare.push(
          <Col sm={4} style={mySetting.styles.col}>
            <Square
              key={element.id}
              currentMove={this.state.currentMove}
              onClick={() => this.onClickSquareHandle(element.id)}
            />
          </Col>
        );
    });
    return rowSquare;
  }
  onClickSquareHandle(element) {
    alert("aaa");
    console.log(element.id);
  }
  render() {
    return (
      <>
        <Row style={mySetting.styles.row}>{this.renderSquare(0)}</Row>
        <Row style={mySetting.styles.row}>{this.renderSquare(1)}</Row>
        <Row style={mySetting.styles.row}>{this.renderSquare(2)}</Row>
      </>
    );
  }
}
