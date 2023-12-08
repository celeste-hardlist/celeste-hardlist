import React from "react";
import LevelPage from "../LevelPage.js";

function Ridge(props) {
  return (
    <LevelPage
      name="Ridge"
      mapName="Ridge by smoothee"
      author="smoothee"
      link="https://gamebanana.com/mods/466796"
      image={
        <img
          src={require("../../level-images/ridge.jpg")}
          alt="Ridge"
          width={742}
          height={420}
        />
      }
      description="This mod is not for everyone. It is a movement puzzle map that contains some very strange movement and is intentionally designed to hide the intended path. Some of the movements are very dense and precise. However, if you are attempting this map blind, keep in mind that the easiest solutions are almost never the obvious ones. It is possible to brute force some parts of the map by doing frame perfect overhangs or other spike tech, but this is never required."
    />
  );
}

export default Ridge;
