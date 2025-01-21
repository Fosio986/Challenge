import './App.css'
import React from "react";
import CyclicCounter from "./CyclicCounter";
import BinaryCounter from "./BinaryCounter";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Multi-Counter</h1>

      {/* Compteur cyclique avec une valeur maximale de 5 */}
      <CyclicCounter increment={1} maxValue={5} />

      {/* Compteur binaire avec 4 bits */}
      <BinaryCounter increment={1} bitLength={4} />
    </div>
  );
}

export default App;