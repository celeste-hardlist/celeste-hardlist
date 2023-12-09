import React from "react";
import LevelPage from "../LevelPage.js";

function CMgv(props) {
  return (
    <LevelPage
      name="CMgv"
      mapName="CMgv by TheMathGuy"
      author="TheMathGuy"
      link="https://gamebanana.com/mods/150388"
      image={
        <img
          src={require("../../level-images/cmgv.jpg")}
          alt="CMgv"
        />
      }
      description="This is cycle madness, but worse. Not much else to add. DeathKontrol does not recommend or condone people playing this map. I don't recommend playing this map either."
    />
  );
}

export default CMgv;
