import React from "react";
import LevelPage from "../LevelPage.js";

function DragonfruitDemise(props) {
  return (
    <LevelPage
      name="Dragonfruit Demise"
      mapName="Dragonfruit Demise by #mapping-grandmaster"
      author="#mapping-grandmaster"
      link="https://discord.com/channels/403698615446536203/449297822827937795/1120600604432142376"
      image={
        <img
          src={require("../../level-images/dragonfruit-demise.jpg")}
          alt="Dragonfruit Demise"
          width={742}
          height={420}
        />
      }
      description="by various people in strawberry jam"
    />
  );
}

export default DragonfruitDemise;
