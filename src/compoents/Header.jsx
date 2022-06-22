import React from "react";
import "../styles/header.css";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

function Header() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../astronaut.json"),
    });
  }, []);

  return (
    <div className="header container">
      <div className="header-item">
        <h1>Hello. I’m Divyansh</h1>
        <p>
          A Full-Stack Web Developer & Open Source Contributor.I like to build
          things for web and solving problems.
        </p>
      </div>
      <div>
        <div className="container" ref={container}></div>
      </div>
    </div>
  );
}

export default Header;
