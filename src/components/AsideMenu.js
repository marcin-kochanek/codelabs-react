import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AsideMenuWrapper = styled.aside`
    /* background-color: #333; */
    /* padding: 30px 0 0 0; */
`;

const MenuItem = styled.span`
    text-transform: uppercase;
    padding-left: 15px;
`;

const AsideMenu = () => {
    return (
        <AsideMenuWrapper className="column is-2 is-dark">
            <nav className="menu">
                <ul className="menu-list">
                    <li>
                        <NavLink className="is-active" to="/dashboard">
                            <span className="icon">
                                <i className="fas fa-home" />
                            </span>
                            <MenuItem>
                                dashboard
                            </MenuItem>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/albums">
                            <span className="icon">
                                <i className="fas fa-home" />
                            </span>
                            <MenuItem>
                                albums
                            </MenuItem>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/albums/new">
                            <span className="icon">
                                <i className="fas fa-home" />
                            </span>
                            <MenuItem>
                                add
                            </MenuItem>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </AsideMenuWrapper>
    )
}

export default AsideMenu;
