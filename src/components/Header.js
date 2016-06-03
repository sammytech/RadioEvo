import React from "react";
import { IndexLink, Link } from "react-router";
import '../sass/header.scss';
// import Title from "./Header/Title";

export default class Header extends React.Component {


  render() {
    const frontClass = location.hash.match(/^#\/\?/) ? "active" : "";
    const showClass = location.hash.match(/^#\/shows/) ? "active" : "";
    const musicClass = location.hash.match(/^#\/music/) ? "active" : "";
    const artistsClass = location.hash.match(/^#\/artists/) ? "active" : "";
    const eventsClass = location.hash.match(/^#\/events/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    console.log(location.hash)

    return (
      <nav class="navbar navbar-default navbar-fixed-top">
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
              <li className={showClass}>
                <Link className="nav-link" to="/shows" activeClassName="active">Shows</Link>
              </li>
              <li className={musicClass}>
                <Link to="music">Music </Link>
              </li>
              <li class={"center-logo " + frontClass}>
                <IndexLink to="/"><div></div></IndexLink>
              </li>
              <li className={artistsClass}>
                <Link to="artists">Artists</Link>
              </li>
              <li className={eventsClass}>
                <Link to="events">Events</Link>
              </li>

            </ul>
          </div>
          {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
      </nav>
    );
  }
}
