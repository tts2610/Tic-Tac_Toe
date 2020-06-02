import React from "react";

export default function HistoryBoard({ history }) {
  let keys = Object.keys(history);
  return (
    <div>
      {keys.map((element, index) => {
        if (index === 0)
          return (
            <button type="button" class="btn btn-light">
              Game Start
            </button>
          );
        return (
          <button type="button" class="btn btn-light">
            {element}
          </button>
        );
      })}
    </div>
  );
}
