import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0)
          return (
            <button key={index} type="button" className="btn btn-info">
              Game Start
            </button>
          );
        return (
          <button key={index} type="button" className="btn btn-light">
            {element}
          </button>
        );
      })}
    </div>
  );
}
