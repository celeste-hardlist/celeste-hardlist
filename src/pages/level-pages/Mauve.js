import React from "react";
import LevelPage from "../LevelPage.js";

function Mauve(props) {
  return (
    <LevelPage
      name="Mauve"
      mapName="Mauve by smoothee"
      author="smoothee"
      link="https://gamebanana.com/mods/404124"
      image={
        <img
          src={require("../../level-images/mauve.jpg")}
          alt="Mauve"
        />
      }
      description="This is a very difficult, short to medium length map with very short gameplay segments of either simple movement puzzles or high input-density speed chains. The hardest rooms feature corner boosts of all kinds and require tight speed optimization. As you get a feel for the jump heights and dash inputs of a room, you will push the inputs closer and closer together until you flow through the environment faster than your brain can process."
    />
  );
}

export default Mauve;
