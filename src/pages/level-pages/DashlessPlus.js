import React from "react";
import LevelPage from "../LevelPage.js";

function DashlessPlus(props) {
  return (
    <LevelPage
      name="Dashless+"
      author="Alex21"
      link="https://gamebanana.com/mods/430430"
      image={
        <img
          src={require("../../level-images/dashless-plus.jpg")}
          alt="Dashless+"
          width={742} 
          height={420}
        />
      }
      description="Hello, this is Dashless+ if you have not heard of it already. At the current moment it is the hardest cleared Celeste map and you guessed it, it's a 1A Dashless Remake. But there's a little more to it, with tons of added deco, unique (ish) jumps (for dashless) (compared to other hard list dashless maps) (with few entities) (in 1A theming) plus an additional checkpoint of original gameplay. Includes some goofy dialogue, and lua cutscenes as well! I spent quite a while trying to make it at least playable to some people and it has come a long long long way since the 1A Spiky but Spikier but with even more spikes that it was last April. Massive shoutouts to Dan for spending 96 Hours being the first clear of this map and many others for helping along the way. And Good Luck!"
    />
  );
}

export default DashlessPlus;
