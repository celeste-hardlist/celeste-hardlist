import React from "react";
import LevelPage from "../LevelPage.js";

function SD1DO(props) {
  return (
    <LevelPage
      name="7D With Single Dash... (Old)"
      mapName="7D With Single Dash... (Old) by fishtank_underflow"
      author="fishtank_underflow"
      link="https://gamebanana.com/mods/150350"
      image={
        <img
          src={require("../../level-images/7d1do.jpg")}
          alt="7D With Single Dash... (Old)"
          width={742}
          height={420}
        />
      }
      description="The old version of the map is very difficult. It's mostly grandmaster with a few cracked rooms. And it's longer than 7d.
      This version tells a story of challenging oneself and overcoming seemingly impossible obstacles.
      
      The new version however has been nerfed in both precision and length. It's now mostly expert with a few intermediate rooms.
      This version provides streamlined, polished gameplay and a more casual experience.
      
      Both versions are included in the pack, with chapter 1 being the new version and chapter 2 being the old version. You can use assist mode to unlock chapter 2.
      "
    />
  );
}

export default SD1DO;
