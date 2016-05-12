import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Main from "./pages/MainPage";
import Gallery from "./pages/Gallery"
import Front from "./pages/Front"
const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Front}></IndexRoute>
    <Route path="gallery" name="gallery" component={Gallery}></Route>
    </Route>
  </Router>,

app);
