import React, { useState, useEffect } from "react";
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import AppContext from '../../contex';
import { Header } from "../../components/Header.js";
import AlbumForm from "../AlbumForm/AlbumForm.js";
import AsideMenu from "../../components/AsideMenu.js";
import Albums from '../Albums/Albums';
import PhotoGallery from "../PhotoGallery/PhotoGallery.js";
import { getAlbums } from "../../common/api";

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
    <BrowserRouter>
      {/* <Route path="/" exact component={Home} /> */}
      <AppContext.Provider value={albumsElements}>
        <Header />
        <div className="section">
          <div className="columns">
            <AsideMenu />
              <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/albums" exact component={Albums} />
                <Route path="/albums/:id/photos" exact component={PhotoGallery} />
                <Route path="/albums/new" exact component={AlbumForm} />
                <Route path="/albums/:id/edit" exact component={AlbumForm} />
              </Switch>
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>

    //   <section className="hero is-danger is-fullheight">
    //   <div className="hero-body">
    //       <div className="container">
    //           <div className="columns is-centered">
    //               <div className="column is-16-tablet is-14-desktop is-12-widescreen">
    //                   <div className="box">
    //                   <Router>
    //                     <Header />
    //                     <div className="section">
    //                       <div className="columns">
    //                           <AsideMenu />
    //                           <Route path="/" exact component={Home} />
    //                           <Route path="/dashboard" exact component={Dashboard} />
    //                           <Route path="/albums" exact component={Albums} />
    //                           <Route path="/add" exact component={AddAlbumForm} />
    //                       </div>
    //                     </div>
    //                   </Router>
    //                   </div>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
    // </section>
  );
}

export default Root;
