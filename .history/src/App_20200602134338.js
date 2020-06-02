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
    currentPhase: 0,
  };
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
            this.setState({ currentPhase: this.state.currentPhase + 1 });
            let newDic = {};
            const history = [
              ...this.state.history,
              (newDic[this.state.currentPhase] = this.state.board),
            ];
            this.setState({
              history: history,
            });
          });
        }
      );
    }
    console.log(this.state.history);
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Board
                currentMove={this.state.currentMove}
                currentPhase={this.state.currentPhase}
                board={this.state.board}
                onClick={this.onClickSquareHandle}
              />
            </Col>
            <Col>
              <HistoryBoard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
