import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
          <h1>SocialApp</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-connect">
        <a href="#login" className="p__opensans">
          Connect Your Socials
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
