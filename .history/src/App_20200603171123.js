import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import HistoryBoard from "./components/HistoryBoard";
import * as mySetting from "./settings";
import Des from "./components/Des";
import FacebookLogin from "react-facebook-login";
let API_KEY = process.env.REACT_APP_APIKEY;
let timer = null;
export default class App extends Component {
  state = {
    board: mySetting.board,
    currentMove: "",
    history: mySetting.history,
    currentPhase: 1,
    myTurn: true,
    isLogin: false,
    currentUser: "",
    currentTimeEllapsed: 30,
  };
  componentDidMount() {}

  componentWillUnmount() {
    clearTimeout(timer);
  }

  onClickSquareHandle = (element, isOpponentTurn) => {
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
            } else if (item.value === "") {
              return { id: item.id, value: item.value, isChecked: false };
            } else {
              return { id: item.id, value: item.value, isChecked: true };
            }
          });
          this.setState({ board: list }, () => {
            if (
              this.checkVertical(element)[0] ||
              this.checkHorizonal(element)[0] ||
              this.checkRightDiagonal()[0] ||
              this.checkLeftDiagonal()[0]
            ) {
              this.postToCoderSchool(this.state.currentTimeEllapsed);
              clearTimeout(timer);
              this.resetGame();
              alert(`${this.state.currentUser} Win!!!`);
            } else if (mySetting.checkAllFilled(this.state.board)) {
              this.resetGame();
              alert("Draw!!!");
            } else if (
              this.checkVertical(element)[1] |
                this.checkHorizonal(element)[1] ||
              this.checkRightDiagonal()[1] ||
              this.checkLeftDiagonal()[1]
            ) {
              this.resetGame();
              alert("Opponent win!!!");
            } else if (!isOpponentTurn) {
              this.setState({
                currentPhase: this.state.currentPhase + 1,
                history: {
                  ...this.state.history,
                  [this.state.currentPhase]: this.state.board,
                },
                myTurn: false,
              });
              setTimeout(() => {
                let filterList = this.state.board.filter((x) => !x.isChecked);
                const randomElement =
                  filterList[Math.floor(Math.random() * filterList.length)];

                this.onClickSquareHandle(randomElement, true);
              }, 1000);
            } else {
              this.setState({ myTurn: true });
            }
          });
        }
      );
    }
  };

  postToCoderSchool = async (currentTimeEllapsed) => {
    let data = new URLSearchParams();
    data.append("player", this.state.currentUser);
    data.append("score", 30 - currentTimeEllapsed);
    const url = `https://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
      json: true,
    });
    console.log(response);
    if (response.status === 200) {
      this.resetGame();
    }
  };

  checkVertical(currentChoice) {
    let countMe = 0;
    let countCPU = 0;
    this.state.board.forEach((element) => {
      if (
        currentChoice.id[1] === element.id[1] &&
        element.value === "x" &&
        currentChoice !== element
      )
        countMe++;
      else if (
        currentChoice.id[1] === element.id[1] &&
        element.value === "o" &&
        currentChoice !== element
      )
        countCPU++;
    });

    return [countMe === 3, countCPU === 3];
  }

  checkHorizonal(currentChoice) {
    let countMe = 0;
    let countCPU = 0;
    this.state.board.forEach((element) => {
      if (
        currentChoice.id[0] === element.id[0] &&
        element.value === "x" &&
        currentChoice !== element
      )
        countMe++;
      else if (
        currentChoice.id[0] === element.id[0] &&
        element.value === "o" &&
        currentChoice !== element
      )
        countCPU++;
    });

    return [countMe === 3, countCPU === 3];
  }

  checkRightDiagonal() {
    let countMe = 0;
    let countCPU = 0;
    this.state.board.forEach((element) => {
      if (
        (mySetting.compareArrays(element.id, [0, 2]) &&
          element.value === "x") ||
        (mySetting.compareArrays(element.id, [1, 1]) &&
          element.value === "x") ||
        (mySetting.compareArrays(element.id, [2, 0]) && element.value === "x")
      ) {
        countMe++;
      } else if (
        (mySetting.compareArrays(element.id, [0, 2]) &&
          element.value === "o") ||
        (mySetting.compareArrays(element.id, [1, 1]) &&
          element.value === "o") ||
        (mySetting.compareArrays(element.id, [2, 0]) && element.value === "o")
      ) {
        countCPU++;
      }
    });
    return [countMe === 3, countCPU === 3];
  }

  checkLeftDiagonal() {
    let countMe = 0;
    let countCPU = 0;
    this.state.board.forEach((element) => {
      if (
        (mySetting.compareArrays(element.id, [0, 0]) &&
          element.value === "x") ||
        (mySetting.compareArrays(element.id, [1, 1]) &&
          element.value === "x") ||
        (mySetting.compareArrays(element.id, [2, 2]) && element.value === "x")
      ) {
        countMe++;
      } else if (
        (mySetting.compareArrays(element.id, [0, 0]) &&
          element.value === "o") ||
        (mySetting.compareArrays(element.id, [1, 1]) &&
          element.value === "o") ||
        (mySetting.compareArrays(element.id, [2, 2]) && element.value === "o")
      )
        countCPU++;
    });

    return [countMe === 3, countCPU === 3];
  }

  resetGame() {
    this.setState(
      {
        board: mySetting.board,
        currentMove: "",
      },
      () => {
        this.setState({
          history: mySetting.history,
          currentPhase: 1,
          myTurn: true,
          currentTimeEllapsed: 30,
        });

        clearInterval(timer);
        this.startCounting();
      }
    );
  }

  resetPhase = (phase) => {
    this.setState(
      {
        history: mySetting.spliceDict(this.state.history, 0, phase),
        currentMove: this.state.currentMove === "x" ? "o" : "x",
        board: this.state.history[phase],
      },
      () => {
        this.setState({
          myTurn: false,
          currentPhase: Object.keys(this.state.history).length,
        });
        setTimeout(() => {
          let filterList = this.state.board.filter((x) => !x.isChecked);
          const randomElement =
            filterList[Math.floor(Math.random() * filterList.length)];

          this.onClickSquareHandle(randomElement, true);
        }, 1000);
      }
    );
  };

  responseFacebook(resp) {
    if (resp.status !== "unknown") {
      this.setState({
        isLogin: true,
        currentUser: resp.name,
      });

      this.startCounting();
    }
  }

  startCounting() {
    timer = setInterval(() => {
      if (this.state.currentTimeEllapsed === 0) {
        this.postToCoderSchool(this.state.currentTimeEllapsed);
        clearTimeout(timer);
        return;
      }
      this.setState({
        currentTimeEllapsed: this.state.currentTimeEllapsed - 1,
      });
    }, 1000);
  }

  render() {
    if (!this.state.isLogin) {
      return (
        <>
          <FacebookLogin
            autoLoad={false}
            appId={API_KEY}
            fields="name,email,picture"
            callback={(resp) => this.responseFacebook(resp)}
          />
        </>
      );
    }
    return (
      <div className="App">
        <h1 className="title">{this.state.currentUser} vs CPU</h1>
        <Container>
          <Row className="mt-5">
            <Col lg={3}>
              <Des
                myTurn={this.state.myTurn}
                postToCoderSchool={this.postToCoderSchool}
                currentPlayer={this.state.currentUser}
                currentTimeEllapsed={this.state.currentTimeEllapsed}
              />
            </Col>
            <Col lg={7}>
              <Board
                enabled={this.state.myTurn}
                board={this.state.board}
                onClick={this.onClickSquareHandle}
              />
            </Col>
            <Col lg={2}>
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
