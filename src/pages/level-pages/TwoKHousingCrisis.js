import React from "react";
import LevelPage from "../LevelPage.js";

function TheSource(props) {
  return (
    <LevelPage
      name="The 2000's American Housing Crisis"
      mapName="The 2000's American Housing Crisis by jimmyclyde"
      author="jimmyclyde"
      link="https://gamebanana.com/mods/481836"
      image={
        <img
          src={require("../../level-images/2000s-housing-crisis.jpg")}
          alt="The 2000's American Housing Crisis"
        />
      }
      description="Description"
    />
  );
}

export default TheSource;
