import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function Des({ myTurn }) {
  const [currentTimeEllapsed, setCurrentTimeEllapsed] = useState(30);
  let postToCoderSchool = async () => {
    let data = new URLSearchParams();
    data.append("player", "PLAYER_NAME");
    data.append("score", "TIME_ELAPSED_IN_SECONDS");
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data.toString(),
      json: true,
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentTimeEllapsed === 0) {
        clearTimeout(timer);
        return;
      }
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
