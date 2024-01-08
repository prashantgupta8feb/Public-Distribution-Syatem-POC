// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHome, BiUserPlus, BiUser, BiClipboard } from 'react-icons/bi';
import './Header.css';

const StyledHeader = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 20px 0; /* Adjusted padding */
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const StyledNav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: space-between; /* Adjusted layout to have space between items */
  align-items: center;
  padding: 0 20px; /* Added padding to the navigation */
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  span {
    margin-left: 5px; /* Added margin for space between icon and text */
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Distribution System of Indian government </StyledTitle>
      <StyledNav>
        <StyledLink to="/" title="Home">
          <BiHome size={20} />
          <span>Home</span>
        </StyledLink>
        <StyledLink to="/new-registration" title="New Registration">
          <BiUserPlus size={20} />
          <span>New Registration</span>
        </StyledLink>
        <StyledLink to="/user-login" title="User Login">
          <BiUser size={20} />
          <span>User Login</span>
        </StyledLink>
        <StyledLink to="/status" title="Status of Request">
          <BiClipboard size={20} />
          <span>Status</span>
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
