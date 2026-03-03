import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";

import aboutBannerData from "../data/aboutBannerData";
import aboutSection2Data from "../data/aboutSection2Data";
import aboutVideoData from "../data/aboutVideoData";
import aboutJoinData from "../data/aboutJoinData";
import TeamCard from "../components/TeamCard";
import teamData from "../data/teamData";


const BannerSection = styled.section`
  background: #1e4c8f;
  color: white;
  padding: 80px 0;
`;

const BannerImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: contain;
  margin-bottom:-80px;
`;

const SectionTwo = styled.section`
  padding: 80px 0;
  background: #ffffff;
`;

const SectionImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;


const TeamSection = styled.section`
  padding: 80px 0;
  background: #f5f7fb;
  text-align: center;
`;

const TeamBadge = styled.small`
  color: #1e73ff;
  font-weight: 600;
  letter-spacing: 1px;
`;

const TeamTitle = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 50px;
`;


const VideoSection = styled.section`
  background: #2f6fb3;
  color: white;
`;

const VideoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoRight = styled.div`
  padding: 70px 60px;

  @media (max-width: 991px) {
    padding: 40px 20px;
    text-align: center;
  }
`;


const JoinSection = styled.section`
  padding: 80px 0;
  background: #ffffff;
`;

const JoinImage = styled.img`
  width: 100%;
  max-height: 420px;
  object-fit: contain;
`;

function About() {
  return (
    <>
     
      <BannerSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h1 style={{ fontWeight: "700", fontSize: "46px" }}>
                {aboutBannerData.title}
              </h1>
              <p style={{ marginTop: "20px", fontSize: "18px" }}>
                {aboutBannerData.description}
              </p>
            </Col>
            <Col lg={6}>
              <BannerImage src={aboutBannerData.image} alt="About" />
            </Col>
          </Row>
        </Container>
      </BannerSection>

      
      <SectionTwo>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionImage src={aboutSection2Data.image} alt="" />
            </Col>
            <Col lg={6}>
              <small className="text-primary fw-bold">
                {aboutSection2Data.badge}
              </small>
              <h2 style={{ fontWeight: "700", marginTop: "15px" }}>
                {aboutSection2Data.title}
              </h2>
              <p style={{ marginTop: "20px" }}>
                {aboutSection2Data.description}
              </p>
              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "30px",
                  padding: "8px 25px",
                }}
              >
                {aboutSection2Data.buttonText}
              </Button>
            </Col>
          </Row>
        </Container>
      </SectionTwo>

   
      <TeamSection>
        <Container>
          <TeamBadge>BEHIND THE SCENE</TeamBadge>
          <TeamTitle>Our Team</TeamTitle>

          <Row className="justify-content-center">
            {teamData.map((member) => (
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className="mb-4"
                key={member.id}
              >
                <TeamCard
                  img={member.img}
                  name={member.name}
                  role={member.role}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </TeamSection>

    
      <VideoSection>
        <Row className="g-0 align-items-center">
          <Col lg={6}>
            <VideoImage src={aboutVideoData.image} alt="" />
          </Col>
          <Col lg={6}>
            <VideoRight>
              <small style={{ opacity: 0.8 }}>
                {aboutVideoData.badge}
              </small>
              <h2 style={{ marginTop: "15px", fontWeight: "700" }}>
                {aboutVideoData.title}
              </h2>
              <p style={{ marginTop: "20px" }}>
                {aboutVideoData.description}
              </p>
              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "30px",
                  padding: "8px 25px",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                }}
              >
                {aboutVideoData.buttonText}
              </Button>
            </VideoRight>
          </Col>
        </Row>
      </VideoSection>

     
      <JoinSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <small className="text-primary fw-bold">
                {aboutJoinData.smallTitle}
              </small>
              <h2 style={{ fontWeight: "700", marginTop: "15px" }}>
                {aboutJoinData.title}
              </h2>
              <p style={{ marginTop: "20px" }}>
                {aboutJoinData.description}
              </p>
              <Button
                style={{
                  marginTop: "20px",
                  borderRadius: "30px",
                  padding: "8px 25px",
                }}
              >
                {aboutJoinData.buttonText}
              </Button>
            </Col>
            <Col lg={6}>
              <JoinImage src={aboutJoinData.image} alt="" />
            </Col>
          </Row>
        </Container>
      </JoinSection>
    </>
  );
}

export default About;
