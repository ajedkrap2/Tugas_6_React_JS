import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import App from "./App"
import MenuMakanan from "./Page/MenuMakanan"
import MenuMinuman from "./Page/MenuMinuman"
import Kontak from "./Page/Kontak"

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={App} />
        <Route exact path="/menu_makanan" component={MenuMakanan} />
        <Route exact path="/menu_minuman" component={MenuMinuman} />
        <Route exact path="/kontak" component={Kontak} />
      </Switch>
    </Router>
  );
}

export default AppRoute;
