import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <Board />
          </Col>
          <Col>History</Col>
        </Row>
      </div>
    );
  }
}
