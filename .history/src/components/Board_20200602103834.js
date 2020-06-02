import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";

export default class Board extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
        </Row>
        <Row>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
        </Row>
        <Row>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
          <Col>
            <Square />
          </Col>
        </Row>
      </div>
    );
  }
}
