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
        <Link to="/2000s-housing-crisis">
          <LevelBox
            title="The 2000's American Housing Crisis"
            author="jimmyclyde"
            tooLong={true}
            image={
              <img
                src={require("../level-images/2000s-housing-crisis.jpg")}
                alt="The 2000's American Housing Crisis"
              />
            }
          />
        </Link>
        <Link to="/5bgv">
          <LevelBox
            title="5b_Garbage_Version"
            author="Monika"
            image={<img src={require("../level-images/5bgv.jpg")} alt="5BGV" />}
          />
        </Link>
        <Link to="/7d1do">
          <LevelBox
            title="7D With Single Dash... (Old)"
            author="fishtank_underflow"
            image={
              <img src={require("../level-images/7d1do.jpg")} alt="7d1do" />
            }
          />
        </Link>
        <Link to="/the-big-reveal">
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
        </Link>
        <Link to="/forsaken-undercity">
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
        </Link>
        <Link to="/haaai">
          <LevelBox
            title={
              <p>
                hAAAi <span style={{ color: "#f0c231" }}>(Full Clear)</span>
              </p>
            }
            author="Nuwut"
            image={
              <img src={require("../level-images/haaai.jpg")} alt="hAAAi" />
            }
          />
        </Link>
        <Link to="/mauve">
          <LevelBox
            title="Mauve"
            author="smoothee"
            image={
              <img src={require("../level-images/mauve.jpg")} alt="Mauve" />
            }
          />
        </Link>
        <Link to="/moon-of-the-ultras">
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
        </Link>
        <Link to="/pale-violet">
          <LevelBox
            title={
              <p>
                Pale Violet{" "}
                <span style={{ color: "#f0c231" }}>(Full Clear)</span>
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
        </Link>
        <Link to="/sj-pinball-purgatory">
          <LevelBox
            title={
              <p>
                <span style={{ color: "#ec333c" }}>[Strawberry Jam]</span>{" "}
                Pinball Purgatory{" "}
                <span style={{ color: "#f0c231" }}>(Full Clear)</span>
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
        </Link>
        <Link to="/ridge">
          <LevelBox
            title="Ridge"
            author="smoothee"
            image={
              <img src={require("../level-images/ridge.jpg")} alt="Ridge" />
            }
          />
        </Link>
        <Link to="/sapphire-dash">
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
        </Link>
        <Link to="/sbww">
          <LevelBox
            title="S.B.W.W."
            author="Star_yang"
            image={
              <img src={require("../level-images/sbww.jpg")} alt="S.B.W.W." />
            }
          />
        </Link>
        <Link to="/serotonin">
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
        </Link>
        <Link to="/the-solar-express">
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
        </Link>
        <Link to="/swapslut">
          <LevelBox
            title="SWAPSLUT"
            author="tirednwired"
            image={
              <img
                src={require("../level-images/swapslut.jpg")}
                alt="SWAPSLUT"
              />
            }
          />
        </Link>
        <Link to="/temple-of-bounceleste">
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
        </Link>
        <Link to="/vivid-abyss">
          <LevelBox
            title={
              <p>
                Vivid Abyss{" "}
                <span style={{ color: "#f0c231" }}>(Full Clear)</span>
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
        </Link>
        <Link to="/the-white-hole">
          <LevelBox
            title={
              <p>
                The White Hole
              </p>
            }
            author="ZKB"
            image={
              <img
                src={require("../level-images/the-white-hole.jpg")}
                alt="The White Hole"
              />
            }
          />
        </Link>
        <Link to="/darkmoon-ruins">
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
        </Link>
      </div>
    </div>
  );
};

export default OneStar;
