import React from "react";
import BackgroundGradient from "../BackgroundGradient/BackgroundGradient";
import Footer from "../footer/Footer";
import TypeWriterTitle from "../TypeWriterTitle/TypeWriterTitle";
import "./LandingPage.css"; 
import NavbarComponent from "../navbar/NavbarComponent";
import { FileUpload } from "../FileUpload/FileUpload";
import Newsletter from "../Newsletter/Newsletter";

function LandingPage() {
  const words = [
    {
      text: "See through the fake, with AI keeping you awake.",
      className: "some-classname",
    },
  ];
  return (
    <>
      <NavbarComponent />
      <div className="landing-page-container">
        <BackgroundGradient className="background-gradient" />
        <div className="title-container">
          <TypeWriterTitle
            words={words} 
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
export default LandingPage;