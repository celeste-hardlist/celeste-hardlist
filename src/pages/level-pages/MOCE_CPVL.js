import React from "react";
import LevelPage from "../LevelPage.js";

function MOCE_CPVL(props) {
  return (
    <LevelPage
      name="MOCE // CPVL"
      mapName="MOCE // CPVL by issy"
      author="issy"
      link="https://gamebanana.com/mods/409812"
      image={
        <img
          src={require("../../level-images/moce-cpvl.jpg")}
          alt="MOCE // CPVL"
        />
      }
      description="its really finished! i started working on the second chapter nearly 5 months ago, and here it is, finally seeing the light of day"
    />
  );
}

export default MOCE_CPVL;
