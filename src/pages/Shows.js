import React from "react";
var ReactTabs = require('react-tabs');
var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;
import '../sass/shows.scss'
export default class Shows extends React.Component {

 constructor(props){
   super(props)
   this.state = {
     gallery : [,...Array(10)],
     videos : [,...Array(4)],
     pictures : [,...Array(6)]
   }
 }

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
                    <img src="http://placehold.it/400x400" alt="..."/>
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
