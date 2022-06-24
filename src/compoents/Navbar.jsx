import React from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Navbar() {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="navbar font-style">
      <div>
        <a href="/" className="nav-logo" onClick={() => settoggle(false)}>
          <h1 className="text-color font-style">Divyansh Dahiya</h1>
        </a>
      </div>
      <div
        className={toggle ? "nav-links-mobile" : "nav-links"}
        onClick={() => settoggle(false)}
      >
        <ul>
          <li className="nav-link">
            <a href="#experience" className="font-style">
              Experience
            </a>
          </li>
          <li className="nav-link">
            <a href="#projects" className="font-style">
              Projects
            </a>
          </li>
          <li className="nav-link">
            <a href="#skill" className="font-style">
              Skills
            </a>
          </li>
          <li className="nav-link">
            <a href="#contact" className="font-style">
              Contact
            </a>
          </li>
          <li className="nav-link">
            <a
              href="https://drive.google.com/file/d/1jp3J3xzsuGAoWGO_C4W3hqzOccrLD5mZ/view?usp=sharing"
              className="font-style"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <button className="mobile-menu-icon" onClick={() => settoggle(!toggle)}>
        {toggle ? <ImCross /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
}

export default Navbar;
