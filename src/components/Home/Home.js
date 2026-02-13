import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/PortfolioImg.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const scrollToProjects = (event) => {
    event.preventDefault();
    const section = document.getElementById("project");
    if (!section) return;

    const navOffset = 90;
    const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, I am
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> ELBERT CHAO</strong>
              </h1>

              <p className="hero-subtext">
                Building software and machine learning experiences that move from prototype to
                production.
              </p>

              <div className="typewriter-wrap">
                <Type />
              </div>

              <div className="hero-cta-group">
                <a href="#project" className="hero-cta primary-cta" onClick={scrollToProjects}>
                  View Projects
                </a>
              </div>
            </Col>

            <Col md={5} className="home-illustration">
              <img src={myImg} alt="headshot" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
