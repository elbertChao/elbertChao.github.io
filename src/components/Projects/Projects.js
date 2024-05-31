import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spg from "../../Assets/Projects/spg.jpg";
import cheer from "../../Assets/Projects/cheer.png";
import pygamePirates from "../../Assets/Projects/pygamePirates.png";
import superhero from "../../Assets/Projects/superhero.png";
import ifinance from "../../Assets/Projects/ifinance.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spg}
              isBlog={false}
              title="Spotify Playlist Generator"
              description="An automated playlist generator that utilizes Spotify's API while leverging Open AI's API to give listeners new music regardless of popularity based on an input track or gpt prompt"
              demoLink="https://drive.google.com/file/d/1WKf41MjntIHcZse4FBi-M2h7wzikZLag/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheer}
              isBlog={false}
              title="Cheer Project"
              description="An online web application hosted on GCP built with the MERN stack that allows special needs kids to communicate with their friends in the Cheer Group through a chat feature. The app also includes a calendar feature to keep track of events, a gallery feature to share photos, and an admin feature to monitor user activity."
              ghLink=""
              demoLink="https://se3350-project-group22-u6a2qlor5a-uk.a.run.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pygamePirates}
              isBlog={false}
              title="Pygame Pirates"
              description="A 2D game built with Pygame that allows players to run around a map, fighting enemiesm, collecting coins, and upgrading their character. There are 3 different levels within the game with the last level having a final skeleton boss. This was a major project that taught me the fundamentals of python and game development."
              ghLink="https://github.com/PygamePirates/Pygame-Pirates"
              demoLink="https://www.youtube.com/watch?v=i6ewJrxDoo8"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superhero}
              isBlog={false}
              title="Superhero Quest Hub"
              description="A full-stack web application utilizing the MERN stack hosted on AWS that allows users to search for their favorite superheroes and view their stats. Users can also create an account to save their favorite superheroes and view them later. This was my very first full-stack project!"
              ghLink="https://github.com/elbertChao/Superhero-Webpage"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ifinance}
              isBlog={false}
              title="IFinance"
              description="A simplistic financing model using Java and displayed through a GUI using JavaFX. Alongside utilizing a project workbook for software design and leverging the MVC architecture along with SQL queries to retrieve data."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
