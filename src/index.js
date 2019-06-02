import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import FaqSection from "./faqSection";

function App() {
  return (
    <div className="App container">
      <FaqSection />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
