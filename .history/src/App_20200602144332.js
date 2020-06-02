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
    console.log(this.state.history);
  };

  checkNeighbor(element) {
    this.state.board.forEach((element) => {
      let above = element.id[0] - 1;
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
