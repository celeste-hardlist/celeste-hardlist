import React from "react";
import { Link } from "react-router-dom";
import LevelsPageBox from "../components/LevelsPageBox";

export const Home = () => {
  const minColor1 = "#89cff0";
  const maxColor1 = "#8577c5";
  return (
    <div className="commonPage">
      <h1 style={{ fontSize: "5rem" }}>Celeste Hardest Map Clear List</h1>
      <h2>A collection of the hardest maps and map clears in Celeste</h2>
      <br />
      <div id="levelLink">
      <table id="homeTable" style={{ margin: "auto" }}>
        <tr style={{ width: "100vw" }}>
          <td style={{ width: "30vw" }}>
            <Link to="/three-star">
              <LevelsPageBox
                title="3 Star"
                description="The hardest of the Hard List. GM+2 or harder."
                color={`linear-gradient(to bottom right, ${minColor1} , ${maxColor1})`}
              />
            </Link>
          </td>
          <td style={{ width: "30vw" }}>
            <Link to="/two-star">
              <LevelsPageBox
                title="2 Star"
                description="Harder than Green GM+1, up to Red GM+1."
                color={`linear-gradient(to bottom right, ${minColor1} , ${maxColor1})`}
              />
            </Link>
          </td>
          <td style={{ width: "30vw" }}>
            <Link to="/one-star">
              <LevelsPageBox
                title="1 Star"
                description="At least as hard as Darkmoon Ruins, up to Green GM+1."
                color={`linear-gradient(to bottom right, ${minColor1} , ${maxColor1})`}
              />
            </Link>
          </td>
        </tr>
      </table>
      </div>
    </div>
  );
};

export default Home;
