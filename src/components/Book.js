import HTMLFlipBook from "react-pageflip";
import React from "react";

import CoverPage from "./CoverPage";

const BookPage = React.forwardRef((props, ref) => {
  return (
    <div className={"bookPage"} ref={ref} data-density={"hard"}>
      <h2>Page Header</h2>
      <p>{props.children}</p>
    </div>
  );
});

const BackPage = React.forwardRef((props, ref) => {
  return <div className={"backPage"} ref={ref} data-density={"hard"}></div>;
});

function MyBook(props) {
  return (
    <HTMLFlipBook
      width={600}
      height={600}
      flippingTime={400}
      showCover={true}
      maxShadowOpacity={0}
    >
      <CoverPage text={props.title}/>
      <BookPage>Page text</BookPage>
      <BookPage>Page text</BookPage>
      <BookPage>Page text</BookPage>
      <BookPage>Page text</BookPage>
      <BackPage></BackPage>
    </HTMLFlipBook>
  );
}

export default MyBook;
