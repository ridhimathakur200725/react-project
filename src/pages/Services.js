import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

import ServiceCard from "../components/ServiceCard";
import servicesBannerData from "../data/servicesBannerData";
import servicesData from "../data/servicesData";

const BannerSection = styled.section`
  background: #1e4a89;
  padding: 90px 0;
  color: white;
`;

const BannerTitle = styled.h1`
  font-weight: 700;
  margin-bottom: 15px;
`;

const BannerText = styled.p`
  max-width: 500px;
`;

const BannerImage = styled.img`
  max-width: 100%;
`;

const ServicesSection = styled.section`
  background: #f4f6f9;
  padding: 80px 0;
`;

function Services() {
  return (
    <>
      <BannerSection>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <BannerTitle>
                {servicesBannerData ? servicesBannerData.title : "No Title"}
              </BannerTitle>

              <BannerText>
                {servicesBannerData
                  ? servicesBannerData.description
                  : "No Description"}
              </BannerText>
            </Col>

            <Col md={6} className="text-end">
              {servicesBannerData && servicesBannerData.image ? (
                <BannerImage
                  src={process.env.PUBLIC_URL + "/images/" + servicesBannerData.image}
                  alt="Service Banner"
                />
              ) : null}
            </Col>
          </Row>
        </Container>
      </BannerSection>

      <ServicesSection>
        <Container>
          <Row>
            {servicesData && servicesData.length > 0 ? (
              servicesData.map((service) => (
                <Col md={4} key={service.id} className="mb-4">
                  <ServiceCard
                    img={process.env.PUBLIC_URL + "/images/" + service.img}
                    title={service.title}
                    desc={service.desc}
                  />
                </Col>
              ))
            ) : (
              <p className="text-center">No Services Available</p>
            )}
          </Row>
        </Container>
      </ServicesSection>
    </>
  );
}

export default Services;