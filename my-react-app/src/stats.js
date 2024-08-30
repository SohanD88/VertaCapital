// StatsSection.js
import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.section`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 4rem 2rem;  /* Adjusted padding */
`;

const Heading = styled.h2`
  color: #8ee4af;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StatBox = styled.div`
  background-color: #444;
  padding: 2rem;
  border-radius: 4px;
`;

export default function StatsSection() {
  return (
    <StatsContainer>
      <Heading>Eye Popping Results</Heading>
      <p>We combine venture capital funding with specialized AI/ML...</p>
      <StatsGrid>
        <StatBox>X+ Models Ready</StatBox>
        <StatBox>X+ Businesses Reached</StatBox>
      </StatsGrid>
    </StatsContainer>
  );
}
