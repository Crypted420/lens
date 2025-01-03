import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "./components/web3provider.jsx";
import Gallery from "./components/Gallery.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Web3Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </Web3Provider>
  </StrictMode>
);
