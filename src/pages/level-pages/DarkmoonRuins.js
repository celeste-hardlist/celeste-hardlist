import React from "react";
import LevelPage from "../LevelPage.js";

function DarkmoonRuins(props) {
  return (
    <LevelPage
      name="Darkmoon Ruins"
      mapName="Darkmoon Ruins by Cabob & Ru"
      author="Cabob & Ru"
      link="https://gamebanana.com/mods/393245"
      image={
        <img
          src={require("../../level-images/darkmoon-ruins.jpg")}
          alt="Darkmoon Ruins"
        />
      }
      description="Madeline wakes up in a faraway Galaxy in the ruins of human civilization. How did she reach this place? What happened to the people living there? Follow Madeline's journey as she hunts for answers in these increasingly dangerous ruins."
    />
  );
}

export default DarkmoonRuins;
