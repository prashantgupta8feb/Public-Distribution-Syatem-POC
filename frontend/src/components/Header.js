// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const StyledNav = styled.nav`
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Distribution System of Indian Govt.</h1>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/new-registration">New Registration</StyledLink>
        <StyledLink to="/user-login">User Login</StyledLink>
        <StyledLink to="/status">Status of Request</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
