import React from "react";

function LevelsPageBox(props, ref) {
  return (
    <div className="levelsPageBox" ref={ref} style={{height: "30vh", backgroundImage: props.color}}>
    
      {props.image}
      <br />
      {props.title}
      <br />
      {props.description}
    </div>
  );
}

export default React.forwardRef(LevelsPageBox);
