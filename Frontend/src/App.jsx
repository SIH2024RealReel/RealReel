import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ImageSlider from './components/imageSlider/ImageSlider.jsx'
import AboutUs from './components/Aboutus/aboutUs.jsx'
function App() {
  return (
    <AboutUs />
  );
}

export default App;
