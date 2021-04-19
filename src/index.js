import React from "react";
import ReactDOM from "react-dom";
import "./styles/index-min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Onboarding from "./pages/Onboarding";

function App() {
  return <Onboarding />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
