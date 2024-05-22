import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Elbert Chao</span>
            . I am born in <span className="purple">Canada</span>, and my ethnicity is <span className="purple">Chinese</span>.
            <br />
            I am currently a full-time student at the <span className="purple">University of Western Ontario</span> studying <span className="purple">Software Engineering.</span>
            <br />
            I aspire to be a future software developer and am currently looking for internships to gain experience in the field.
            <br />
            <br />
            Apart from coding, my hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Biking
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
