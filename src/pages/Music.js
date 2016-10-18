import React from "react";
import MusicCell from "../components/MusicCell"
import '../sass/music.scss';
var ReactTabs = require('react-tabs');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

export default class Music extends React.Component {

 constructor(props){
   super(props)
   this.state = {
     all : [,...Array(10)],
     audios : [,...Array(6)],
     videos : [,...Array(4)],
   }
 }

 handleSelect(i, last){


  }
  render() {
    return (
      <div className="container" id="music">
        <h1 className="title-header">
          MUSIC
        </h1>
        <div className="coming-soon">
          COMING SOON
        </div>
        


      </div>
    );
  }
}
