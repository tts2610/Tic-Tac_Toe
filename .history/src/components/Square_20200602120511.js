import React from "react";

export default function Square({ value, onClick }) {
  return (
    <div className="box" onClick={() => onClick(value)}>
      {value}
    </div>
  );
}
