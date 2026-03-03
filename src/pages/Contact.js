import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import contactInfoData from "../data/contactInfoData";
import ContactInfoCard from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";



const HeroSection = styled.section`
  position: relative;
  background: #0d47a1;
  padding: 140px 0;
  color: white;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 52px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;



const InfoSection = styled.section`
  background: #f4f6f9;
  padding: 60px 0;
`;



const FormSection = styled.section`
  padding: 80px 0;
  background: white;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
`;

const FormBox = styled.div`
  background: #f8f9fb;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

function Contact() {
  return (
    <>
      
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Contact Us</HeroTitle>
            <HeroText>
              Enjoy A Spotless Space With Our Expert Cleaning Team.
              Affordable, Eco-Friendly And Tailored To Your Needs!
            </HeroText>
          </HeroContent>
        </Container>
      </HeroSection>

     
      <InfoSection>
        <Container>
          <Row>
            {contactInfoData.map((item) => (
              <ContactInfoCard key={item.id} item={item} />
            ))}
          </Row>
        </Container>
      </InfoSection>

      
      <FormSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <ImageWrapper>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                  alt="Cleaning"
                />
              </ImageWrapper>
            </Col>

            <Col lg={6}>
              <FormBox>
                <ContactForm />
              </FormBox>
            </Col>
          </Row>
        </Container>
      </FormSection>
    </>
  );
}

export default Contact;
