import HTMLFlipBook from "react-pageflip";
import React from "react";

import CoverPage from "./CoverPage";
import BookPage from "./BookPage";

const BackPage = React.forwardRef((props, ref) => {
  return <div className={"backPage"} ref={ref} data-density={"hard"}></div>;
});

function UpdateBook(props) {
  return (
    <HTMLFlipBook
      width={600}
      height={600}
      flippingTime={400}
      showCover={true}
      maxShadowOpacity={0}
    >
      <CoverPage text={props.title}/>
      <BookPage>We're still working on this! Sorry for the wait</BookPage>
      <BackPage></BackPage>
    </HTMLFlipBook>
  );
}

export default UpdateBook;
