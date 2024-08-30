// HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  height: 100vh;  /* Full screen height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #8ee4af 0%, #68b784 100%);
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #000;
`;

const SubHeading = styled.p`
  margin: 1rem 0;
  color: #333;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <Heading>Unlocking Growth Potential in Startups</Heading>
      <SubHeading>Verta's unique dual approach to startups...</SubHeading>
      <Button>Get Started</Button>
    </HeroContainer>
  );
}
