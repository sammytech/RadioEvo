import React from "react";
import '../sass/footer.scss';

export default class Footer extends React.Component {
  render() {
    var divStyle = {border:"none", overflow:"hidden", width:"300px", height: "500px"}
    return (
      <div className="container-fluid" id="footer">
        <div class="row app-download">
          <div className="col-md-8 info">
            <h1>Download the free app</h1>
          <p>Listen to various kinds of genres, Afro pop, hip hop, rap etc.</p>
          <p>Listen to young people/ young entrepreneurs share their vision and dreams through our weekly shows</p>
          <div class="badges-wrapper">
              <a  target="_blank" href='https://play.google.com/store/apps/details?id=com.radioevo.EvolutionRadio&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img class="google" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
              </a>
              <a  target="_blank" href='https://itunes.apple.com/us/app/evolution-radio/id1075889218?mt=8'>
                <img class="apple"  alt='Download on the App Store' src='img/apple_download.svg'/>
              </a>
          </div>
        </div>
          <div class="col-md-4 devices"></div>

        </div>
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
            {/*<iframe src="//snapwidget.com/in/?u=ZmNiYXJjZWxvbmF8aW58MTIwfDN8NXwwMDAwMDB8bm98NXxub25lfG9uU3RhcnR8eWVzfHllcw==&ve=110516" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="no"></iframe>*/}
            <iframe src="//www.intagme.com/in/?u=ZXZvcmFkaW8yNnxpbnw4NXwzfDV8fHllc3w1fHVuZGVmaW5lZHx5ZXM=" allowTransparency="true" frameborder="0" scrolling="no" style={divStyle} ></iframe>
          </div>
        </div>
        <footer class="row">Designed and Developed by Sammytech 2016</footer>

      </div>
    );
  }
}
