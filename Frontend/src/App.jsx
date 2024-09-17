import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ImageSlider from './components/imageSlider/ImageSlider.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/slider" element={<ImageSlider/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
