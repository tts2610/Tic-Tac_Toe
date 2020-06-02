import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import HistoryBoard from "./components/HistoryBoard";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Board />
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
