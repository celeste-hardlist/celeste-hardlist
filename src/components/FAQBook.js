import HTMLFlipBook from "react-pageflip";
import React from "react";

import CoverPage from "./CoverPage";
import FAQBookPage from "./FAQBookPage";

const BackPage = React.forwardRef((props, ref) => {
  return <div className={"backPage"} ref={ref} data-density={"hard"}></div>;
});

function FAQBOOK(props) {
  return (
    <HTMLFlipBook
      width={600}
      height={600}
      flippingTime={400}
      showCover={true}
      maxShadowOpacity={0}
    >
      <CoverPage text={props.title} />
      <FAQBookPage
        text={"What is the Celeste Hard List?"}
        children={
          <p>
            The Celeste Hard List is a collection of the hardest maps in Celeste
            and everyone that has completed them. Most of the information about
            the list can be found on the Hardest Clears List spreadsheet, found{" "}
            <a href="https://docs.google.com/spreadsheets/d/1A88F3X2lOQJry-Da2NpnAr-w5WDrkjDtg7Wt0kLCiz8/edit">
              here.
            </a>
          </p>
        }
      ></FAQBookPage>
      <FAQBookPage
        text={"What is this website then?"}
        children={
          "This website was a project that we (@randommathnerd and @darwin15) decided to make for a school club. There's no relationship between us and the actual Hard List, we just like Celeste, and decided to make this for our first ever project."
        }
      ></FAQBookPage>
      <FAQBookPage
        text={"Why has my clear not been added yet?"}
        children={
          <p>
            We currently do not have a live way of updating the completions from
            the actual list (the current method involves making a copy of the
            sheet and running a script on it). For now, you will have to wait
            (or bother us) until it is manually updated, until we learn some
            more CS and actually do it.
            <br />
            <br />
            This website's completion lists were last updated at: 2024-01-06 23:45 GMT
          </p>
        }
      ></FAQBookPage>
      <FAQBookPage
        text={"What do the colors in the completions books mean?"}
        children={
          <p>
            The colors are the same as those found on the actual hard list:
            <p style={{ backgroundColor: "cyan" }}>Clear by Creator</p>
            <p style={{ backgroundColor: "#2DFE54" }}>Clear without Video</p>
            <p style={{ backgroundColor: "#FFE137" }}>Clear with Video</p>
            <p style={{ backgroundColor: "#F8C8DC" }}>
              Clear with All Collectables (if not already required)
            </p>
            <p style={{ backgroundColor: "silver" }}>
              Clear with All Deathless Segments
            </p>
            <p style={{ backgroundColor: "#F6BE00" }}>
              Clear with Golden Strawberry
            </p>
          </p>
        }
      ></FAQBookPage>
      <FAQBookPage
        text={"Can I make any suggestions?"}
        children={
          <p>
            Sure! Given this was our first ever time web programming, we
            probably didn't do a lot of things well, so there's a suggestion
            form{" "}
            <a href="https://forms.gle/158grYC4NEyMGm9KA" target="_blank" rel="noopener noreferrer">
              here.
            </a>
          </p>
        }
      ></FAQBookPage>
      <BackPage></BackPage>
    </HTMLFlipBook>
  );
}

export default FAQBOOK;
