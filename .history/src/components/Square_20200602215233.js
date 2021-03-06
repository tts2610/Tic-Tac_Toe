import React from "react";

export default function Square({ value, onClick }) {
  if (value === "x") {
    return (
      <div className="box" onClick={() => onClick(value,true)}>
        <img
          width="150"
          height="150"
          src={process.env.PUBLIC_URL + "x_2.png"}
          alt=""
        ></img>
      </div>
    );
  }
  if (value === "o") {
    return (
      <div className="box" onClick={() => onClick(value,true)}>
        <img
          width="150"
          height="150"
          src={process.env.PUBLIC_URL + "o.png"}
          alt=""
        ></img>
      </div>
    );
  } else {
    return <div className="box" onClick={() => onClick(value)}></div>;
  }
}
