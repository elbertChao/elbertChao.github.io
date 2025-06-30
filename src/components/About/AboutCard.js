import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! My name is <span className="purple">Elbert Chao</span>
            . I am a <span className="purple">Canadian of Chinese descent</span> and currently reside in <span className="purple">Toronto, Ontario</span>.
            <br />
            <br />
            Currently, I am doing an part-time internship at <span className="purple">PM Accelerator</span> as a Software Engineer - AI/ML Intern.
            Recently I have graduated <span className="purple">Western University</span> with a <span className="purple">CGPA of 3.7 </span>
            and finished strong with a <span className="purple"> 3.9 GPA.</span> in my final year.
            <br />
            <br />
            I aspire to be a future software developer possibly in either <span className="purple">Front-End/Full-Stack or Machine Learning.</span>
            <br />
            <br />
            Apart from coding, my hobbies involve:
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

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Elbert</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
