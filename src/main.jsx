import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/LaCometa">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
