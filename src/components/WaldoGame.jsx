import React, { useState } from "react";

const WaldoGame = ({ img, positionSize }) => {
  const [selectedArea, setSelectedArea] = useState();

  const getClickPosition = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    // console.log(x, y);

    positionSize.map((char) => {
      if (
        x >= char.x &&
        x <= char.x + char.width &&
        y >= char.y &&
        y <= char.y + char.height
      ) {
        console.log("You found 1");
      }
    });
  };

  const getCoords = (e) => {
    const rect = e.target.getBoundingClientRect();
    console.log(rect);
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    console.log(x, y);
    setSelectedArea(
      <div
        style={{
          position: "absolute",
          left: `${x}%`,
          top: `${y}%`,
          width: `1.5%`,
          height: `3%`,
          border: "2px solid red",
          pointerEvents: "none",
        }}
      ></div>
    );

    // 68.03169998118351 68.2881326317736 1.5, 3
  };

  return (
    <>
      <div style={{ position: "relative", display: "inline-block"}}>
        <img
          src={img}
          style={{ width: "auto", maxHeight: "auto", cursor: "pointer" }}
          onClick={(e) => {
            getClickPosition(e);
            getCoords(e);  
          }}
        />
        {positionSize.map((char, i) => (
          <div key={i}
            style={{
              position: "absolute",
              left: `${char.x}%`,
              top: `${char.y}%`,
              width: `${char.width}%`,
              height: `${char.height}%`,
              border: "2px solid red",
              pointerEvents: "none",
            }}
          ></div>
        ))}
        {setSelectedArea ? selectedArea : null}
      </div>
    </>
  );
};

export default WaldoGame;
