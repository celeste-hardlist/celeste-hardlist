import React from "react";

function LevelsPageBox(props, ref) {
  return (
    <div className="levelsPageBox" ref={ref} style={{height: "30vh", backgroundImage: props.color}}>
      <h1 style={{fontSize: "7vh"}}>{props.image}</h1>
      <p style={{fontSize: "3.5vh"}}>{props.description}</p>
    </div>
  );
}

export default React.forwardRef(LevelsPageBox);
