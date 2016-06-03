import React from "react";
import Slider from "react-slick"
import '../sass/front.scss';
import { IndexLink, Link } from "react-router";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      title: "Welcome to line",
    };
  }

  componentDidMount(){
    $.ajax({
      url: "../data/news.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({news: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    // this.serverRequest = $.get("../data/news.json", function (result) {
    //   console.log(result);
    //   var lastGist = result[0];
    // }.bind(this));
  }

  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 1000,

    };
    // console.log(JSON.parse(news));
    return (
      <div id="start-page">
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
        <div class="container-fluid main">
          <section class="col-lg-9 col-md-9 main-content">
            <header class="row">
              <h2>News</h2>
            </header>
            <div class="news row">
              {this.state.news.map((report, i) =>
                <div key={i} class="col-sm-6 col-md-4">
                  <Link to="/">
                  <div class="thumbnail">
                    <div class="tag">
                      <span class="single_tag">
                        {report.music ? "Music" : (report.show ? "Show" : (report.event ? "Event" : "Unclassified")) }
                        {report.audio ? ", Audio" : "" }
                        {report.video ? ", Video" : "" }
                        </span>
                    </div>
                    <div className="overlay">
                      READ MORE
                    </div>
                    <img src={report.thumbnail} alt="..."/>
                    <div class="caption">
                      <h3>{report.title}</h3>
                    <p>{report.preview}</p>
                      {/*<p>*/}
                      {/*<a href="#" class="btn btn-primary" role="button">Read More...</a>*/}
                      {/*</p>*/}
                    </div>
                  </div>
                  </Link>
                </div>
              )}

            </div>
          </section>

          <section class="col-lg-3 col-md-3 sidebar">
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
        {/*<Footer />*/}
      </div>
    );
  }
}
