import React from "react";

function BookPage(props, ref) {
  return (
    <div className={"bookPage"} ref={ref} data-density={"hard"}>
      <h2>{props.text}</h2>
      <p style={{ textAlign: "left" }}>{props.children}</p>
    </div>
  );
}

export default React.forwardRef(BookPage);
