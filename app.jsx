import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';

// Create Global Styles
const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif; /* Or another font of your choice */
  }
`;

const PageContainer = styled.div`
  height: 100vh; /* Full screen height */
  overflow-y: auto; /* Enable vertical scrolling */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <HeroSection />
        <StatsSection />
      </PageContainer>
    </>
  );
}

export default App;
