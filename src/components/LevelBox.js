import React from "react";

function LevelBox(props, ref) {
  const tooLong = props.tooLong;
  const nameResize = props.nameResize;
  return (
    <div className="levelBox" ref={ref}>
      {props.image}
      <h4 style={{ whiteSpace: "normal", fontSize: tooLong ? "21px" : "30px", }}>{props.title}</h4>
      <h6 style={{ fontSize: nameResize ? "15px" : "20px" }}>{props.author}</h6>
    </div>
  );
}

export default React.forwardRef(LevelBox);
