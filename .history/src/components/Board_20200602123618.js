import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  state = {
    board: mySetting.board,
    currentMove: "",
  };
  renderSquare(row) {
    let rowSquare = [];
    this.state.board.forEach((element) => {
      if (element.id[0] === row)
        rowSquare.push(
          <Col sm={4} style={mySetting.styles.col} key={element.id}>
            <Square
              value={element.id}
              onClick={() => this.onClickSquareHandle(element.id)}
            />
          </Col>
        );
    });
    return rowSquare;
  }
  onClickSquareHandle(element) {
    this.setState(
      {
        currentMove: "x",
      },
      () => {
        this.setState(() => {
          const list = this.state.board.map((item, j) => {
            if (item.id === element) {
              return { id: item.id, value: this.state.currentMove };
            } else {
              return { id: item.id, value: item.value };
            }
          });
          return {
            list,
          };
        });
      }
    );
    console.log(this.state.board)''
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
