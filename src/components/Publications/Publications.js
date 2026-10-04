import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";
import { FaFileAlt } from "react-icons/fa";
import publications from "../../data/publications";
import ExperienceLogo from "../Experience/ExperienceLogo";

function Publications() {
  return (
    <Container fluid className="experience-section publications-section" id="publications">
      <Container>
        <p className="intro-badge">Publications</p>
        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        <p className="section-tagline">
          Conference papers and posters from my medical imaging research.
        </p>

        <div className="publications-list">
          {publications.map((publication) => (
            <article key={publication.id} className="experience-card publication-card">
              <div className="experience-card-header experience-card-split">
                <div className="experience-card-logo-panel">
                  <ExperienceLogo
                    logo={publication.logo}
                    initials={publication.logoInitials}
                    company="IEEE EMBC"
                    className="publication-logo"
                  />
                </div>

                <div className="experience-card-content">
                  <div className="experience-card-title-block">
                    <div className="experience-card-meta">
                      <span className="experience-date-range">{publication.date}</span>
                      <span className="experience-duration">{publication.type}</span>
                    </div>
                    <h3 className="experience-company">{publication.title}</h3>
                    <p className="experience-role">{publication.venue}</p>
                  </div>

                  <ul className="experience-highlights">
                    {publication.highlights.map((highlight) => (
                      <li key={highlight}>
                        <ImPointRight className="experience-highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="publication-actions">
                    <Button
                      variant="primary"
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFileAlt />
                      &nbsp;Paper
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Publications;
