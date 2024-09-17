import React from "react";
import BackgroundGradient from "../BackgroundGradient/BackgroundGradient";
import Footer from "../footer/Footer";
import TypeWriterTitle from "../TypeWriterTitle/TypeWriterTitle";
import "./LandingPage.css"; // Import your CSS file
// import UploadComponent from "../upload/UploadComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import { FileUpload } from "../FileUpload/FileUpload";
import Newsletter from "../Newsletter/Newsletter";

export default function LandingPage() {
  // Define the words array here
  const words = [
    {
      text: "See through the fake, with AI keeping you awake.",
      className: "some-classname",
    },
    // Add more words or customize class names if needed
  ];
  return (
    <>
      <NavbarComponent />
      <div className="landing-page-container">
        <BackgroundGradient className="background-gradient" />
        <div className="title-container">
          <TypeWriterTitle
            words={words} // Pass the words array correctly here
            className="my-custom-class"
            cursorClassName="my-cursor-class"
          />
        </div>
      </div>
      <FileUpload />
      <Newsletter />
    </>
  );
}
