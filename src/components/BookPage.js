import React from "react";

function BookPage(props, ref) {
  const tooLong = props.tooLong;
  return (
    <div className={"bookPage"} ref={ref} data-density={"hard"}>
      <h2 style={{ textAlign: "left", fontSize: tooLong ? "40px" : "45px" }}>
        {props.text}
      </h2>
      <p style={{ textAlign: "left", fontSize: tooLong ? "28px" : "30px" }}>
        {props.children}
      </p>
    </div>
  );
}

export default React.forwardRef(BookPage);
