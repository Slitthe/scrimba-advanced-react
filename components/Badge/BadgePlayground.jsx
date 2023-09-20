import React from "react";
import Badge from "./index";

const colorOptions = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

export default function BadgePlayground() {
  return (
    <>
      <h2>Badge</h2>

      <div style={{ marginLeft: 16 }}>
        <div>
          Pill:
          {colorOptions.map((color) => {
            return (
              <span style={{ margin: 4 }}>
                <Badge type="pill" color={color}>
                  {color}
                </Badge>
              </span>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          Box:
          {colorOptions.map((color) => {
            return (
              <span style={{ margin: 4 }}>
                <Badge color={color}>{color}</Badge>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
