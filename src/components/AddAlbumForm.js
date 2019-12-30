import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';

const StyledContainer = styled.div`
    min-height: 800px;
    width: 100%;
    background-color: #fff;
`;

const ContainerForm = styled.div`
    width: 50%;
`;

const AddAlbumForm = () => {
    return (
        // <section className="hero is-primary is-fullheight">
        //     <div className="hero-body">
        //         <div className="container has-text-centered">
        //             <StyledContainer>
        //                 <Header />
        //                 <ContainerForm>
                        <section class="hero">
                            <div class="hero-body">
                                <div class="container">
                                <div class="columns is-centered">
                                    <div class="column is-8-tablet is-7-desktop is-6-widescreen">
                                    <form action="" class="box">
                                        <div class="field">
                                        <label for="" class="label">Title</label>
                                        <div class="control has-icons-left">
                                            <input type="text" placeholder="e.g. bobsmith@gmail.com" class="input" required />
                                            <span class="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                        </div>
                                        <div class="field">
                                            <div class="file is-warning is-boxed">
                                                <label class="file-label">
                                                <input class="file-input" type="file" name="resume" />
                                                <span class="file-cta">
                                                    <span class="file-icon">
                                                    <i class="fas fa-cloud-upload-alt"></i>
                                                    </span>
                                                    <span class="file-label">
                                                    Warning file…
                                                    </span>
                                                </span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="field">
                                            <button class="button is-success">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
        //                 </ContainerForm>
        //             </StyledContainer>
        //         </div>
        //     </div>
        // </section>
    )
}

export default AddAlbumForm;