import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              Welcome to my portfolio! 🚀
              <br />
              <br />
              I am a passionate
              <i>
                <b className="purple"> Software Developer </b>
                that fell in love with solving problems and
                <b className="purple"> building things that can make a difference.</b>
              </i>
              <br />
              <br />I usually code in 
              <i>
                <b className="purple"> Javascript and Python</b>
                , but I have also worked with other languages like
                <b className="purple"> C++ and Java</b>
                .
              </i>
              <br />
              <br />
              I have experience in building web applications with the MERN Stack
              <i>
                <b className="purple"> (MongoDB, Express, React, Node.js) </b>
              </i>
              <br />
              <br />
              My passion lies in&nbsp;
              <i>
                <b className="purple">Web Technologies and AI </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elbertChao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elbert-chao/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
