import React from "react";
import "../styles/header.css";
import lottie from "lottie-web";
import astronautLogo from "../astronaut.json";

function Header() {
  React.useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#astronaut-logo"),
      animationData: astronautLogo,
    });
    return () => instance.destroy();
  }, []);

  return (
    <div className="header">
      <div className="header-item">
        <h1 className="text-color font-style">Hello. I’m Divyansh</h1>
        <p className="font-style">
          A Full-Stack Web Developer & Open Source Contributor.I like to build
          things for web and solving problems.
        </p>
      </div>
      <div>
        <div id="astronaut-logo"></div>
      </div>
    </div>
  );
}

export default Header;
