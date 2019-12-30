import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home.js";
import Dashboard from "./views/Dashboard";
import { Header } from "./components/Header.js";
import AddAlbumForm from "./components/AddAlbumForm.js";
import AsideMenu from "./components/AsideMenu.js";

function App() {
  return (
    <Router>
      <Header />
      <div className="section">
        <div className="columns">
            <AsideMenu />
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/add" exact component={AddAlbumForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
