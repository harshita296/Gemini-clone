import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from "./Context/Context.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx"; // ✅ import ThemeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>
);
