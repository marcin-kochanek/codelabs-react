import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const Icon = styled.span`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
`;

const HeaderWrapper = styled.header`
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
`;

const Field = styled.div`
    width: 30%;
`;

export const Header = () => {
    return (
        <HeaderWrapper className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink to="/">
                    <Icon className="has-text-danger">
                        <i className="fas fa-camera-retro fa-2x" />
                    </Icon>
                </NavLink>
            </div>

            <Field>
                <p className="control has-icons-right">
                <input className="input is-rounded" type="text" placeholder="Search album" />
                    <span className="icon is-small is-right">
                        <i className="fas fa-search" />
                    </span>
                </p>
            </Field>


            <div className="nav-right nav-menu">
                <a className="nav-item is-tab is-hidden-tablet is-active">Home</a>
                <a className="nav-item is-tab is-hidden-tablet">Features</a>
                <a className="nav-item is-tab is-hidden-tablet">Pricing</a>
                <a className="nav-item is-tab is-hidden-tablet">About</a>
                <a className="nav-item is-tab">
                <figure className="image is-16x16">
                    <img src="http://bulma.io/images/jgthms.png" />
                </figure>
                Profile
                </a>
                <a className="nav-item is-tab">Log out</a>
            </div>
            {/* <div class="navbar-item">
                <NavLink className="buttons" to="/add">
                    <a class="button is-link">
                        Add
                    </a>
                </NavLink>
            </div> */}
        </HeaderWrapper>
    )
}
