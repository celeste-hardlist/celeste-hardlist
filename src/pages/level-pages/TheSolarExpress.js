import React from "react";
import LevelPage from "../LevelPage.js";

function TheSolarExpress(props) {
  return (
    <LevelPage
      name={
        <p>
          <span style={{ color: "#ec333c", textDecoration: "underline" }}>
            [Strawberry Jam]
          </span>{" "}
          The Solar Express{" "}
          <span style={{ color: "#f0c231", textDecoration: "underline" }}>
            (Full Clear)
          </span>
        </p>
      }
      mapName="[Strawberry Jam] The Solar Express (Full Clear) by Soloiini"
      author="Soloiini"
      link="https://gamebanana.com/mods/424541"
      image={
        <img
          src={require("../../level-images/sj-the-solar-express.jpg")}
          alt="The Solar Express"
        />
      }
      description="Description"
    />
  );
}

export default TheSolarExpress;
