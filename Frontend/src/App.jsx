import { React, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ImageSlider from "./components/imageSlider/ImageSlider.jsx";
import FileUploadComponent from "./components/upload/UploadComponent";
import NavbarComponent from "./components/navbar/NavbarComponent";

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
