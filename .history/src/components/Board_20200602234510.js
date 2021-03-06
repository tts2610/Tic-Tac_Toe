import React, { Component } from "react";
import Square from "./Square";
import { Row, Col } from "react-bootstrap/";
import * as mySetting from "../settings";

export default function Board({ board, onClick, enabled }) {
  let renderSquare = (row) => {
    let rowSquare = [];
    board.forEach((element) => {
      if (element.id[0] === row)
        rowSquare.push(
          <Col sm={4} style={mySetting.styles.col} key={element.id}>
            <Square
              value={element.value}
              onClick={() => onClick(element, false)}
            />
          </Col>
        );
    });
    return rowSquare;
  };

  return (
    <>
      <Row
        style={
          (mySetting.styles.row, { pointerEvents: enabled ? "cursor" : "none" })
        }
      >
        {renderSquare(0)}
      </Row>
      <Row
        style={
          (mySetting.styles.row, { pointerEvents: enabled ? "cursor" : "none" })
        }
      >
        {renderSquare(1)}
      </Row>
      <Row
        style={
          (mySetting.styles.row, { pointerEvents: enabled ? "cursor" : "none" })
        }
      >
        {renderSquare(2)}
      </Row>
    </>
  );
}
