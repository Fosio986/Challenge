import './App.css'
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Multi-Counter</h1>
      <Counter increment={1} />
      <Counter increment={2} />
    </div>
  );
}

export default App;