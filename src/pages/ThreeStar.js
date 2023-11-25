import React from "react";
import LevelBox from "../components/LevelBox.js";

export const ThreeStar = () => {
  return (
    <div className="commonPage">
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
        <LevelBox
          title="Dashless+"
          author="Alex21"
          image={<img src={require("../level-images/dashless-plus.jpg")}/>}
        />
        <LevelBox/>
        <LevelBox/>
        <LevelBox
          title="Madeline Votes in the US Presidential Election D-Side"
          author="JAN_is_EXIST"
          tooLong={true}
          image={<img src={require("../level-images/dashless-plus.jpg")} 
          />}
        />
        <LevelBox/>
        <LevelBox/>
      </div>
    </div>
  );
};

export default ThreeStar;
