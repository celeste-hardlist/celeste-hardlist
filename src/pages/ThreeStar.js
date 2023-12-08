import React from "react";
import LevelBox from "../components/LevelBox.js";
import { Link } from "react-router-dom";

export const ThreeStar = () => {
  return (
    <div className="commonPage" id="levelLink">
      <h1 style={{ textAlign: "center" }}>Three Star</h1>
      <h3 style={{ textAlign: "center" }}>
        The hardest of the Hard List. GM+2 or harder.
      </h3>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          flexBasis: "100%",
          flexWrap: "wrap",
        }}
      >
        <Link to="/dashless-plus">
          <LevelBox
            title="Dashless+"
            author="Alex21"
            image={
              <img
                src={require("../level-images/dashless-plus.jpg")}
                alt="Dashless+"
              />
            }
          />
        </Link>
        <Link to="/d1d7">
          <LevelBox
            title="D1D7"
            author="TheMathGuy"
            image={<img src={require("../level-images/d1d7.jpg")} alt="D1D7" />}
          />
        </Link>
        <Link to="/moce-lxvi">
          <LevelBox
            title="MOCE // LXVI"
            author="issy"
            image={
              <img
                src={require("../level-images/moce-lxvi.jpg")}
                alt="MOCE // LXVI"
              />
            }
          />
        </Link>
        <Link to="/election-d-side">
          <LevelBox
            title="Madeline Votes in the US Presidential Election D-Side"
            author="JAN_is_EXIST"
            tooLong={true}
            nameResize={true}
            image={
              <img
                src={require("../level-images/election-d-side.jpg")}
                alt="Election D-Side"
              />
            }
          />
        </Link>
        <Link to="/crystal-garden">
          <LevelBox
            title="Crystal Garden"
            author="Etpio"
            image={
              <img
                src={require("../level-images/crystal-garden.jpg")}
                alt="Crystal Garden"
              />
            }
          />
        </Link>
        <Link to="/dragonfruit-demise">
          <LevelBox
            title="Dragonfruit Demise"
            author="#mapping-grandmaster"
            image={
              <img
                src={require("../level-images/dragonfruit-demise.jpg")}
                alt="Dragonfruit Demise"
              />
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default ThreeStar;
