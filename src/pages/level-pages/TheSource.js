import React from "react";
import LevelPage from "../LevelPage.js";

function TheSource(props) {
  return (
    <LevelPage
      name="The Source"
      mapName="The Source by Rafix 01"
      author="Rafix 01"
      link="https://gamebanana.com/mods/464243"
      image={
        <img
          src={require("../../level-images/the-source.jpg")}
          alt="The Source"
          width={742}
          height={420}
        />
      }
      description="It's finally here!! This is my very first and likely the last map that i had the pleasure making, the journey here wasn't easy but after almost 10 months of on and off working on this it's finished.
      I couldn't have done it without some of the fellow modders from celeste discord like Kazt and Zucchini, i can't thank you guys enough, seriously.
      
      The source consists of 10 gameplay rooms, one of which i a pretty sizeable hub, 8 key rooms and a ridiculous finale screen - CHAOS. For the most part i would say this map is mid to high gm with the exception of some rooms that range from low gm+1 to possibly mid or high gm+1.
      If you're not afraid of hard to read maps go ahead and try playing normally but i would for sure recommend using a video otherwise to help with understanding certain screens.
      
      Good luck, have fun and i really hope you'll enjoy what i've put together even if it's not the most appealing visually map in the world."
    />
  );
}

export default TheSource;
