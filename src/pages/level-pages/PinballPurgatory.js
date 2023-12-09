import React from "react";
import LevelPage from "../LevelPage.js";

function PinballPurgatory(props) {
  return (
    <LevelPage
      name={
        <p>
          <span style={{ color: "#ec333c", textDecoration: "underline" }}>
            [Strawberry Jam]
          </span>{" "}
          Pinball Purgatory{" "}
          <span style={{ color: "#f0c231", textDecoration: "underline" }}>
            (Full Clear)
          </span>
        </p>
      }
      mapName="[Strawberry Jam] Pinball Purgatory (Full Clear) by Maya"
      author="Maya"
      link="https://gamebanana.com/mods/424541"
      image={
        <img
          src={require("../../level-images/sj-pinball-purgatory.jpg")}
          alt="Pinball Purgatory"
        />
      }
      description="Description"
    />
  );
}

export default PinballPurgatory;
