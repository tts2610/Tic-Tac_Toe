import React from "react";

export default function Des() {
  return (
    <div>
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
      <Row className="prompt">
        {this.state.myTurn ? "Your Turn" : "Opponent's Turn"}
      </Row>
    </div>
  );
}
