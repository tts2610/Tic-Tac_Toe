import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function Des({ myTurn }) {
  const [currentTimeEllapsed, setCurrentTimeEllapsed] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentTimeEllapsed === 0) alert("aaa");
      setCurrentTimeEllapsed((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

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
      <Row className="timeEllapsed">00:00:{currentTimeEllapsed}</Row>
    </div>
  );
}
