import { React, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./components/Aboutus/AboutUs";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Loader from "./components/Loader/Loader";
function App() {
  const loadingStates = [
    { text: "Extracting Frames" },
    { text: "Feeding Frames to the Machine Learining Model" },
    { text: "Analyzing Frames" },
    { text: "Generating Report" },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
