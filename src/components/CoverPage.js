import React from "react";

function CoverPage(props, ref) {
  return (
    <div className={"coverPage"} ref={ref} data-density={"hard"}>
      <h2>{props.text}</h2>
    </div>
  );
}

export default React.forwardRef(CoverPage);
