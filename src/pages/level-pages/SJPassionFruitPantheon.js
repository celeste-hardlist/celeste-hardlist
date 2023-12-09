import React from "react";
import LevelPage from "../LevelPage.js";

function SJ_PassionFruitPantheon(props) {
  return (
    <LevelPage
      name={
        <p>
          <span style={{ color: "#ec333c", textDecoration: "underline" }}>
            [Strawberry Jam]
          </span>{" "}
          Passionfruit Pantheon
        </p>
      }
      mapName="[Strawberry Jam] Passionfruit Pantheon by The SJ Team"
      author="The SJ Team"
      link="https://gamebanana.com/mods/424541"
      image={
        <img
          src={require("../../level-images/sj-passionfruit-pantheon.jpg")}
          alt="Passionfruit Pantheon"
        />
      }
      description="description"
    />
  );
}

export default SJ_PassionFruitPantheon;
