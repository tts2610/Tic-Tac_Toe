import React from "react";

export default function Square({ value, onClick }) {
  if (value === "x") {
    return (
      <div className="box" onClick={() => onClick(value)}>
        <img
          width="50"
          height="50"
          src={process.env.PUBLIC_URL + "x.png"}
          alt=""
        ></img>
      </div>
    );
  }
  if (value === "o") {
    return (
      <div className="box" onClick={() => onClick(value)}>
        <img
          width="50"
          height="50"
          src={process.env.PUBLIC_URL + "o.png"}
          alt=""
        ></img>
      </div>
    );
  } else {
    return <div className="box" onClick={() => onClick(value)}></div>;
  }
}
