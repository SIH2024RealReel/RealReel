import React, { useState } from 'react';
import './NavbarComponent.css';

const NavComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={darkMode ? 'navbar dark-mode' : 'navbar'}>
      <div className="navbar-container">
        <div className="logo">RealReel</div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/aboutus" className="nav-link">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
