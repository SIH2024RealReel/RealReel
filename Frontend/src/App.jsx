import { React, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/footer/Footer";
import BackgroundGradient from "./components/BackgroundGradient/BackgroundGradient";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/footer" element={<Footer></Footer>} />
        <Route path="/bg" element={<BackgroundGradient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
