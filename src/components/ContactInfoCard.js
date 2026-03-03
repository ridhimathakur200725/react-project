import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

const IconCircle = styled.div`
  width: 90px;
  height: 90px;
  background: #4a97d9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 28px;
  color: white;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  margin: 0;
  color: #444;
`;

function ContactInfoCard({ item }) {
  return (
    <Col lg={3} md={6} sm={12} className="mb-4">
      <CardWrapper>
        <IconCircle>
          <i className={item.icon}></i>
        </IconCircle>
        <Title>{item.title}</Title>
        <Detail>{item.detail}</Detail>
      </CardWrapper>
    </Col>
  );
}

export default ContactInfoCard;