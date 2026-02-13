import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {props.status && <p className="project-status-badge">{props.status}</p>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>

        {props.techStack?.length > 0 && (
          <div className="project-tech-stack">
            {props.techStack.map((item) => (
              <span className="project-tech-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="project-link-buttons mt-auto">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank">
              <CgWebsite /> &nbsp;Demo
            </Button>
          )}

          {props.thesisLink && (
            <Button variant="primary" href={props.thesisLink} target="_blank">
              <FaFileAlt /> &nbsp;Thesis
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
