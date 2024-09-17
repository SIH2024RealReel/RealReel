import React from "react";
import "./Footer.css";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
function Footer() {
  return (
    <div className="footer">
      <h2 id="footer-title">RealReel</h2>
      <h3>See through the fake, with AI keeping you awake</h3>
      <div className="footer_icons flex">
        <TiSocialFacebook className="socialIcons" />
        <TiSocialInstagram className="socialIcons" />
        <TiSocialTwitter className="socialIcons" />
        <TiSocialGithub className="socialIcons" />
        <TiSocialLinkedin className="socialIcons" />
      </div>
      <p>Copyright &#169; All Rights Reserved RealReel 2024.</p>
    </div>
  );
}

export default Footer;
