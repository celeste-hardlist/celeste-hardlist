import React from "react";
import LevelPage from "../LevelPage.js";

function SBWW(props) {
  return (
    <LevelPage
      name="S.B.W.W."
      mapName="S.B.W.W. by Star_yang"
      author="Star_yang"
      link="https://gamebanana.com/mods/424290"
      image={
        <img
          src={require("../../level-images/sbww.jpg")}
          alt="S.B.W.W."
          width={742}
          height={420}
        />
      }
      description="This is my first map, with 10 gm rooms and a puzzle room with moonberry.
      Hope u enjoy :)"
    />
  );
}

export default SBWW;
