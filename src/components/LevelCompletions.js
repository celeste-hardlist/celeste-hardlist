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
                          <tr
                            style={{
                              backgroundColor:
                                data.type === "fc"
                                  ? "#F8C8DC"
                                  : data.type === "c"
                                  ? "cyan"
                                  : data.type === "nv"
                                  ? "#2DFE54"
                                  :  data.type === "s"
                                  ? "silver"
                                  :  data.type === "s1 s2"
                                  ? "silver"
                                  :  data.type === "g"
                                  ? "#F6BE00"
                                  : "#FFE137"
                            }}
                          >
                            <td style={{ minWidth: "460px" }}>{data.name}</td>
                            <td
                              style={{
                                minWidth: "80px",
                                verticalAlign: "baseline",
                              }}
                            >
                              {data.link &&
                                data.link.map((data) => {
                                  return (
                                    <a href={data} target="_blank" rel="noopener noreferrer">
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
