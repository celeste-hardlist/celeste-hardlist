import React from "react";
import LevelPage from "../LevelPage.js";

function PaleViolet(props) {
  return (
    <LevelPage
      name={
        <p>
          Pale Violet{" "}
          <span style={{ color: "#f0c231", textDecoration: "underline" }}>
            (Full Clear)
          </span>
        </p>
      }
      mapName="Pale Violet (Full Clear) by Egrym"
      author="Egrym"
      link="https://gamebanana.com/mods/470435"
      image={
        <img
          src={require("../../level-images/pale-violet.jpg")}
          alt="Pale Violet"
          width={742}
          height={420}
        />
      }
      description="Go on a relaxing stroll through the Violet mountains with Madeline in this map made for speed tech enthusiasts. This map is inspired by Smoothee's mauve and is designed to be an introductory experience to this style of gameplay. Tech veterans should still find a good challenge in getting the berries scattered throughout."
    />
  );
}

export default PaleViolet;
