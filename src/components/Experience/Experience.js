import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import pdf from "../../Assets/ResElbertC.pdf";
import experiences from "../../data/experience";
import ExperienceTimeline from "./ExperienceTimeline";

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Particle />
      <Container>
        <p className="intro-badge">Experience</p>
        <h1 className="project-heading">
          My <strong className="purple">Work</strong> Journey
        </h1>
        <p className="section-tagline">
          A chronological look at the roles where I shipped research, AI systems, and production software.
        </p>

        <ExperienceTimeline experiences={experiences} />

        <Row style={{ justifyContent: "center", position: "relative", paddingTop: "24px" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
