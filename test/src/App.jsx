import React from "react";
import TextProvider from "./context/TextContext";
import TextForm from "./components/TextForm";
import TextList from "./components/TextList";

const App = () => {
  return (
    <TextProvider>
      <div style={{ padding: "20px" }}>
        <h1>Gestion des textes</h1>
        <TextForm />
        <hr />
        <TextList />
      </div>
    </TextProvider>
  );
};

export default App;