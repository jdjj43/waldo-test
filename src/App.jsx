import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetWaldoPosition from "./components/GetWaldoPosition";
import WaldoGame from "./components/WaldoGame";

function App() {
  const waldoPosition = { x: 27.2, y: 50.1 };
  const waldoSize = { width: 1.5, height: 1.5 };
  const multiPosition = [
    { x: 27.2, y: 50.1, width: 1.5, height: 1.5 },
    { x: 68.03, y: 68.28, width: 1.5, height: 3 },
    { x: 60.76, y: 35.75, width: 1.5, height: 4 },
    { x: 9.82, y: 34.20, width: 1.5, height: 3},
    // TODO: poner otros con gorro de waldo
  ];
  return (
    <>
      <WaldoGame img="mock.jpg" positionSize={multiPosition}></WaldoGame>
    </>
  );
}

export default App;
