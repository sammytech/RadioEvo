import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import Main from "./pages/MainPage";
import Shows from "./pages/Shows"
import Front from "./pages/Front"
import Music from "./pages/Music"
import Artists from "./pages/Artists"
import Events from "./pages/Events"
import './sass/master.scss';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Front}></IndexRoute>
      <Route path="/shows" name="shows" component={Shows}></Route>
      <Route path="/music" name="music" component={Music}></Route>
      <Route path="/artists" name="artists" component={Artists}/>
      <Route path="/events" name="events" component={Events}></Route>
    </Route>
  </Router>,

app);
