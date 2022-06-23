import React from "react";
import workHistory from "../ExData";
import "../styles/experience.css";
import { FiExternalLink } from "react-icons/fi";

function Experience() {
  return (
    <div>
      <section id="projects">
        <header>
          <h2 className="exp-tittle font-style">Experience</h2>
        </header>
        <div className="">
          <div className="main-cont">
            <section id="cd-timeline">
              {workHistory &&
                workHistory.map((work) => (
                  <div className="cd-timeline-block">
                    <div className="cd-timeline-img cd-picture"></div>
                    <div className="cd-timeline-content">
                      <h1 className="text-color">
                        {work?.companyName}
                        <span>
                          {work?.link && (
                            <div>
                              <a
                                className="work-link"
                                href={work.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FiExternalLink />
                              </a>
                            </div>
                          )}
                        </span>
                      </h1>
                      <h4 className="work-role">{work?.role}</h4>

                      <div class="timeline-content-info">
                        <h5 className="work-duration">{work.duration}</h5>
                      </div>
                      <div>
                        {work?.workDes &&
                          work.workDes.map((x) => (
                            <h4 className="work-des">
                              <span>•</span> {x}
                            </h4>
                          ))}
                      </div>
                      <div>
                        {work?.exposer &&
                          work.exposer.map((ex, index) => (
                            <span className="work-skill" key={index}>
                              {ex}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
