import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = styled.span`
  text-transform: uppercase;
  padding-left: 15px;
`;

const AsideMenuItem = ({ to, icon, name }) => (
  <li>
    <NavLink to={to}>
      <span className='icon'>
        <i className={`fas ${icon}`} />
      </span>
      <MenuItem>{name}</MenuItem>
    </NavLink>
  </li>
);

export default AsideMenuItem;
