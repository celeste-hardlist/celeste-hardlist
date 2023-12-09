import React from "react";
import LevelPage from "../LevelPage.js";

function Serotonin(props) {
  return (
    <LevelPage
      name="Serotonin"
      mapName="Serotonin by gtfo-"
      author="gtfo-"
      link="https://gamebanana.com/mods/442784"
      image={
        <img
          src={require("../../level-images/serotonin.jpg")}
          alt="Serotonin"
        />
      }
      description="Map consists of 18 jumps which need multiple frame perfect inputs.
      If you want to know the tech requirements they are in the readme.
      
      I do not recommend playing this but if you do I fully support the use of savestates, pausebuffering, invincibility, and whatever else you want to do."
    />
  );
}

export default Serotonin;
