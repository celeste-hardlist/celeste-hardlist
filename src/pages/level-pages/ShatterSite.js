import React from "react";
import LevelPage from "../LevelPage.js";

function ShatterSite(props) {
  return (
    <LevelPage
      name="Shatter Site"
      mapName="Shatter Site by AstralightSky"
      author="AstralightSky"
      link="https://gamebanana.com/mods/413299"
      image={
        <img
          src={require("../../level-images/shatter-site.jpg")}
          alt="Shatter Site"
        />
      }
      description="A relatively short dashless map I started just over a week ago.
      WARNING: This map was not made to be good, it was just made because making this type of gameplay was fun for me. It will be a painful experience. Don't try this unless you're really sure you want to. If you still want to play this, then go do 118.71% Fulfilled Emptiness instead because I can guarantee you it will be much more fun.
      
      I originally made the first room of this map as a joke because I am nowhere near skilled enough to complete a map like this, but people didn't trash on it too much so I decided to turn it into an actual map."
    />
  );
}

export default ShatterSite;
