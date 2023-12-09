import HTMLFlipBook from "react-pageflip";
import React from "react";

import CoverPage from "./CoverPage";
import BookPage from "./BookPage";

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
      <BookPage
        text={"What do the stars between the map names mean?"}
        children="A. The stars separate the maps into rough difficulty categories. 1 Star: At least as hard as Darkmoon Ruins, up to green GM+1 2 Star: Harder than green GM+1, up to red GM+1. 3 Star: GM+2 or harder. This will (most likely) not change, at least not for a very long time."
      ></BookPage>
      <BookPage
        text="Q. How are the maps ordered? "
        children="A. Maps above 1 star are ordered by difficulty, going from hardest to easiest (top to bottom), meanwhile 1 star is ordered alphabetically. This does not claim to be an objective ranking, but more of a general player consensus."
      ></BookPage>
      <BookPage
        tooLong="true"
        text="Q. How come maps like CMgv and 5bgv are on the list despite not meeting the quality standard? Why are there some clears with input history despite it being disallowed?"
        children="A. All rules are only enacted after their addition date, hence why these maps aren't rejected, and why old clears with input history are also not removed."
      ></BookPage>
      <BookPage
        text='Q. What defines the leniency for "exceptions can be made"?'
        children="A. genuinely speaking here, everyone will be given the benefit of the doubt unless its blatantly fake. this list is supposed to be an archive of the community's best efforts, for both the clearers and  the mappers (hence there being at least Somewhat of a quality rule)."
      ></BookPage>
      <BackPage></BackPage>
    </HTMLFlipBook>
  );
}

export default FAQBOOK;
