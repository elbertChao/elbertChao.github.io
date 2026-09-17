import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer" id="contact">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Elbert Chao</h3>
          <p className="footer-contact-text">Open to ML and software engineering roles.</p>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Contact</h3>
          <a href="mailto:elbert.chao443@gmail.com" className="footer-email-link">
            <MdOutlineMailOutline /> elbert.chao443@gmail.com
          </a>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/elbertChao"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/elbertc/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footer-copywright">
          <p className="footer-copyright">Copyright &copy; {year} EC</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
