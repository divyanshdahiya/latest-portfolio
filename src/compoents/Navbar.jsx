import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar font-style">
      <div>
        <h1 className="text-color font-style">Divyansh Dahiya</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#experience" className="font-style">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="font-style">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="font-style">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="font-style">
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" className="font-style">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
