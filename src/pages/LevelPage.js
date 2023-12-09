import React from "react";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import LevelCompletions from "./LevelCompletions.js";
import BookPage from "../components/BookPage.js";
import CoverPage from "../components/CoverPage.js";

function LevelPage(props) {
  const book = useRef();
  setTimeout(function () {
    if (book.current != null) {
      book.current.pageFlip().flipNext();
    }
  }, 1000);

  return (
    <div className="commonPage" style={{ minHeight: "160vh" }}>
      <div id="gameBananaLink">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <h1>{props.name}</h1>
        </a>
      </div>
      <h4>{props.author}</h4>
      <div style={{ padding: "10px" }}></div>
      <div class="row">
        <div
          class="column"
          style={{
            width: "58vw",
            padding: "10px",
            textAlign: "left",
            display: "block",
            marginLeft: "15px",
            marginRight: "auto",
            border: "3px solid black",
            borderRadius: "5px",
            boxShadow: "10px 10px rgb(36, 36, 36)",
          }}
        >
          <h5>{props.description}</h5>
        </div>
        <div class="column" id="levelPageImage">
          <div
            style={{
              width: "535px",
              height: "304px",
              border: "3px solid black",
              borderRadius: "5px",
              marginLeft: "50px",
              padding: "0px",
              display: "block",
              marginRight: "auto",
              boxShadow: "10px 10px rgb(36, 36, 36)",
            }}
          >
            {props.image}
          </div>
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          transform: "rotate(-1deg)",
        }}
      >
        <HTMLFlipBook
          width={600}
          height={600}
          flippingTime={600}
          showCover={true}
          maxShadowOpacity={0}
          ref={book}
        >
          <CoverPage text={props.name}></CoverPage>
          <BookPage text="Clears">
            <table>
              <LevelCompletions mapName={props.mapName} />
            </table>
          </BookPage>
          <BookPage text="Monthly Clears">Will be updated soon!</BookPage>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default LevelPage;
