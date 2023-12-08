import React from "react";
import CompletionData from "../scanner/completions.json";

function LevelCompletions(props) {
  return (
    <div>
      {CompletionData &&
        CompletionData.data.map((data) => {
          return (
            <div>
              {data.mapName === props.mapName ? (
                <div id="scrollBox">
                  {data.completions &&
                    data.completions.map((data) => {
                      return (
                        <div style={{ fontSize: "25px", width: "150px" }}>
                          <tr>
                            <td style={{minWidth: "300px"}}>{data.name}</td>
                            <td style={{minWidth: "60px"}}>{data.type}</td>
                            <td style={{minWidth: "80px"}}>
                              {data.link &&
                                data.link.map((data) => {
                                  return (
                                    <a href={data}>
                                      <img
                                        src={require("../level-images/link.png")}
                                        alt="Link"
                                      />
                                    </a>
                                  );
                                })}
                            </td>
                          </tr>
                        </div>
                      );
                    })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
    </div>
  );
}

export default LevelCompletions;
