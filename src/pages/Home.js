import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import styled from "styled-components";

import FeatureCard from "../components/FeatureCard";
import herobg from "../assets/images/background.webp";

import homeHeroData from "../data/homeHeroData";
import homeFeaturesData from "../data/homeFeaturesData";
import homeAboutData from "../data/homeAboutData";
import homeVideoData from "../data/homeVideoData";
import homeFaqData from "../data/homeFaqData";


const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(13, 71, 161, 0.9),
      rgba(13, 71, 161, 0.9)
    ),
    url(${herobg});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 60%;
  }

  @media (max-width: 576px) {
    max-width: 55%;
  }
`;


const HeroBadge = styled.span`
  display: inline-block;
  border: 1px solid #fff;
  padding: 6px 18px;
  border-radius: 30px;
  font-size: 14px;
`;
const MaidImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 85%;
  z-index: 2;

  @media (max-width: 1200px) {
    height: 75%;
  }

  @media (max-width: 992px) {
    height: 65%;
  }

  @media (max-width: 768px) {
    height: 55%;
    right: -40px;
  }

  @media (max-width: 576px) {
    height: 50%;
    right: -60px;
  }
`;





const IconsSection = styled.section`
  background: #f5f7fb;
  padding: 70px 0;
  margin-top: -70px;
  position: relative;
  z-index: 3;
`;


const AboutSection = styled.section`
  background: #f8f9fb;
  padding: 80px 0;
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const AboutBadge = styled.span`
  background: #0d6efd;
  color: white;
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
`;


const VideoSection = styled.section`
  background: #174a8b;
  color: white;
`;

const VideoLeft = styled.div`
  position: relative;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f4d03f;
  padding: 25px;
  border-radius: 20px;
  font-size: 24px;
  cursor: pointer;
`;

const VideoRight = styled.div`
  padding: 80px 50px;
`;

const VideoBadge = styled.span`
  background: white;
  color: #174a8b;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 15px;
`;



const FAQSectionWrapper = styled.section`
  padding: 80px 0;
`;

const FAQBadge = styled.span`
  background: #e7f1ff;
  color: #0d6efd;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 14px;
`;



function Home() {
  return (
    <>

      <HeroSection>
       
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <HeroContent>
                <HeroBadge>{homeHeroData.badge}</HeroBadge>

                <h1
                  style={{
                    fontSize: "56px",
                    fontWeight: "700",
                    marginTop: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  {homeHeroData.title}
                </h1>

                <p style={{ marginTop: "20px" }}>
                  {homeHeroData.description}
                </p>

                <Button
                  style={{
                    marginTop: "20px",
                    borderRadius: "30px",
                    padding: "12px 30px",
                  }}
                >
                  {homeHeroData.buttonText}
                </Button>
              </HeroContent>
            </Col>
          </Row>
        </Container>

        <MaidImage src={homeHeroData.maidImage} alt="maid" />
      </HeroSection>


      <IconsSection>
        <Container>
          <Row className="g-4">
            {homeFeaturesData && homeFeaturesData.length > 0 ? (
              homeFeaturesData.map((item) => (
                <Col md={6} lg={3} key={item.id}>
                  <FeatureCard
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </Col>
              ))
            ) : (
              <p className="text-center">No Features Found</p>
            )}
          </Row>
        </Container>
      </IconsSection>


      <AboutSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <AboutImage
                src={homeAboutData.image}
                alt="About"
              />
            </Col>

            <Col lg={6}>
              <AboutBadge>{homeAboutData.badge}</AboutBadge>
              <h2 style={{ fontWeight: "700", marginTop: "10px" }}>
                {homeAboutData.title}
              </h2>
              <p style={{ marginTop: "15px" }}>
                {homeAboutData.description}
              </p>
              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "25px",
                }}
              >
                {homeAboutData.buttonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </AboutSection>

      <VideoSection>
        <Container fluid className="p-0">
          <Row className="g-0 align-items-center">
            <Col lg={6}>
              <VideoLeft>
                <VideoImage
                  src={homeVideoData.image}
                  alt="Video"
                />
                <PlayButton>
                  <i className="fas fa-play"></i>
                </PlayButton>
              </VideoLeft>
            </Col>

            <Col lg={6}>
              <VideoRight>
                <VideoBadge>{homeVideoData.badge}</VideoBadge>
                <h2 style={{ fontWeight: "700" }}>
                  {homeVideoData.title}
                </h2>
                <p style={{ marginTop: "15px" }}>
                  {homeVideoData.description}
                </p>
                <Button
                  style={{
                    marginTop: "20px",
                    borderRadius: "25px",
                    background: "transparent",
                    border: "1px solid white",
                  }}
                >
                  {homeVideoData.buttonText}
                </Button>
              </VideoRight>
            </Col>
          </Row>
        </Container>
      </VideoSection>

      <FAQSectionWrapper>
        <Container>
          <div className="text-center mb-4">
            <FAQBadge>FAQ</FAQBadge>
            <h2 style={{ marginTop: "15px" }}>
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion>
            {homeFaqData && homeFaqData.length > 0 ? (
              homeFaqData.map((item, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={item.id}
                >
                  <Accordion.Header>
                    {item.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            ) : (
              <p className="text-center">No FAQs Available</p>
            )}
          </Accordion>
        </Container>
      </FAQSectionWrapper>
    </>
  );
}

export default Home;
