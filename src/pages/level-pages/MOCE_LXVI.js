import React from "react";
import LevelPage from "../LevelPage.js";

function MOCE_LXVI(props) {
  return (
    <LevelPage
      name="MOCE // LXVI"
      mapName="MOCE // LXVI by issy"
      author="issy"
      link="https://gamebanana.com/mods/409812"
      image={
        <img
          src={require("../../level-images/moce-lxvi.jpg")}
          alt="MOCE-LXVI"
          width={742}
          height={420}
        />
      }
      description="its really finished! i started working on the second chapter nearly 5 months ago, and here it is, finally seeing the light of day"
    />
  );
}

export default MOCE_LXVI;
