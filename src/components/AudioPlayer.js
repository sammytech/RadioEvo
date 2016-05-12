import React from "react";
import ReactDOM from "react-dom";
// http://stream.breddmedia.hu:8060/live.mp3?icy=http
export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.source,
      elem: null,
      isPlaying: false,
      isLoading: false
    };
    this.playerEvent = {};
  }

  componentDidMount() {
   this.audioTag = ReactDOM.findDOMNode(this.refs.audio);
   this.props.ptag(this.audioTag);
   this.playerEvent.loadStart = () => {
      this.setState({
        isLoading: true
      });
    };

    this.playerEvent.loadEnd = () => {
      this.setState({
        isLoading: false
      });
    };

    this.playerEvent.isPlaying = () => {
      this.setState({
        isPlaying: false
      });
    };

    this.audioTag.addEventListener('ended', this.playerEvent.isPlaying);
    this.audioTag.addEventListener('pause', this.playerEvent.isPlaying);
    this.audioTag.addEventListener('loadeddata', this.playerEvent.loadEnd);
    this.audioTag.addEventListener('loadstart', this.playerEvent.loadStart);
    this.audioTag.addEventListener('suspend', this.playerEvent.loadEnd);
 }

 componentWillUnmount() {
    this.audioTag.removeEventListener('ended', this.playerEvent.isPlaying);
    this.audioTag.removeEventListener('pause', this.playerEvent.isPlaying);
    this.audioTag.removeEventListener('loadeddata', this.playerEvent.loadEnd);
    this.audioTag.removeEventListener('loadstart', this.playerEvent.loadStart);
    this.audioTag.removeEventListener('suspend', this.playerEvent.loadStart);
  }


 _play() {
  //  this.props.stopAll.apply();
   this.audioTag.play();
   this.setState({
     isPlaying: true
   });
  //  ga('send', 'event', 'button', 'click', 'playlist-play');
 }

 _stop() {
    this.audioTag.pause();
    this.setState({
      isPlaying: false
    });
    // ga('send', 'event', 'button', 'click', 'playlist-stop');
  }

  render() {
    return (

      <div class="container">
        <audio ref="audio" preload='none'>
          <source src="http://stream.breddmedia.hu:8060/live.mp3?icy=http" type="audio/mpeg" />
        </audio>
        <div class="row audio-player">
          {/*<div class="col-md-3 social-wrapper">

          </div>*/}
          <div class="col-md-9 controls">
            <div class="row">
              <div class="left">
                <div class="artwork">
                  <img src="img/logo.png"></img>
                </div>
                <div class="artwork-text">
                  Davido - Gobe jwefjljwkef welfjkwjefw fe
                </div>
              </div>
              {/*<div data-icon="ei-spinner-3" data-size="m"></div>*/}
              <div class="center controls-icon">
                { this.state.isPlaying && !this.state.isLoading ?
                  <i class="ion-stop" onClick={this._stop.bind(this)}/> :
                  <i class="ion-play" onClick={this._play.bind(this)}/>
                }
              </div>
              <div class="right controls-icon">
                <i class="ion-volume-high"/>
              </div>
            </div>
          </div>
          <div class="col-md-3 badges-wrapper">
            <div class="row">
              <a class="badges" target="_blank" href='https://play.google.com/store/apps/details?id=com.radioevo.EvolutionRadio&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
              </a>
              <a class="badges" target="_blank" href='https://itunes.apple.com/us/app/evolution-radio/id1075889218?mt=8'>
                <img  alt='Download on the App Store' src='img/apple_download.svg'/>
              </a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
