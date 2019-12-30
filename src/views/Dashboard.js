import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import AsideMenu from '../components/AsideMenu';

const StyledContainer = styled.div`
    min-height: 800px;
    width: 100%;
    background-color: #fff;
`;

const SectionWithFixedHeight = styled.section`
    height: 75vh;
`;

const Columns = styled.div`
    margin: 0;
`;

const Column = styled.div`
    padding: 0;
`;

const Dashboard = () => {
    return (
                <main className="column">
                <div className="level">
                    <div className="level-left">
                    <div className="level-item">
                        <div className="title">Dashboard</div>
                    </div>
                    </div>
                    <div className="level-right">
                    <div className="level-item">
                        <button type="button" className="button is-small">
                        March 8, 2017 - April 6, 2017
                        </button>
                    </div>
                    </div>
                </div>

                <div className="columns is-multiline">
                    <div className="column is-6">
                    <div className="panel">
                        <p className="panel-heading">
                        Album title
                        </p>
                        <div className="panel-block">
                        <figure className="image is-16x9">
                            <img src="https://placehold.it/640x360" />
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="panel">
                        <p className="panel-heading">
                        Album title
                        </p>
                        <div className="panel-block">
                        <figure className="image is-16x9">
                            <img src="https://placehold.it/640x360" />
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="panel">
                        <p className="panel-heading">
                        Album title
                        </p>
                        <div className="panel-block">
                        <figure className="image is-16x9">
                            <img src="https://placehold.it/640x360" />
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="column is-6">
                    <div className="panel">
                        <p className="panel-heading">
                        Album title Else
                        </p>
                        <div className="panel-block">
                        <figure className="image is-16x9">
                            <img src="https://placehold.it/640x360" />
                        </figure>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
    )
}

export default Dashboard;