import React from "react";

export default function HistoryBoard({ history, resetToStart }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0)
          return (
            <li key={index} className="myLi">
              <button type="button" className="btn btn-info">
                Game Start
              </button>
            </li>
          );
        return (
          <li key={index} className="myLi mt-3">
            <button type="button" className="btn btn-light">
              Phase {element}
            </button>
          </li>
        );
      })}
    </div>
  );
}
