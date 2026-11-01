import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
console.log(
  "%cCMYORA%c — Developed by Raunak Singh Negi\n%cGithub: https://github.com/Raunak-Singh-Negi",
  "color: #c6a77d; font-size: 16px; font-weight: 600; letter-spacing: 2px;",
  "color: #f5f0e8; font-size: 12px;",
  "color: #c6a77d; font-size: 11px;"
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);