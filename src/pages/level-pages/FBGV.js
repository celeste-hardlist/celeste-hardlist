import React from "react";
import LevelPage from "../LevelPage.js";

function FBGV(props) {
  return (
    <LevelPage
      name="5b_Garbage_Version"
      mapName="5b_Garbage_Version by Monika"
      author="Monika"
      link="https://discord.com/channels/403698615446536203/455088502548463627/638064624482385970"
      image={
        <img
          src={require("../../level-images/5bgv.jpg")}
          alt="5BGV"
        />
      }
      description="description"
    />
  );
}

export default FBGV;
