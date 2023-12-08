import React from "react";
import LevelPage from "../LevelPage.js";

function ElectionDSide(props) {
  return (
    <LevelPage
      name="Madeline Votes in the US Presidential Election D-Side"
      mapName="Madeline Votes in the US Presidential Election D-Side by JAN_is_EXIST"
      author="JAN_is_EXIST"
      link="https://gamebanana.com/mods/382667"
      image={
        <img
          src={require("../../level-images/election-d-side.jpg")}
          alt="ElectionDSide"
          width={742}
          height={420}
        />
      }
      description="The election storyline continues!

      Election D continues the election story in June 2022, one and a half years after the original map pack ended.
      
      This new addition is significantly harder than anything I've previously released, so get your thumbs ready!"
    />
  );
}

export default ElectionDSide;
