import React from "react";
import LevelPage from "../LevelPage.js";

function TempleOfBounceleste(props) {
  return (
    <LevelPage
      name="Temple of Bounceleste"
      mapName="Temple of Bounceleste by Ezel142"
      author="Ezel142"
      link="https://gamebanana.com/mods/419887"
      image={
        <img
          src={require("../../level-images/temple-of-bounceleste.jpg")}
          alt="Temple of Bounceleste"
          width={742}
          height={420}
        />
      }
      description='Temple of Bounceleste is a custom map that started as a silly joke, with me saying "what if someone made a Bounce Helper map, but it is grandmaster", and around February I thought about this, and started messing around. Ended up having a lot of fun experimenting, and the whole project took over 10 months to create, so hopefully you will be able to enjoy it despite its rather niche and more unhinged style, compared to most of my maps.'
    />
  );
}

export default TempleOfBounceleste;
