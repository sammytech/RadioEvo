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
        <Tabs
        onSelect={this.handleSelect.bind(this)}
        selectedIndex={0}
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Audios</Tab>
            <Tab>Videos</Tab>
          </TabList>
          <TabPanel>
            <div>
              {this.state.all.map((x, i) =>
                  <MusicCell key={i}
                  title="Eri Wa"
                  preview="Things are happening"
                  audio={(i-1)%2 == 1}
                  video={(i-1)%2 == 0}
                  read={(i-1)%3 == 0}
                />

            )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {this.state.audios.map((x, i) =>
                <MusicCell key={i}
                  title="Eri Wa"
                  preview="Things are happening"
                  audio={true}
                  video={i%2==0}
                  read={i%3==0}
                />
            )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {this.state.videos.map((x, i) =>
                <MusicCell key={i}
                  title="Eri Wa"
                  preview="Things are happening"
                  audio={false}
                  video={true}
                  read={true}
                />
            )}
            </div>
          </TabPanel>
      </Tabs>


      </div>
    );
  }
}
