import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spg from "../../Assets/Projects/spg.jpg";
import pygamePirates from "../../Assets/Projects/pygamePirates.png";
import formfixer from "../../Assets/Projects/formfixer.png";
import strawberryWeb from "../../Assets/Projects/berryVision-v1.0.png";
import jobAssist from "../../Assets/Projects/job_assist.jpg";
import warrenBuffett from "../../Assets/Projects/warren_buffett.jpg";
import srMedt from "../../Assets/Projects/sr-medt.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <p className="intro-badge">Featured Portfolio Projects</p>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="section-tagline">
          Built across AI, web, and product-focused software engineering.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={srMedt}
              isBlog={false}
              status="Work in Progress"
              title="SR-MedT Thesis Project"
              description="Deep learning research project using a Medical Transformer (CNN-Transformer hybrid) to segment kidney CT ablation zones and quantify model uncertainty."
              techStack={["PyTorch", "Medical Transformer", "CNN-Transformer", "Uncertainty Quantification"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobAssist}
              isBlog={false}
              title="Job Assistant"
              description="AI-powered job assistant built during my PM Accelerator role to streamline role discovery and application workflows."
              techStack={["Python", "OpenAI API", "Prompt Engineering", "Automation"]}
              ghLink="https://github.com/elbertChao/job-assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warrenBuffett}
              isBlog={false}
              title="Warren Buffett Agent"
              description="Prompt-engineered LLM agent that applies Buffett-style investing logic using OpenAI-driven analysis pipelines."
              techStack={["OpenAI API", "LLMs", "Prompt Engineering", "Python"]}
              ghLink="https://github.com/elbertChao/warren-buffett-agent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formfixer}
              isBlog={false}
              title="FormFixer.AI"
              description="Mobile fitness companion with on-device pose feedback and guided coaching workflows."
              techStack={["React Native", "Expo", "TensorFlow Lite", "Jira"]}
              demoLink="https://www.youtube.com/watch?v=JZ4HPtc7ChY&ab_channel=TheBestofAI"
              ghLink="https://github.com/skcodes2/Form-Fixer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strawberryWeb}
              isBlog={false}
              title="Berry Vision v1.0"
              description="ML-powered crop monitoring web app that classifies strawberry ripeness and disease from images."
              techStack={["Next.js", "Flask", "Python", "Machine Learning"]}
              demoLink="https://strawberry.uwo.ca/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spg}
              isBlog={false}
              title="Spotify Playlist Generator"
              description="Prompt and track-based playlist generation using Spotify metadata and OpenAI-assisted ranking."
              techStack={["React", "Node.js", "Spotify API", "OpenAI API"]}
              thesisLink="https://drive.google.com/file/d/1WKf41MjntIHcZse4FBi-M2h7wzikZLag/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pygamePirates}
              isBlog={false}
              title="Pygame Pirates"
              description="2D action game with combat, progression, and multi-level boss design built from scratch."
              techStack={["Python", "Pygame", "Game Design"]}
              ghLink="https://github.com/PygamePirates/Pygame-Pirates"
              demoLink="https://www.youtube.com/watch?v=i6ewJrxDoo8"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
