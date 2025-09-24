import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </StrictMode>
);
