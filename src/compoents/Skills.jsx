import React from "react";
import { Proficient } from "../SkillData";
import "../styles/skills.css";

function Skills() {
  return (
    <div id="skill">
      <div className="skills-heading">
        <h2>Skills & Tools</h2>
      </div>
      {Proficient?.length > 0 && (
        <div className="skill-cards">
          {Proficient.map((x, index) => (
            <div className="skill-card" key={index}>
              <img src={x.logo} alt="" loading="lazy" />
              <div>{x.skill}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
