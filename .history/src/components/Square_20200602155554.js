import React from "react";

export default function Square({ value, onClick }) {

    if(value === "x"){
        return (
            <div className="box" onClick={() => onClick(value)}>
            <img
          width="50"
          height="50"
          src={process.env.PUBLIC_URL + "cross.png"}
          alt=""
        ></img>
            </div>
        )
    }
  return (
    <div className="box" onClick={() => onClick(value)}>
      {
         
        
      ) else if(value==="o") 
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
