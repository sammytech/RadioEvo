import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            {/*<a class="navbar-brand" href="#">Brand</a>*/}
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shows <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Pictures</a></li>
                  <li><a href="#">Videos</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Music <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Audio</a></li>
                  <li><a href="#">Videos</a></li>
                </ul>
              </li>
              <li class="center-logo">
                <a href="#">Brand</a>
              </li>
              <li><a href="#">Artists<span class="sr-only">(current)</span></a></li>
              <li class="active"><a href="#">Events<span class="sr-only">(current)</span></a></li>

            </ul>
          </div>
          {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
      </nav>
    );
  }
}
