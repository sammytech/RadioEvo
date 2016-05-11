import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <div class="footer container">
        <div class="social-wrapper row">
          <h1>CONNECT WITH US</h1>
          <div>
            <span>
              <img src="img/fb_logo.png"/>
            </span>
            <span class="twitter-logo">
              <img src="img/twitter_logo.png"/>
            </span>
            <span>
              <a href="https://www.instagram.com/sammyinsta1/?ref=badge">
                <img src="//badges.instagram.com/static/images/ig-badge-48.png" alt="Instagram" />
                </a>
            </span>
            <span>
              <img src="img/youtube_logo.png"/>
            </span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="fb-page" data-href="https://www.facebook.com/evolutionradio26/?fref=ts" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
              <div class="fb-xfbml-parse-ignore">
                <blockquote cite="https://www.facebook.com/evolutionradio26/?fref=ts">
                  <a href="https://www.facebook.com/evolutionradio26/?fref=ts">
                    Evolution Radio
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <a class="twitter-timeline" href="https://twitter.com/EvoRadio26" data-widget-id="730403516888588288">Tweets by @EvoRadio26</a>
          </div>
          <div class="col-md-4">
            {/*<iframe src="//lightwidget.com/widgets/166a4e53c7c358a6be6dddd4dbff9fac.html" id="lightwidget_166a4e53c7" name="lightwidget_166a4e53c7"  scrolling="no" allowtransparency="true" class="lightwidget-widget"></iframe>*/}
            <iframe src="//snapwidget.com/in/?u=ZmNiYXJjZWxvbmF8aW58MTIwfDN8NXwwMDAwMDB8bm98NXxub25lfG9uU3RhcnR8eWVzfHllcw==&ve=110516" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
        <footer class="row">Designed and Developed by Sammytech 2016</footer>

      </div>
    );
  }
}
