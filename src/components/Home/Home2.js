import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaBrain, FaCodeBranch, FaLaptopCode, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const highlightCards = [
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      text: "Designing and training practical models with PyTorch for real product use-cases.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Products",
      text: "Building responsive experiences with React and shipping APIs with Node and Express.",
    },
    {
      icon: <FaCodeBranch />,
      title: "Engineering Mindset",
      text: "Writing maintainable code, validating ideas quickly, and iterating with measurable impact.",
    },
  ];

  return (
    <Container fluid className="home-about-section" id="intro">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="intro-badge">Machine Learning x Full-Stack Engineer</p>
            <h1 style={{ fontSize: "2.6em" }}>
              BUILDING <span className="purple"> INTELLIGENT </span> PRODUCTS
            </h1>
            <p className="home-about-body">
              Welcome to my portfolio.
              <br />
              <br />
              I am a passionate
              <i>
                <b className="purple"> Software Developer </b>
                focused on using
                <b className="purple"> machine learning and modern web technologies </b>
                to solve real-world problems.
              </i>
              <br />
              <br />
              I usually code in
              <i>
                <b className="purple"> Python and JavaScript</b>,
                and I have worked with
                <b className="purple"> Java, HTML/CSS, and SQL </b>
                across multiple projects.
              </i>
              <br />
              <br />
              I build end-to-end applications with the MERN stack
              <i>
                <b className="purple"> (MongoDB, Express, React, Node.js) </b>
                and develop ML solutions using
                <b className="purple"> PyTorch. </b>
              </i>
              <br />
              <br />
              My focus is on
              <i>
                <b className="purple"> AI-powered products that feel polished and useful. </b>
              </i>
            </p>
            <div className="home-highlights">
              {highlightCards.map((card) => (
                <div className="home-highlight-card" key={card.title}>
                  <div className="home-highlight-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="home illustration" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET&apos;S CONNECT</h1>
            <p>
              If you are hiring for software or ML roles,
              <span className="purple"> reach out here.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elbertChao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elbertc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
