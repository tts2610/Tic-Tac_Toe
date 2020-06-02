import React, { Component } from "react";
import "./App.css";
import Board from "./components/Board";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Board />
            </Col>
            <Col>History</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
