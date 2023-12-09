import React from "react";

function CoverPage(props, ref) {
  return (
    <div className={"coverPage"} ref={ref} data-density={"hard"}>
      <h3>{props.text}</h3>
    </div>
  );
}

export default React.forwardRef(CoverPage);
