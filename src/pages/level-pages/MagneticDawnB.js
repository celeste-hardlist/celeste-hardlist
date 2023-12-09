import React from "react";
import LevelPage from "../LevelPage.js";

function MagneticDawnB(props) {
  return (
    <LevelPage
      name="Magnetic Dawn (B-Side)"
      mapName={"Magnetic Dawn (B-Side)\nby Firethief1"}
      author="Firethief1"
      link="https://gamebanana.com/mods/370086"
      image={
        <img
          src={require("../../level-images/magnetic-dawn-b-side.jpg")}
          alt="Magnetic Dawn"
        />
      }
      description="Magnetic Dawn is a gm+1(hopefully not harder) map based off retention tech. It features 5 unique rooms each containing different retention tech. Each room ranges from 5-10 seconds long. The map is really input dense and difficult. Finally, make sure to play retention tech gym before playing this map so you know all the tech. Have fun!(My second map!)"
    />
  );
}

export default MagneticDawnB;
