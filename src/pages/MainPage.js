import React from "react";
import ReactDOM from "react-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer"

export default class Main extends React.Component {

  render(){
    return (
    <div>
      <Header/>
    <div class="main-page">
        {this.props.children}
      </div>
      <Footer/>
      <div id="audio">
        <AudioPlayer/>
      </div>

    </div>)

  }
}
