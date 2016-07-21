import React from "react";
import ReactDOM from "react-dom";
import Slider from 'react-rangeslider';
var PlayButton = require('react-icons/lib/io/play');
var StopButton = require('react-icons/lib/io/stop');
var VolumeHigh = require('react-icons/lib/io/volume-high');
var VolumeMedium = require('react-icons/lib/io/volume-medium');
var VolumeLow = require('react-icons/lib/io/volume-low');
var VolumeMute = require('react-icons/lib/io/volume-mute');
// import FaBeer from 'react-icons/fa/beer';
// http://stream.breddmedia.hu:8060/live.mp3?icy=http
import '../sass/audioplayer.scss';
export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.source,
      elem: null,
      isPlaying: false,
      isLoading: false,
      value: 100,
      tempValue: 0,
      volumeElem : null
    };
    this.audioPlayer = (
      <audio ref="audio" preload='none'>
        <source src="http://stream.breddmedia.hu:8060/live.mp3?icy=http" type="audio/mpeg" />
      </audio>
    )
    this.playerEvent = {}
    this.handleChange = this.handleChange.bind(this)
    this.mute = this.mute.bind(this)
    this.unmute = this.unmute.bind(this)
  }

  mute(){
    let tempValue = this.state.value || 0
    this.setState({
      tempValue: tempValue
		});
    this.handleChange(0)
  }

  unmute(){
    let tempValue = this.state.tempValue || 0
    this.handleChange(tempValue)
  }

  handleChange(value){
    let volumeElem = null;
    if(value <= 0){
      volumeElem = <VolumeMute onClick={this.unmute} size={26}/>
    } else if(value < (100/3)){
      volumeElem = <VolumeLow onClick={this.mute} size={26}/>
    } else if(value >= (100/3) && value <= (200/3)){
      volumeElem = <VolumeMedium onClick={this.mute} size={26}/>
    } else {
      volumeElem = <VolumeHigh onClick={this.mute} size={26}/>
    }
    this.audioTag.volume = value/100
    this.setState({
			value: value,
      volumeElem: volumeElem
		});
	}
  componentDidMount() {

   this.audioTag = ReactDOM.findDOMNode(this.refs.audio);
  //  this.props.ptag(this.audioTag);
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

    this.handleChange(100)
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
   this.audioTag.volume = (this.state.value/100)
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
    const icon_size = 26;
    // this.handleChange(100)
    return (

      <div class="container-fluid" id="audio-page">
        {this.audioPlayer}
        <div class="row audio-player">
          {/*<div class="col-md-3 social-wrapper">

          </div>*/}
          <div class="col-sm-12 col-md-12 col-lg-12 controls">
            <div class="row">
              <div class="col-sm-6 left">
                <div class="artwork">
                  <img src="img/logo.png"></img>
                </div>
                <div class="artwork-text">
                  Davido - Gobe jwefjljwkef welfjkwjefw fe
                </div>
              </div>
              {/*<div data-icon="ei-spinner-3" data-size="m"></div>*/}
              <div class="col-sm-1 ">
                <div class="center controls-icon">
                <div class="icon">
              { this.state.isPlaying && !this.state.isLoading ?
                 <StopButton size={icon_size} onClick={this._stop.bind(this)}/>:
                 <PlayButton size={icon_size} onClick={this._play.bind(this)}/>
                }


</div>
</div>
              </div>
              <div class="col-sm-5 right controls-icon">
                <div class="volume">
                  <div class="icon">
                    {/*<VolumeUp size={icon_size}/>*/}
                    {this.state.volumeElem}
                  </div>
                  <Slider
                    value={this.state.value}
                    onChange={this.handleChange} />

                </div>
              </div>

            </div>
          </div>
          {/*<div class="col-lg-3 badges-wrapper">
            <div class="row">
              <a class="badges" target="_blank" href='https://play.google.com/store/apps/details?id=com.radioevo.EvolutionRadio&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
              </a>
              <a class="badges" target="_blank" href='https://itunes.apple.com/us/app/evolution-radio/id1075889218?mt=8'>
                <img  alt='Download on the App Store' src='img/apple_download.svg'/>
              </a>
            </div>
          </div>*/}
        </div>
      </div>

    );
  }
}
