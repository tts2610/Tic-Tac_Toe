import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element,index) => (
        <li key=${index}>${element}</li>
      ))}
    </div>
  );
}
