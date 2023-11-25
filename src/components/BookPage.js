import React from "react";

function BookPage(props, ref) {
  return (
    <div className={"bookPage"} ref={ref} data-density={"hard"}>
      <h2>{props.text}</h2>
      <p>{props.children}</p>
    </div>
  );
}

export default React.forwardRef(BookPage);
