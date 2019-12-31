import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.span`
  align-items: center;
  display: inline-flex;
`;

const HeaderWrapper = styled.header`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 5px 0;
`;

const IconWrapper = styled.div`
  margin-left: 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = () => (
  <HeaderWrapper
    className="navbar has-background-white-ter"
    role="navigation"
    aria-label="main navigation"
  >
    <IconWrapper className="navbar-brand">
      <StyledNavLink to="/">
        <Icon className="has-text-dark">
          <i className="fas fa-camera-retro fa-2x" />
        </Icon>

      </StyledNavLink>
    </IconWrapper>
  </HeaderWrapper>
);
