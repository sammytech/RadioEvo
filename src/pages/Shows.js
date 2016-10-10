import React from "react";
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;
import LazyLoad from 'react-lazyload';

import '../sass/shows.scss'
export default class Shows extends React.Component {

 constructor(props){
   super(props)
   this.state = {
     gallery : [,...Array(122)],
     videos : [,...Array(4)],
     pictures : [,...Array(6)]
   }
 }
// <img src={"img/event_pic/event-"+(i-1)} alt="..."/>
 handleSelect(i, last){


  }
  render() {
    return (
      <div className="container" id="shows">
        <h1 className="title-header">
          SHOWS
        </h1>
        <Tabs
        onSelect={this.handleSelect.bind(this)}
        selectedIndex={0}
        >
          <TabList>
            <Tab>All</Tab>
            <Tab>Videos</Tab>
            <Tab>Pictures</Tab>
          </TabList>
          <TabPanel>
          
            <div>
              {this.state.gallery.map((x, i) =>
                <div key={i} class="col-xs-6 col-md-3">
                  <a href="#" class="thumbnail">
                    <LazyLoad height={400} once>
                      <img src={"img/event_pic/event-thumbnail-"+(i-1)+".jpg"} />
                    </LazyLoad>
                  </a>
                </div>
            )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {this.state.videos.map((x, i) =>
                <div key={i} class="col-xs-6 col-md-3">
                  <a href="#" class="thumbnail">
                    <img src="http://placehold.it/400x400" alt="..."/>
                  </a>
                </div>
            )}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {this.state.pictures.map((x, i) =>
                <div key={i} class="col-xs-6 col-md-3">
                  <a href="#" class="thumbnail">
                    <img src="http://placehold.it/400x400" alt="..."/>
                  </a>
                </div>
            )}
            </div>
          </TabPanel>
      </Tabs>


      </div>
    );
  }
}
