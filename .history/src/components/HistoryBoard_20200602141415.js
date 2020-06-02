import React from "react";

export default function HistoryBoard({ history, resetPhase }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0)
          return (
            <li key={index} className="myLi">
              <button
                onClick={() => resetPhase(element)}
                type="button"
                className="btn btn-info"
              >
                Game Start
              </button>
            </li>
          );
        return (
          <li key={index} className="myLi mt-3">
            <button
              onClick={() => resetPhase(element)}
              type="button"
              className="btn btn-light"
            >
              Phase {element}
            </button>
          </li>
        );
      })}
    </div>
  );
}
