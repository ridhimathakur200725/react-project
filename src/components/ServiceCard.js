import React from "react";
import styled from "styled-components";



const CardWrapper = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #555;
  font-size: 14px;
`;


function ServiceCard({ img, title, desc }) {
  return (
    <CardWrapper>
      <Image src={img} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Text>{desc}</Text>
      </Content>
    </CardWrapper>
  );
}

export default ServiceCard;
