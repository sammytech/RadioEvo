import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to line",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,

    };
    return (
      <div class="row">
        <Header/>
        <div>
        	<Slider {...settings}>
          	<img src='http://placehold.it/400x400' />
            <img src='http://placehold.it/400x400' />
            <img src='http://placehold.it/400x400'/>
            <img src='http://placehold.it/400x400' />
          </Slider>
        </div>
        <hr class="section-separator"/>
        <div class="container main">
          <div class="col-lg-9 main-content">
            <header class="row">
              <h2>News</h2>
            </header>
          </div>

          <div class="col-lg-3 sidebar">
            <header class="row">
              <h2>Upcoming</h2>
            </header>
          </div>
          <div class="col-lg-1"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
