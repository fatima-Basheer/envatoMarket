import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Stairs from "./components/Stairs.jsx";
import { useState } from "react";
import "./index.css";
import App from "./App.jsx";
import Mode from "./components/Mode.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Stairs>
      <App />
    </Stairs>
  </StrictMode>,
);
