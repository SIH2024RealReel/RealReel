import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/footer/Footer'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ImageSlider from './components/imageSlider/ImageSlider.jsx'
import FileUploadComponent from './components/upload/UploadComponent'
import NavbarComponent from './components/navbar/NavbarComponent'

function App() {
  return (
    <div>
      <NavbarComponent />
      <FileUploadComponent />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
