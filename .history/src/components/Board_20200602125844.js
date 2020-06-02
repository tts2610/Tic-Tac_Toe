import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  state = {
    board: mySetting.board,
    currentMove: "",
    isChecked: false,
  };
  renderSquare(row) {
    let rowSquare = [];
    this.state.board.forEach((element) => {
      if (element.id[0] === row)
        rowSquare.push(
          <Col sm={4} style={mySetting.styles.col} key={element.id}>
            <Square
              value={element.value}
              onClick={() => this.onClickSquareHandle(element)}
            />
          </Col>
        );
    });
    return rowSquare;
  }
  onClickSquareHandle(element) {
    if (!element.isChecked) {
      this.setState(
        {
          currentMove: this.state.currentMove === "x" ? "o" : "x",
        },
        () => {
          console.log(this.state.currentMove);
          const list = this.state.board.map((item, j) => {
            if (item.id === element.id && item.value === "") {
              return { id: item.id, value: this.state.currentMove };
            } else {
              return { id: item.id, value: item.value };
            }
          });
          this.setState({ board: list });
        }
      );
    }
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
