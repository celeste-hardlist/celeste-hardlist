import React from "react";
import LevelPage from "../LevelPage.js";

function MoonOfTheUltras(props) {
  return (
    <LevelPage
      name="Moon of the Ultras"
      mapName="Moon of the Ultras by Rifs"
      author="Rifs"
      link="https://gamebanana.com/mods/365379"
      image={
        <img
          src={require("../../level-images/moon-of-the-ultras.jpg")}
          alt="Moon of the Ultras"
          width={742}
          height={420}
        />
      }
      description="A map finished around 1 year ago. It's a bit long, maybe not so consistent or lenient, and I must say flag 2 is annoying. But I really have put a lot of effort in the whole map. I hope you could enjoy it and have a delightful (suffering) day.
      I have been making a new version of motu, but since I entered senior high I've had poor time to map, so the progress builds slowly.
      I might remake this when possible, and it takes time. So please wait (zzzzzz). 
      
      Maybe things aren't that bad."
    />
  );
}

export default MoonOfTheUltras;
