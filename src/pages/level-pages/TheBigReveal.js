import React from "react";
import LevelPage from "../LevelPage.js";

function TheBigReveal(props) {
  return (
    <LevelPage
      name="The Big Reveal"
      mapName="The Big Reveal by Scraggly1"
      author="Scraggly1"
      link="https://gamebanana.com/mods/479988"
      image={
        <img
          src={require("../../level-images/the-big-reveal.jpg")}
          alt="The Big Reveal"
          width={742}
          height={420}
        />
      }
      description="My final Celeste map. No collectables. It is time for, all to be... big revealed. 

      Features 25 very difficult rooms! Approximately the difficulty of... Petals of a Lilly, three times! Wow, that sure is difficult."
    />
  );
}

export default TheBigReveal;
