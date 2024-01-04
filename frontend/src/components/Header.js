// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHome, BiUserPlus, BiUser, BiClipboard, BiCheckShield } from 'react-icons/bi';

const StyledHeader = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 28px;
`;

const StyledNav = styled.nav`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  span {
    margin-top: 5px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Distribution System</StyledTitle>
      <StyledNav>
        <StyledLink to="/" title="Home">
          <BiHome size={24} />
          <span>Home</span>
        </StyledLink>
        <StyledLink to="/new-registration" title="New Registration">
          <BiUserPlus size={24} />
          <span>New Registration</span>
        </StyledLink>
        <StyledLink to="/user-login" title="User Login">
          <BiUser size={24} />
          <span>User Login</span>
        </StyledLink>
        <StyledLink to="/status" title="Status of Request">
          <BiClipboard size={24} />
          <span>Status</span>
        </StyledLink>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
