import React from "react";
import LevelBox from "../components/LevelBox.js";
import { Link } from "react-router-dom";
export const OneStar = () => {
  return (
    <div className="commonPage" id="levelLink">
      <h1 style={{ textAlign: "center" }}>One Star</h1>
      <h3 style={{ textAlign: "center" }}>
        At least as hard as Darkmoon Ruins, up to Green GM+1. Not ordered by
        difficulty.
      </h3>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          flexBasis: "100%",
          flexWrap: "wrap",
        }}
      >
        <LevelBox
          title="5b_Garbage_Version"
          author="Monika"
          image={
            <img
              src={require("../level-images/5bgv.jpg")}
              alt="5BGV"
            />
          }
        />
        <LevelBox
          title="7D With Single Dash... (Old)"
          author="fishtank_underflow"
          image={<img src={require("../level-images/7d1do.jpg")} alt="7d1do" />}
        />
        <LevelBox
          title="The Big Reveal"
          author="Scraggly1"
          image={
            <img
              src={require("../level-images/the-big-reveal.jpg")}
              alt="The Big Reveal"
            />
          }
        />
        <LevelBox
          title="Forsaken Undercity"
          author="PejaDuos"
          image={
            <img
              src={require("../level-images/forsaken-undercity.jpg")}
              alt="Forsaken Undercity"
            />
          }
        />
        <LevelBox
          title={
            <p>
              hAAAi <span style={{ color: "#f0c231" }}>(Full Clear)</span>
            </p>
          }
          author="Nuwut"
          image={<img src={require("../level-images/haaai.jpg")} alt="hAAAi" />}
        />
        <LevelBox
          title="Mauve"
          author="smoothee"
          image={<img src={require("../level-images/mauve.jpg")} alt="Mauve" />}
        />
        <LevelBox
          title="Moon of the Ultras"
          author="Rifs"
          image={
            <img
              src={require("../level-images/moon-of-the-ultras.jpg")}
              alt="Moon of the Ultras"
            />
          }
        />
        <LevelBox
          title={
            <p>
              Pale Violet <span style={{ color: "#f0c231" }}>(Full Clear)</span>
            </p>
          }
          author="Egrym"
          image={
            <img
              src={require("../level-images/pale-violet.jpg")}
              alt="Pale Violet"
            />
          }
        />
        <LevelBox
          title={
            <p>
              <span style={{ color: "#ec333c" }}>[Strawberry Jam]</span> Pinball
              Purgatory <span style={{ color: "#f0c231" }}>(Full Clear)</span>
            </p>
          }
          author="Maya"
          tooLong={true}
          image={
            <img
              src={require("../level-images/sj-pinball-purgatory.jpg")}
              alt="Pinball Purgatory"
            />
          }
        />
        <LevelBox
          title="Ridge"
          author="smoothee"
          image={<img src={require("../level-images/ridge.jpg")} alt="Ridge" />}
        />
        <LevelBox
          title="Sapphire Dash"
          author="Star Sapphire"
          image={
            <img
              src={require("../level-images/sapphire-dash.jpg")}
              alt="Sapphire Dash"
            />
          }
        />
        <LevelBox
          title="S.B.W.W."
          author="Star_yang"
          image={
            <img src={require("../level-images/sbww.jpg")} alt="S.B.W.W." />
          }
        />
        <LevelBox
          title="Serotonin"
          author="gtfo-"
          image={
            <img
              src={require("../level-images/serotonin.jpg")}
              alt="Serotonin"
            />
          }
        />
        <LevelBox
          title={
            <p>
              <span style={{ color: "#ec333c" }}>[Strawberry Jam]</span> The
              Solar Express{" "}
              <span style={{ color: "#f0c231" }}>(Full Clear)</span>
            </p>
          }
          tooLong={true}
          author="Soloiini"
          image={
            <img
              src={require("../level-images/sj-the-solar-express.jpg")}
              alt="The Solar Express"
            />
          }
        />
        <LevelBox
          title="SWAPSLUT"
          author="tirednwired"
          image={
            <img src={require("../level-images/swapslut.jpg")} alt="SWAPSLUT" />
          }
        />
        <LevelBox
          title="Temple of Bounceleste"
          author="Ezel142"
          image={
            <img
              src={require("../level-images/temple-of-bounceleste.jpg")}
              alt="Temple of Bounceleste"
            />
          }
        />
        <LevelBox
          title={
            <p>
              Vivid Abyss <span style={{ color: "#f0c231" }}>(Full Clear)</span>
            </p>
          }
          author="ABuffZucchini"
          image={
            <img
              src={require("../level-images/vivid-abyss.jpg")}
              alt="Vivid Abyss"
            />
          }
        />
        <LevelBox
          title="Darkmoon Ruins"
          author="Cabob & Ru"
          image={
            <img
              src={require("../level-images/darkmoon-ruins.jpg")}
              alt="Darkmoon Ruins"
            />
          }
        />
      </div>
    </div>
  );
};

export default OneStar;
