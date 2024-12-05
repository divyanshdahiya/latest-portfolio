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
          I’m a software developer at Moody’s, focusing on enhancing the CreditLens product. I’ve worked on integrating Orbis data, improving data accuracy and system efficiency, and developed new features for e-Credit to boost functionality and user experience. As part of the maintenance team, I also manage defects and bugs to ensure smooth performance and continuous improvement
        </p>
      </div>
      <div>
        <div id="astronaut-logo"></div>
      </div>
    </div>
  );
}

export default Header;
