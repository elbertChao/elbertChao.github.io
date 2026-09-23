import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeHeadshot from "./HomeHeadshot";
import Type from "./Type";

const publicUrl = process.env.PUBLIC_URL || "";
const headshot = `${publicUrl}/headshot.webp`;
const headshotSm = `${publicUrl}/headshot-sm.webp`;

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
                ML engineer focused on recommendation systems, retrieval models, and
                production-ready AI.
              </p>

              <div className="typewriter-wrap">
                <Type />
              </div>

              <div className="hero-cta-group">
                <a href="#experience" className="hero-cta primary-cta">
                  View Experience
                </a>
                <a href="#project" className="hero-cta secondary-cta">
                  View Projects
                </a>
              </div>
            </Col>

            <Col md={5} className="home-illustration">
              <HomeHeadshot
                src={headshot}
                srcSet={`${headshotSm} 520w, ${headshot} 900w`}
                sizes="(max-width: 767px) 260px, 450px"
                alt="Elbert Chao headshot"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
