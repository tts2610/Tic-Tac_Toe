import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import HistoryBoard from "./components/HistoryBoard";
import * as mySetting from "./settings";

export default class App extends Component {
  state = {
    board: mySetting.board,
    currentMove: "",
    history: mySetting.history,
    currentPhase: 1,
    winMoves: [],
  };
  onClickSquareHandle = (element) => {
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
            if (
              this.checkVertical(element) ||
              this.checkHorizonal(element) ||
              this.checkRightDiagonal() ||
              this.checkLeftDiagonal()
            ) {
              alert("win!!!");
              this.resetGame();
            }

            this.setState({ currentPhase: this.state.currentPhase + 1 });
            this.setState({
              history: {
                ...this.state.history,
                [this.state.currentPhase]: this.state.board,
              },
            });
          });
        }
      );
    }
  };

  checkVertical(currentChoice) {
    let count = 0;
    this.state.board.forEach((element) => {
      if (
        currentChoice.id[1] === element.id[1] &&
        element.value === "x" &&
        currentChoice !== element
      )
        count++;
    });

    return count === 3;
  }

  checkHorizonal(currentChoice) {
    let count = 0;
    this.state.board.forEach((element) => {
      if (
        currentChoice.id[0] === element.id[0] &&
        element.value === "x" &&
        currentChoice !== element
      )
        count++;
    });

    return count === 3;
  }

  compareArrays(array1, array2) {
    return (
      array1.length === array2.length &&
      array1.every(function (element, index) {
        return element === array2[index];
      })
    );
  }

  checkRightDiagonal() {
    let count = 0;
    this.state.board.forEach((element) => {
      if (
        (this.compareArrays(element.id, [0, 2]) && element.value === "x") ||
        (this.compareArrays(element.id, [1, 1]) && element.value === "x") ||
        (this.compareArrays(element.id, [2, 0]) && element.value === "x")
      ) {
        count++;
      }
    });
    return count === 3;
  }

  checkLeftDiagonal() {
    let count = 0;
    this.state.board.forEach((element) => {
      if (
        (this.compareArrays(element.id, [0, 0]) && element.value === "x") ||
        (this.compareArrays(element.id, [1, 1]) && element.value === "x") ||
        (this.compareArrays(element.id, [2, 2]) && element.value === "x")
      ) {
        count++;
      }
    });

    return count === 3;
  }

  resetGame() {
    console.log(this.state.history);
    this.setState({
      board: mySetting.board,
      currentMove: "",
      history: mySetting.history,
      currentPhase: 1,
    });
  }

  spliceDict(dict, minKey, maxKey) {
    var newDict = {};
    for (var i in dict) {
      if (i >= minKey && i <= maxKey) {
        newDict[i] = dict[i];
      }
    }
    return newDict;
  }

  resetPhase = (phase) => {
    this.setState({ history: this.spliceDict(this.state.history, 0, phase) });
    this.setState({
      currentMove: this.state.currentMove === "x" ? "o" : "x",
      currentPhase: this.state.currentPhase - 1,
      board: this.state.history[phase],
    });
  };
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col sm={8}>
              <Board
                board={this.state.board}
                onClick={this.onClickSquareHandle}
              />
            </Col>
            <Col sm={4}>
              <HistoryBoard
                history={this.state.history}
                resetPhase={this.resetPhase}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
