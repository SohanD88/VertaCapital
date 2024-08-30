// Navbar.js
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <div>VertaCapital</div>
      <NavLinks>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">FAQs</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Contact Us</NavLink>
        <Button>Get Started</Button>
      </NavLinks>
    </NavbarContainer>
  );
}
