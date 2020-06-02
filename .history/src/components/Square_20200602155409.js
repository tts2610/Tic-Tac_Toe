import React from "react";

export default function Square({ value, onClick }) {
  return (
    <div className="box" onClick={() => onClick(value)}>
      {value === "x" ? (
        <img
          width="50"
          height="50"
          src={process.env.PUBLIC_URL + "cross.png"}
          alt=""
        ></img>
      ) : (
        <img
          width="50"
          height="50"
          src={process.env.PUBLIC_URL + "o.png"}
          alt=""
        ></img>
      )}
    </div>
  );
}
