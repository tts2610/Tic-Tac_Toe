import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0)
          return (
            <li  key={index} >
              <buttontype="button" className="btn btn-info">
                Game Start
              </button>
            </li>
          );
        return (
          <li key={index}>
            <button  type="button" className="btn btn-light">
              {element}
            </button>
          </li>
        );
      })}
    </div>
  );
}
