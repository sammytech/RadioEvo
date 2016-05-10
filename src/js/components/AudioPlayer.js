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
      <div class="audio-container">
        <audio ref="audio" preload='none'>
          <source src="http://stream.breddmedia.hu:8060/live.mp3?icy=http" type="audio/mpeg" />
        </audio>
        <div class="audio-player">
          <div class="artwork">
            <img src="http://placehold.it/400x400"></img>
          </div>
          <div class="artwork-text">
            <p>Davido</p>
          </div>
          <div class="controls">
            <span data-icon="ei-spinner-3" data-size="m"></span>
            <span>
              { this.state.isPlaying && !this.state.isLoading ?
                <i class="icon ion-stop" onClick={this._stop.bind(this)}/> :
                <i class="icon ion-play" onClick={this._play.bind(this)}/>
              }
            </span>
            <span><i class=""></i></span>
          </div>
        </div>
      </div>

    );
  }
}
