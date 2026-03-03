import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  text-align: center;
  padding-bottom: 25px;
  transition: 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 18px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.h5`
  font-weight: 600;
  margin-top: 18px;
  margin-bottom: 6px;
`;

const Role = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 15px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

const IconCircle = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  transition: 0.3s;

  &.facebook { background: #1877f2; }
  &.telegram { background: #229ed9; }
  &.instagram { background: #e4405f; }

  &:hover { transform: scale(1.1); }
`;

function TeamCard({ img, name, role }) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={process.env.PUBLIC_URL + "/images/" + img} alt={name} />
      </ImageWrapper>

      <Name>{name}</Name>
      <Role>{role}</Role>

      <SocialIcons>
        <IconCircle href="#" className="facebook"><FaFacebookF /></IconCircle>
        <IconCircle href="#" className="telegram"><FaTelegramPlane /></IconCircle>
        <IconCircle href="#" className="instagram"><FaInstagram /></IconCircle>
      </SocialIcons>
    </CardWrapper>
  );
}

export default TeamCard;