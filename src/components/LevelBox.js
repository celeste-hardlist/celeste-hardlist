import React from "react";
import { useState } from "react";

function LevelBox(props, ref) {
  const [levelIsOpen, setLevelIsOpen] = useState(false);
  const tooLong = props.tooLong;

  function openLevelHandler() {
    setLevelIsOpen(true);
  }

  return (
    <div className="levelBox" ref={ref}>
      {props.image}
      <h4 style={{ fontSize: tooLong ? "20px" : "30px" }}>{props.title}</h4>
      <h6 style={{ fontSize: tooLong ? "15px" : "21px" }}>{props.author}</h6>
    </div>
  );
}

export default React.forwardRef(LevelBox);
