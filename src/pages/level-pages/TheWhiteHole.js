import React from "react";
import LevelPage from "../LevelPage.js";

function TheWhiteHole(props) {
  return (
    <LevelPage
      name="The White Hole"
      mapName="The White Hole by ZKB"
      author="ZKB"
      link="https://gamebanana.com/mods/486569"
      image={
        <img
          src={require("../../level-images/the-white-hole.jpg")}
          alt="The White Hole"
        />
      }
      description="Beginner or Expert player? Whoever you are, you can progress through this amazing learning Theo map. 108 unique rooms thought out to make you enjoy Theo Gameplay and progress efficiently with it ! We recommend you to play it with the intent of going the farthest you can, without necessarily needed to clear the whole map, as you may have trouble doing so right now. You'll certainly get a massive skill boost nonetheless."
    />
  );
}

export default TheWhiteHole;
