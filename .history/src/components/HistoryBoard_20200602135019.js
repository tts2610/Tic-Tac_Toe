import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object(history).keys();
  return (
    <div>
      {keys.map((element) => (
        <li>${element}</li>
      ))}
    </div>
  );
}
