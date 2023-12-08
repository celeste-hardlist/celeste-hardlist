import React from "react";
import LevelPage from "../LevelPage.js";

function SWAPSLUT(props) {
  return (
    <LevelPage
      name="SWAPSLUT"
      mapName="SWAPSLUT by tirednwired"
      author="tirednwired"
      link="https://gamebanana.com/mods/467920"
      image={
        <img
          src={require("../../level-images/swapslut.jpg")}
          alt="SWAPSLUT"
          width={742}
          height={420}
        />
      }
      description="over one hundred rooms involving the fabulous, the sexy, the incredible swap block entity. of course the whole map isn't just the swap block, that'd be kinda boring. map's split into five checkpoints; twenty rooms each. the map starts off beginner, then steps up in difficulty every checkpoint, the final checkpoint being grandmaster."
    />
  );
}

export default SWAPSLUT;
