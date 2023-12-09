import React from "react";
import LevelPage from "../LevelPage.js";

function LPL_GDDH(props) {
  return (
    <LevelPage
      name={
        <p>
          <span style={{ color: "#f19912", textDecoration: "underline" }}>
            [LPL Collab]
          </span>{" "}
          GDDH
        </p>
      }
      mapName="[LPL Collab] GDDH by Star Sapphire"
      author="Star Sapphire"
      link="https://gamebanana.com/mods/455644"
      image={
        <img
          src={require("../../level-images/lpl-gddh.jpg")}
          alt="GDDH"
        />
      }
      description="The LPL Collab 2022 is a meme collab that took a year to make by many producers. it's a terrible collab but you can probably feel the joy in it? If you're confused about the content of this collab, in that way you will be confused."
    />
  );
}

export default LPL_GDDH;
