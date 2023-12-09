import React from "react";
import { Link } from "react-router-dom";
import LevelsPageBox from "../components/LevelsPageBox";

export const Home = () => {
  const minColor1 = "#FF5F6D";
  const maxColor1 = "#FFC371";
  const minColor2 = "#11998E";
  const maxColor2 = "#38EF7D";
  const minColor3 = "#EA8D8D";
  const maxColor3 = "#A890FE";

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
                  image="⭐⭐⭐"
                  title="3 Star"
                  description="The hardest of the Hard List. GM+2 or harder."
                  color={`linear-gradient(to bottom right, ${minColor1} , ${maxColor1})`}
                />
              </Link>
            </td>
            <td style={{ width: "30vw" }}>
              <Link to="/two-star">
                <LevelsPageBox
                  image="⭐⭐"
                  title="2 Star"
                  description="Harder than Green GM+1, up to Red GM+1."
                  color={`linear-gradient(to bottom right, ${minColor2} , ${maxColor2})`}
                />
              </Link>
            </td>
            <td style={{ width: "30vw" }}>
              <Link to="/one-star">
                <LevelsPageBox
                  image="⭐"
                  title="1 Star"
                  description="At least as hard as Darkmoon Ruins, up to Green GM+1."
                  color={`linear-gradient(to bottom right, ${minColor3} , ${maxColor3})`}
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
