import React from "react";
import LevelPage from "../LevelPage.js";

function D1D7(props) {
  return (
    <LevelPage
      name="D1D7"
      mapName="D1D7 by TheMathGuy"
      author="TheMathGuy"
      link="https://gamebanana.com/mods/286934"
      image={
        <img
          src={require("../../level-images/d1d7.jpg")}
          alt="D1D7"
          width={742}
          height={420}
        />
      }
      description="I've always wanted to make an etselec map of 7d1d. This is it. I started this map around half a year ago, and here it is. This map doesn't really follow the etselec map type. In this map, I tried to add or change the least amount of things to make it possible backwards. This means there are intended spike jumps and demos and etc. Anyways, this map is way too hard to ever be beaten normally or really even with savestates. If you do play this map, do it with savestates because it's basically impossible without them. I wouldn't recommend playing this though as it is less of a map and more of an expirement. Hopefully I'll return and make something original for once lmao. The chance of beating this map is about the same chance beating my other map (although I have beaten this map with savestates so I know its possible). It's also recommended to play 7d1d if you actually want to play this map lol."
    />
  );
}

export default D1D7;
