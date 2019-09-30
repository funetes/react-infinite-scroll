import React from "react";
import ReactDOM from "react-dom";
import Contents from "./Contents";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>infinite scroll</h1>
      <Contents />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
