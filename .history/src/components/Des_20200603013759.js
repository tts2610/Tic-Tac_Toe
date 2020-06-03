import React from "react";
import { Row } from "react-bootstrap";

export default function Des({ myTurn }) {
  return (
    <div className="des-container">
      <Row className="des">
        <div>
          <img
            src={process.env.PUBLIC_URL + "x_2.png"}
            alt=""
            width="30"
            height="30"
          ></img>
          : You{" "}
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "o.png"}
            alt=""
            width="30"
            height="30"
          ></img>
          : Opponent
        </div>
      </Row>
      <hr></hr>
      <Row className="prompt">{myTurn ? "Your Turn" : "Opponent's Turn"}</Row>
    </div>
  );
}
