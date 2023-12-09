import React from "react";
import LevelPage from "../LevelPage.js";

function CrystalGarden(props) {
  return (
    <LevelPage
      name="Crystal Garden"
      mapName="Crystal Garden by Etpio"
      author="Etpio"
      link="https://gamebanana.com/mods/150652"
      image={
        <img
          src={require("../../level-images/crystal-garden.jpg")}
          alt="Crystal Garden"
        />
      }
      description='A map I have been working on for quite a while, Inspired by the Spring Collab map "Gem Garden". I dont have more time to work on it so I wanted to package the little I have made (4 screens) and release it here, there may be cheese. Difficulty is Grandmaster + 2, probably red.'
    />
  );
}

export default CrystalGarden;
