import React from "react";
import LevelPage from "../LevelPage.js";

function VividAbyss(props) {
  return (
    <LevelPage
      name={
        <p>
          Vivid Abyss{" "}
          <span style={{ color: "#f0c231", textDecoration: "underline" }}>
            (Full Clear)
          </span>
        </p>
      }
      mapName="Vivid Abyss (Full Clear) by ABuffZucchini"
      author="ABuffZucchini"
      link="https://gamebanana.com/mods/398155"
      image={
        <img
          src={require("../../level-images/vivid-abyss.jpg")}
          alt="VividAbyss"
          width={742}
          height={420}
        />
      }
      description="Vivid Abyss has been a passion project of mine for over three months now, and it's an amazing feeling to finally have it done. It's my longest map yet, and also among the hardest."
    />
  );
}

export default VividAbyss;
