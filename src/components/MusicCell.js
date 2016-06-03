import React from "react";
import '../sass/media_cell.scss';

export default class MusicCell extends React.Component {

  render(){
    var video;
    var audio;
    var read;
    if(this.props.video){
      video = <a href="#" class="btn btn-primary" role="button">Watch</a>
    }
    if(this.props.audio){
      audio = <a href="#" class="btn btn-primary" role="button">Listen</a>
    }
    if(this.props.read){
      read = <a href="#" class="btn btn-primary" role="button">Read</a>
    }
    return (
      <div class="container" id="media-cell">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src={this.props.image || "http://placehold.it/128x128"} alt="..."/>
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">{this.props.title}</h4>
              <span class="upcoming-name"> {this.props.preview}</span>
              <div>
                {video}
                {audio}
                {read}
              </div>
            </div>

          </div>
      </div>
    );
  }
}
