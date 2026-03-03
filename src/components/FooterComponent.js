import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterSection = styled.footer`
  background: #222;
  color: white;
  padding: 50px 0;
  margin-top: 80px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #f1c40f;
  }
`;

const Logo = styled.img`
  max-width: 150px;
`;

function FooterComponent() {
  return (
    <FooterSection>
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <Logo src={process.env.PUBLIC_URL + "/images/footerlogo.webp"} alt="Logo" />
            <p>
              We are a team of passionate cleaning experts delivering
              the highest standard of service.
            </p>
          </Col>

          <Col lg={3} md={6}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/services">Services</FooterLink></li>
              <li><FooterLink to="/howitworks">How It Works</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-In / Move-Out</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h5>We're Open</h5>
            <p>Monday - Saturday 08.00 - 18.00</p>
            <p>100 S Main St, New York, NY</p>
            <p>contact@uclean.com</p>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
}

export default FooterComponent;