import React from "react";
import LevelPage from "../LevelPage.js";

function Haaai(props) {
  return (
    <LevelPage
      name={
        <p>
          hAAAi{" "}
          <span style={{ color: "#f0c231", textDecoration: "underline" }}>
            (Full Clear)
          </span>
        </p>
      }
      mapName="hAAAi (Full Clear) by Nuwut"
      author="nuwut"
      link="https://gamebanana.com/mods/470947"
      image={
        <img
          src={require("../../level-images/haaai.jpg")}
          alt="hAAAi"
        />
      }
      description="A girl stuck in mountain caverns. Unable to die, so always moving forwards. 
      A wish to get stuck in ones mind to run from reality."
    />
  );
}

export default Haaai;
