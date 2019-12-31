import React, { useState, useEffect } from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppContext from '../../contex';
import { Header } from '../../components/Header/Header.js';
import AlbumFormView from '../AlbumFormView/AlbumFormView.js';
import AsideMenu from '../../components/AsideMenu/AsideMenu.js';
import AlbumsView from '../AlbumsView/AlbumsView';
import GalleryView from '../GalleryView/GalleryView.js';
import { getAlbums } from '../../common/api';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 850px;
`;

const Root = () => {
  const [albumList, setAlbumList] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      const userId = 1;
      const fetchedAlbums = await getAlbums(userId);
      setAlbumList(fetchedAlbums);
    }

    fetchAlbums();

    return () => {
      fetchAlbums();
    };
  }, []);

  const albumsElements = {
    albumList,
    setAlbumList
  };

  return (
    <section className='hero is-primary is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-16-tablet is-14-desktop is-12-widescreen'>
              <Container className='box'>
                <BrowserRouter>
                  <AppContext.Provider value={albumsElements}>
                    <Header />
                    <div className='section'>
                      <div className='columns'>
                        <AsideMenu />
                        <Switch>
                          <Route path='/albums' exact component={AlbumsView} />
                          <Route
                            path='/albums/:id/photos'
                            exact
                            component={GalleryView}
                          />
                          <Route
                            path='/albums/new'
                            exact
                            component={AlbumFormView}
                          />
                          <Route
                            path='/albums/:id/edit'
                            exact
                            component={AlbumFormView}
                          />
                        </Switch>
                      </div>
                    </div>
                  </AppContext.Provider>
                </BrowserRouter>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Root;
