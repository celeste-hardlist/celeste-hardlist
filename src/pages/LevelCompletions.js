import React, { useState, useEffect } from "react";
import myData from '../scanner/completions.json';

function LevelCompletions() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("../../scanner/completions.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data && data.length > 0 && data.map((item) => <p>{item.about}</p>)}
    </div>
  );
}

export default LevelCompletions;