import React from "react";
import projects from "../projectData";
import "../styles/projects.css";
function Projects() {
  return (
    <div id="projects">
      <div>
        <h2 className="projects-heading">Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="projects-card">
              <div>
                <img
                  className="project-image"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="project-content">
                <h2 className="text-color">{project.title}</h2>
                <p>{project.description}</p>
                <div className="projects-techs">
                  {project.tools.map((disc, index) => (
                    <div key={index} className="projects-tech">
                      {disc}
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <img
                      src="./images/icons/github.svg"
                      alt="link to github page"
                      width="24px"
                      height="24px"
                    />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <img
                      src="./images/icons/external-link.svg"
                      alt="link to live website"
                      width="24px"
                      height="24px"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="project-more">
        <a
          className="project-github"
          href={`https://github.com/divyanshdahiya`}
          target="_blank"
          rel="noreferrer"
        >
          See more on Github
        </a>
      </div>
    </div>
  );
}

export default Projects;
