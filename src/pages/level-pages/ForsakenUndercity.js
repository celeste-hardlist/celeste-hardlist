import React from "react";
import LevelPage from "../LevelPage.js";

function ForsakenUndercity(props) {
  return (
    <LevelPage
      name="Forsaken Undercity"
      mapName="Forsaken Undercity by PejaDuos"
      author="PejaDuos"
      link="https://gamebanana.com/mods/463673"
      image={
        <img
          src={require("../../level-images/forsaken-undercity.jpg")}
          alt="Forsaken Undercity"
          width={742}
          height={420}
        />
      }
      description="Have you ever wondered what will happen if you turn the wrong way in the first chapter? To what depths will the old abandoned tunnel under the Celeste mountain lead? 

      This map is inspired by moce//cpvl, but in my vision of this gameplay."
    />
  );
}

export default ForsakenUndercity;
