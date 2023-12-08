import React from "react";
import LevelPage from "../LevelPage.js";

function HorrorVacui(props) {
  return (
    <LevelPage
      name="Horror Vacui"
      mapName="Horror Vacui by Fref"
      author="Fref"
      link="https://gamebanana.com/mods/453193"
      image={
        <img
          src={require("../../level-images/horror-vacui.jpg")}
          alt="Horror Vacui"
          width={742}
          height={420}
        />
      }
      description="This is my first mod! It is set in a claustrophobic environment and it features a few rooms with brief explorations of some cool mechanics.
      Its difficulty should range around GM or above."
    />
  );
}

export default HorrorVacui;
