import React from "react";
import ReactDOM from "react-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import AudioPlayer from "../components/AudioPlayer"
import '../sass/main.scss';

export default class Main extends React.Component {

  render(){
    // console.log(location)
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
