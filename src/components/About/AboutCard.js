import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I&apos;m <span className="purple">Elbert Chao</span>, an ML engineer based in{" "}
            <span className="purple">Toronto, Ontario</span>. I recently interned on Pinterest&apos;s
            User Understanding team and am pursuing an MESc in Software Engineering at{" "}
            <span className="purple">Western University</span> (GPA 4.0).
          </p>
          <p style={{ textAlign: "justify", marginTop: "16px", marginBottom: 0 }}>
            Outside of work: video games, biking, and working out.
          </p>
          <ul style={{ marginTop: "16px", marginBottom: 0 }}>
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
