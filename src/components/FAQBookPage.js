import React from "react";

function FAQBookPage(props, ref) {
  return (
    <div className={"bookPage"} ref={ref} data-density={"hard"}>
      <h3 style={{ textAlign: "center"}}>
        {props.text}
      </h3>
      <h5 style={{ textAlign: "left"}}>
        {props.children}
      </h5>
    </div>
  );
}

export default React.forwardRef(FAQBookPage);
