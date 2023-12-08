import React from "react";
import LevelPage from "../LevelPage.js";

function AvianAscension(props) {
  return (
    <LevelPage
      name="Avian Ascension"
      mapName="Avian Ascension by Parrot Dash"
      author="Parrot Dash"
      link="https://gamebanana.com/mods/379726"
      image={
        <img
          src={require("../../level-images/avian-ascension.jpg")}
          alt="Avian Ascension"
          width={742}
          height={420}
        />
      }
      description="Here we go, after working on this around (or sometimes even on) streams for the last month or so, its finally finished! I am actually really happy with how this turned out so I hope you will enjoy.

      This map was originally a single screen inspired by 2.5k-3 in D1D7 but with the idea to make it much more polished and more like an actual map. This later turned into much more though and has now become its own full 7 room map containing a lot of unique and challenging gameplay. If you decide to clear this I do really recommend making use of the conveniently placed debug spawn points or save states to practice the rooms. I will also publish a clear video on the map that I would also recommend taking a look at if you ever get stuck. Though if you really dont wanna do any of that I wont stop you, I would just not recommend it.
      
      This map is for sure above gm in difficulty (GM+) and requires quite a lot of game knowledge so be prepared for a serious challenge."
    />
  );
}

export default AvianAscension;
