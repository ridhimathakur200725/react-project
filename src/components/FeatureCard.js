import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: #0d6efd;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  font-size: 28px;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #666;
`;

function FeatureCard({ icon, title, text }) {
  return (
    <CardWrapper>
      <IconWrapper>
        <i className={icon}></i>
      </IconWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CardWrapper>
  );
}

export default FeatureCard;