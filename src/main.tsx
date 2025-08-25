import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      {/*  scrolls to top on redirect */}
      <ScrollToTop />
      <div className="h-screen overflow-auto" id="scroll-container">
        <AppRoutes />
      </div>
    </Router>
  </StrictMode>
);
