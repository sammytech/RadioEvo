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
      speed: 1000,

    };
    return (
      <div class="row">
        <Header/>
        <div class="banner">
        	<Slider {...settings}>
          	<img src='http://placehold.it/1000x1000' />
            <img src='http://www.templateof.com/postpic/2015/05/success-website-banner_269676.png' />
            <img src='http://www.templateof.com/postpic/2015/05/backgrounds-design-web-banners_269681.jpg'/>
            <img src='http://placehold.it/400x1000' />
          </Slider>
          <div class="overlay">
          </div>
        </div>
        {/*<hr class="section-separator"/>*/}
        <div class="container main">
          <section class="col-lg-9 main-content">
            <header class="row">
              <h2>News</h2>
            </header>
            <div class="news row">
              {[,...Array(10)].map((x, i) =>
                <div key={i} class="col-sm-6 col-md-4">

                  <div class="thumbnail">
                    <div class="tag">
                      <span class="single_tag">Video, Music</span>
                    </div>
                    <img src="http://placehold.it/400x400" alt="..."/>
                    <div class="caption">
                      <h3>Thumbnail label</h3>
                      <p>...</p>
                      <p>
                        <a href="#" class="btn btn-primary" role="button">Read More...</a>
                          {/*<a href="#" class="btn btn-default" role="button">Button</a>    */}
                      </p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </section>

          <section class="col-lg-3 sidebar">
            <header class="row">
              <h2>Upcoming</h2>
            </header>
            <div>
              <div class="row">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="http://placehold.it/48x48" alt="..."/>
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Event</h4>
                      <span class="upcoming-name">The day </span>
                      <span class="upcoming-date">January 26, 2017 @ 6:00pm</span>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="media">
                  <div class="media-left">
                    <a href="#">
                      <img class="media-object" src="http://placehold.it/48x48" alt="..."/>
                    </a>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">Programme</h4>
                      <span class="upcoming-name">The day </span>
                      <span class="upcoming-date">January 26, 2017 @ 6:00pm</span>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/*<div class="col-lg-1"></div>*/}
        </div>
        <Footer />
      </div>
    );
  }
}
