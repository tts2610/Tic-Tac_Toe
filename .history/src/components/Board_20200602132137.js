import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";
import * as mySetting from "../settings";

export default class Board extends Component {
  state = {
    board: mySetting.board,
    currentMove: "",
    history: mySetting.history,
    currentPhase: 0,
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
          const list = this.state.board.map((item, j) => {
            if (item.id === element.id && item.value === "") {
              return {
                id: item.id,
                value: this.state.currentMove,
                isChecked: true,
              };
            } else {
              return { id: item.id, value: item.value, isChecked: false };
            }
          });
          this.setState({ board: list }, () => {
            this.setState({ currentPhase: ++this.state.currentPhase });
            this.setState({
              history: this.state.history.push(this.state.board),
            });
          });
        }
      );
    }
    console.log(this.state.history);
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
