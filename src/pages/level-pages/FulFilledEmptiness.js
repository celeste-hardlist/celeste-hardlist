import React from "react";
import LevelPage from "../LevelPage.js";

function FulFilledEmptiness(props) {
  return (
    <LevelPage
      name="118.71% FulFilled Emptiness"
      mapName={"118.71% FulFilled Emptiness\nby Isanc"}
      author="Isanc"
      link="https://gamebanana.com/mods/401004"
      image={
        <img
          src={require("../../level-images/11871-fulfilled-emptiness.jpg")}
          alt="118.71% FulFilled Emptiness"
        />
      }
      description='Before you step into the boundless snow at the pace of "despair",read this first.
      Then observe,with closed eyes.
      
      So,this is not a well-made map, which includes 10 scREens of unfair no dash gameplay. various techniques from coffee jump to ceiling pop are commonly used.
      This map is madE foR...actually,nothing, just on a whelm.
      I do not recommend playing thiS but if you are just going to do, then, hopE you have fun.
      
      ...or not.I do not really care lmao'
    />
  );
}

export default FulFilledEmptiness;
