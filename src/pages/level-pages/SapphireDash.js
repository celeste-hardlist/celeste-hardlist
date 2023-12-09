import React from "react";
import LevelPage from "../LevelPage.js";

function SapphireDash(props) {
  return (
    <LevelPage
      name="Sapphire Dash"
      mapName="Sapphire Dash by Star Sapphire"
      author="Star Sapphire"
      link="https://gamebanana.com/mods/410693"
      image={
        <img
          src={require("../../level-images/sapphire-dash.jpg")}
          alt="Sapphire Dash"
        />
      }
      description="Madeline arrrives in a bustling city. She comes here in pursuit of Crystal Heart."
    />
  );
}

export default SapphireDash;
