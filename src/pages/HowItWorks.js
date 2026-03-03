import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import styled from "styled-components";

import howHeroData from "../data/howHeroData";
import stepsData from "../data/stepsData";
import howVideoData from "../data/howVideoData";
import howTestimonialsSectionData from "../data/howTestimonialsSectionData";
import testimonialsData from "../data/testimonialsData";

const HeroSection = styled.section`
  background: #0d47a1;
  color: white;
  padding: 120px 0;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom:-121px;
`;

const StepsSection = styled.section`
  padding: 100px 0;
  background: #f5f7fb;
`;

const StepCard = styled(Card)`
  text-align: center;
  border: none;
  border-radius: 20px;
  padding: 35px 20px;
  height: 100%;
  transition: 0.3s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-6px);
  }
`;

const StepIcon = styled.div`
  font-size: 30px;
  color: #0d6efd;
  margin-bottom: 18px;
`;

const VideoSection = styled.section`
  width: 100%;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const VideoLeft = styled.div`
  flex: 1;
  min-width: 50%;
  position: relative;

  @media (max-width: 991px) {
    min-width: 100%;
    height: 350px;
  }
`;

const VideoRight = styled.div`
  flex: 1;
  min-width: 50%;
  background: #4da3d9;
  color: white;
  display: flex;
  align-items: center;
  padding: 100px 80px;

  @media (max-width: 991px) {
    min-width: 100%;
    padding: 60px 30px;
  }
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialsSection = styled.section`
  padding: 100px 0;
`;

const TestimonialCard = styled(Card)`
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  border: none;
  background: #f8f9fb;
  height: 100%;
`;

function HowItWorks() {
  return (
    <>
      <HeroSection>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <h1 style={{ fontWeight: "700" }}>
                {howHeroData.title}
              </h1>

              <p style={{ marginTop: "20px" }}>
                {howHeroData.description}
              </p>

              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              >
                Get Started
              </Button>
            </Col>

            <Col lg={6}>
              <HeroImage
                src={process.env.PUBLIC_URL + "/images/" + howHeroData.image}
                alt="How It Works"
              />
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <StepsSection>
        <Container>
          <Row className="g-4 justify-content-center text-center">
            {stepsData &&
              stepsData.map((step) => (
                <Col
                  key={step.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  className="d-flex"
                >
                  <StepCard className="w-100">
                    <StepIcon>
                      <i className={step.icon}></i>
                    </StepIcon>
                    <h6>{step.text}</h6>
                  </StepCard>
                </Col>
              ))}
          </Row>
        </Container>
      </StepsSection>

      <VideoSection>
        <VideoWrapper>
          <VideoLeft>
            <VideoImage
              src={process.env.PUBLIC_URL + "/images/" + howVideoData.image}
              alt="Video"
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#f4d03f",
                padding: "25px",
                borderRadius: "15px",
                cursor: "pointer"
              }}
            >
              <i className="fas fa-play" style={{ fontSize: "22px" }}></i>
            </div>
          </VideoLeft>

          <VideoRight>
            <div>
              <small
                style={{
                  background: "white",
                  color: "#4da3d9",
                  padding: "6px 15px",
                  borderRadius: "20px",
                  fontWeight: "500"
                }}
              >
                Video Tour
              </small>

              <h2 style={{ fontWeight: "700", marginTop: "20px" }}>
                {howVideoData.title}
              </h2>

              <p style={{ marginTop: "20px", opacity: 0.9 }}>
                {howVideoData.description}
              </p>

              <Button
                style={{
                  marginTop: "25px",
                  borderRadius: "30px",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white"
                }}
              >
                {howVideoData.buttonText}
              </Button>
            </div>
          </VideoRight>
        </VideoWrapper>
      </VideoSection>

      <TestimonialsSection>
        <Container>
          <div className="text-center mb-5">
            <small className="text-primary">
              {howTestimonialsSectionData.smallTitle}
            </small>

            <h2 style={{ fontWeight: "700", marginTop: "10px" }}>
              {howTestimonialsSectionData.mainTitle}
            </h2>
          </div>

          <Row className="g-4">
            {testimonialsData &&
              testimonialsData.map((item) => (
                <Col md={6} lg={4} key={item.id} className="d-flex">
                  <TestimonialCard className="w-100">
                    <p>"{item.review}"</p>
                    <h6 style={{ marginTop: "15px" }}>
                      - {item.name}
                    </h6>
                  </TestimonialCard>
                </Col>
              ))}
          </Row>
        </Container>
      </TestimonialsSection>
    </>
  );
}

export default HowItWorks;