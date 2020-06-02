import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0) return <li key={index}>{element}</li>;
      })}
    </div>
  );
}
