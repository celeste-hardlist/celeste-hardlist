import React from "react";
import LevelBox from "../components/LevelBox.js"

export const TwoStar = () => {
  return (
    <div className="commonPage">
      <h1 style={{ textAlign: "center" }}>Two Star</h1>
      <h3 style={{ textAlign: "center" }}>
        The middle tier of the Hard List. Harder than Green GM+1, up to Red GM+1.
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
          title="Avian Ascension"
          author="Parrot Dash"
          image={
            <img
              src={require("../level-images/avian-ascension.jpg")}
              alt="Avian Ascension"
            />
          }
        />
        <LevelBox
          title="Mature Grape+"
          author="SPLOwON"
          image={
            <img
              src={require("../level-images/mature-grape-plus.jpg")}
              alt="Mature Grape+"
            />
          }
        />
        <LevelBox
          title={<p><span style={{color: "#f19912"}}>[LPL Collab]</span> GDDH</p>}
          author="Star Sapphire"
          image={
            <img
              src={require("../level-images/lpl-gddh.jpg")}
              alt="[LPL Collab] GDDH"
            />
          }
        />
        <LevelBox
          title="The Source"
          author="Rafix 01"
          image={
            <img
              src={require("../level-images/the-source.jpg")}
              alt="The Source"
            />
          }
        />
        <LevelBox
          title="Shatter Site"
          author="AstralightSky"
          image={
            <img
              src={require("../level-images/shatter-site.jpg")}
              alt="Shatter Site"
            />
          }
        />
        <LevelBox
          title="MOCE // CPVL"
          author="issy"
          image={
            <img
              src={require("../level-images/moce-cpvl.jpg")}
              alt="MOCE // CPVL"
            />
          }
        />
        <LevelBox
          title={<p><span style={{color: "#ec333c"}}>[Strawberry Jam]</span> Passionfruit Pantheon</p>}
          author="The SJ Team"
          tooLong={true}
          image={
            <img
              src={require("../level-images/sj-passionfruit-pantheon.jpg")}
              alt="[Strawberry Jam] Passionfruit Pantheon"
            />
          }
        />
        <LevelBox
          title="CMgv"
          author="TheMathGuy"
          image={
            <img
              src={require("../level-images/cmgv.jpg")}
              alt="CMgv"
            />
          }
        />
        <LevelBox
          title="Horror Vacui"
          author="Fref"
          image={
            <img
              src={require("../level-images/horror-vacui.jpg")}
              alt="Horror Vacui"
            />
          }
        />
        <LevelBox
          title="118.71% Fulfilled Emptiness"
          author="Isanc"
          image={
            <img
              src={require("../level-images/11871-fulfilled-emptiness.jpg")}
              alt="118.71% Fulfilled Emptiness"
            />
          }
        />
        <LevelBox
          title="Magnetic Dawn (B-Side)"
          author="Firethief1"
          image={
            <img
              src={require("../level-images/magnetic-dawn-b-side.jpg")}
              alt="Magnetic Dawn (B-Side)"
            />
          }
        />
      </div>
    </div>
  );
};

export default TwoStar;